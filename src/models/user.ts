import { Schema, Document, model } from 'mongoose';

const schema = new Schema({
  name: String,
});

export interface UserSchema extends Document {
  name: string;
}

export type IUser = UserSchema & Schema.Types.ObjectId;

export default model<IUser>('User', schema);
