"use server"

import Location from "@/database/location.model";
import { connectToDB } from "../mongoose";
import Service from "@/database/service.model";

export async function getLocations(params:any) {
    try {
        connectToDB()
        const locations = await Location.find()
            .populate({ path: "services", model: Service })
           
        return { locations }
    } catch (error) {
        console.log(error);
    }
}

export async function getTopLocations() {
    try {
        connectToDB()
        const hotLocations = await Location.find({})
            .sort({ services: -1 })
            .limit(5)
        return hotLocations
    } catch (error) {
        console.log(error);
    }
}