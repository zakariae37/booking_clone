import { IUser } from "@/database/user.model";
import { Schema } from "mongoose";

export interface CreateServiceParams {
    title: string,
    description: string,
    author: Schema.Types.ObjectId; 
    image: string,
    rooms: number,
    price: number,
    location: string,
    category: string,
    amenities: string[],
    path: string
}

export interface GetUserByIdParams {
  userId: string | null
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

  export interface GetServicesParams {
    page?: number;
    pageSize?: number;
    searchQuery?: string;
    filter?: string;

  }

  export interface GetServiceByIdParams {
    serviceId: string
  }

  export interface ToggleSavedServiceParams {
    userId: string,
    serviceId: string,
    path: string
  }

  export interface GetSavedServicesParams {
    clerkId: string
  }

  export interface VoteServiceParams {
    serviceId: string,
    userId: string,
    hasupVoted: boolean,
    hasdownVoted: boolean,
    path: string
  }

  export interface GlobalSearchParams {
    query?: string | null
  }

 
