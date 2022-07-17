import mongoose, { Schema, model, Document, ObjectId, Model } from 'mongoose';

export interface IUserModel extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUserModel>(
  {
    name: {
      type: String,
      required: [true, 'Please enter Your name.'],
    },
    email: {
      type: String,
      required: [true, 'Please enter Your email.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter Your name.'],
    },
  },
  {
    timestamps: true,
  }
);

export default model<IUserModel>('User', UserSchema);
