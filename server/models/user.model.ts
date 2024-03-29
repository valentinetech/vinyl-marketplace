import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[x: string]: any;
	username: string;
	email: string;
	password: string;
	token?: string;
}

export interface IUserModel extends Document, IUser {}

const UserSchema: Schema = new Schema(
	{
		username: {
			type: String,
			required: [true, 'Enter Your Username'],
			unique: true,
		},
		email: {
			type: String,
			required: [true, 'Enter Your Email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Enter Your Password'],
		},
	},
	{
		timestamps: false,
		versionKey: false,
	},
);

export default mongoose.model<IUserModel>('User', UserSchema);
