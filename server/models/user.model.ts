import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
	username: string;
	email: string;
	password: string;
	token?: string;
	passwordConfirm?: string;
}

export interface IUserWithId extends IUser {
	_id?: mongoose.Types.ObjectId;
	save?: () => IUser;
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

export default mongoose.model<IUserModel & IUserWithId>('User', UserSchema);
