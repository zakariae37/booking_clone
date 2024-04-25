"use server"

import User from "@/database/user.model";
import { connectToDB } from "../mongoose";
import { CreateUserParams, DeleteUserParams, GetSavedServicesParams, GetUserByIdParams, ToggleSavedServiceParams, UpdateUserParams } from "./shared";
import { revalidatePath } from "next/cache";
import Service from "@/database/service.model";

export async function getUserById(params:GetUserByIdParams) {
    try {
        connectToDB()
        const { userId } = params
        const user = await User.findOne({ clerkId: userId })
        return user
    } catch (error) {
        console.log(error);
    }
}

export async function createUser(userData: CreateUserParams) {
    try {
      connectToDB()
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

export async function updateUser(params: UpdateUserParams) {
    try {
      connectToDB()
      const { clerkId, updateData, path } = params;
      await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
      revalidatePath(path);
    } catch (error) {
      console.log(error);
    }
  }
  
export async function deleteUser(params: DeleteUserParams) {
    try {
      connectToDB()
      const { clerkId } = params;
  
      const user = await User.findOneAndDelete({ clerkId });
  
      if (!user) {
        throw new Error("User not found");
      }
  
      await Service.deleteMany({ author: user._id });
  
      const deletedUser = await User.findByIdAndDelete(user._id);
  
      return deletedUser;
    } catch (error) {
      console.log(error);
    }
  }

export async function toggleSavedService(params:ToggleSavedServiceParams) {
  try {
    connectToDB()
    const { userId, serviceId, path } = params
    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }

    const isServiceSaved = user.saved.includes(serviceId)
    if (isServiceSaved) {
      await User.findByIdAndUpdate(userId, { $pull: { saved: serviceId } }, { new: true })
    }else{
      await User.findByIdAndUpdate(userId, { $addToSet: { saved: serviceId }}, { new: true })
    }
    revalidatePath(path)
  } catch (error) {
    console.log(error);
  }
}

export async function getSavedServices(params:GetSavedServicesParams) {
  try {
    connectToDB()
    const { clerkId } = params
    const user = await User.findOne({ clerkId })
      .populate({ path: "saved "})

    if (!user) {
      throw new Error('User not found')
    }

    const savedServices = user.saved

    return { services: savedServices }
  } catch (error) {
    console.log(error);
    
  }
}