"use server"

import { CreateEventParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";

export const createEvent = async ({ event, userId, path}: CreateEventParams ) => {
    try {
        await connectToDatabase();
        const organizer = await User.findById(userId);
        // console.log(`this is organizer ${organizer}`);
        // console.log(`this is event ${event.categoryId}`);
        if(!organizer){
            throw new Error("Organizer not found");
        }
        const newEvent = await Event.create({ ...event, category:event.categoryId, organizer:userId})
        // console.log(newEvent);
        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
        handleError(error);
    }
}