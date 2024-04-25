import { Schema, model, models, Document } from 'mongoose'

export interface ILocation extends Document {
    name: string;
    image: string,
    services: Schema.Types.ObjectId[]; 
}

const LocationSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    services: [{ type: Schema.Types.ObjectId, ref: 'Service'}],
})

const Location = models.Location || model('Location', LocationSchema)
export default Location