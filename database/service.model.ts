import { Schema, model, models, Document } from 'mongoose'

export interface IService extends Document {
    title: string;
    description: string;
    author: Schema.Types.ObjectId; 
    image: string;
    location: Schema.Types.ObjectId; 
    rooms: number;
    upvotes: Schema.Types.ObjectId[]; 
    downvotes: Schema.Types.ObjectId[];
    views: number;
    price: number;
    category: string;
    amenities: string[]; 
    availability: boolean; 
}

const ServiceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    image: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, ref: 'Location' },
    rooms: { type: Number, default: 0},
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    views: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    category: { type: String, required: true },
    amenities: [{ type: String, required: true }],
    availability: { type: Boolean },
})

const Service = models.Service || model('Service', ServiceSchema)
export default Service 