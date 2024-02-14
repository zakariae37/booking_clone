import { IUser } from "@/database/user.model";
import { Schema } from "mongoose";

export interface CreateServiceParams {
    title: string,
    description: string,
    author: Schema.Types.ObjectId; 
    image: string,
    price: number,
    category: string;
    amenities: string; 
    path: string
}


export interface CreateUserParams {
    clerkId: string;
    name: string;
    email: string;
    picture: string;
  }
  
  export interface UpdateUserParams {
    clerkId: string;
    updateData: Partial<IUser>;
    path: string;
  }
  
  export interface DeleteUserParams {
    clerkId: string;
  }