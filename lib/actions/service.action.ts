"use server"
import Service from "@/database/service.model";
import { connectToDB } from "../mongoose";
import { CreateServiceParams, GetServiceByIdParams, GetServicesParams, VoteServiceParams,  } from "./shared";
import { revalidatePath } from "next/cache";
import Location from "@/database/location.model";

export async function createService(params: CreateServiceParams) {
    try {
        connectToDB();
        const { title, description, image, author, price, rooms, category, location, amenities, path } = params;
        
        // Create the service
        const service = await Service.create({ title, description, image, author, price, category, rooms, amenities });

        // Find or create the location and update its services array
        const existingLocation = await Location.findOneAndUpdate(
            { name: { $regex: new RegExp(`^${location}$`, "i")}},
            { $setOnInsert: { name: location }, $addToSet: { services: service._id } }, 
            { upsert: true, new: true }
        );

        // Update the service with the location reference
        await Service.findByIdAndUpdate(service._id, { location: existingLocation._id });

        

        
        revalidatePath(path);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getServices(params:GetServicesParams) {
    try {
        connectToDB()
        const { page = 1 , pageSize = 4} = params
        const skipAmount = (page - 1) * pageSize 
        const services = await Service.find()
            .populate({ path: 'location', model: Location })
            .skip(skipAmount)
            .limit(pageSize)

        const totalServices = await Service.countDocuments()
        const isNext = totalServices > skipAmount + services.length
        return { services, isNext }
    } catch (error) {
        console.log();
    }
}

export async function getServiceById(params:GetServiceByIdParams) {
    try {
        connectToDB()
        const { serviceId } = params
        const service = await Service.findById(serviceId)
            .populate({ path: "location", model: Location })
        
        return service
    } catch (error) {
        console.log(error);
    }
}

export async function upvoteService(params:VoteServiceParams) {
    try {
        connectToDB()
        const { serviceId, userId, hasdownVoted, hasupVoted, path } = params
        let updateQuery = {}
        if (hasupVoted) {
            updateQuery = { $pull: { upvotes: userId }}
        } else if (hasdownVoted) {
            updateQuery = { $pull: { downvotes: userId }, $push: { upvotes: userId }}
        }else {
            updateQuery = { $addToSet: { upvotes: userId }}
        }

        const service = await Service.findByIdAndUpdate(serviceId, updateQuery, { new: true })
        if (!service) {
            throw new Error ('Service not found')
        }

        revalidatePath(path)
    } catch (error) {
        console.log(error);
        
    }
}

export async function downvoteService(params:VoteServiceParams) {
    try {
        connectToDB()
        const { serviceId, userId, hasdownVoted, hasupVoted, path } = params
        let updateQuery = {}
        if (hasdownVoted) {
            updateQuery = { $pull: { downvotes: userId }}
        }else if (hasupVoted) {
            updateQuery = { $pull: { upvotes: userId }, $push: { downvotes: userId }}
        }else {
            updateQuery = { $addToSet: { downvotes: userId}}
        }

        const service = await Service.findByIdAndUpdate(serviceId, updateQuery, { new: true })
        if (!service) {
            throw new Error('service not found')
        }

        revalidatePath(path)
    } catch (error) {
        console.log(error);
    }
}














    