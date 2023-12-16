import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    date: Date;
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: { _id: string; name: string };
    organizer: { _id: string; firstname: string, lastname: string };
}


const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String},
    date: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    price: {type:String},
    isFree: {type:Boolean,default:false},
    url: {type:String},
    category: {type:Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type:Schema.Types.ObjectId, ref: 'User'},
})

const Event = models.Event || model('Event', EventSchema);

export default Event;