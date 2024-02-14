import { Schema, model, models, Document } from 'mongoose'

export interface IUser extends Document {
    clerkId: string;
    name: string;
    email: string;
    password?: string;
    picture: string;
    saved: Schema.Types.ObjectId[]; 
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    saved: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
    password: { type: String },
    picture: { type: String, required: true },

})

const User = models.User || model('User', UserSchema)
export default User