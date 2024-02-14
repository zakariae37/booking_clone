"use server"

import Service from "@/database/service.model";
import { connectToDB } from "../mongoose";
import { CreateServiceParams } from "./shared";
import { revalidatePath } from "next/cache";


export async function createService(params:CreateServiceParams) {
    try {
        connectToDB()
        const { title, description, image, author, price, category, amenities, path } = params
        const service = await Service.create({ title, description, image, author, price, category, amenities })
        revalidatePath(path)
        return { service }
    } catch (error) {
        console.log(error);
        
    }
}