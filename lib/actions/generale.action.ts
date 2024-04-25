"use server"

import { connectToDB } from "../mongoose";
import { GlobalSearchParams } from "./shared";

export async function globalSearch(params:GlobalSearchParams) {
    try {
       connectToDB()
    } catch (error) {
        console.log(error);
    }
}