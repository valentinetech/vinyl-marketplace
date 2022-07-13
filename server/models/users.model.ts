import { Schema, model, Document } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

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
