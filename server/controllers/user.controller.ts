import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/users.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// @desc     Register new user
// @route    POST /api/users
// @access   Public
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  //Check if user exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc     Authenticate user
// @route    POST /api/users/login
// @access   Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: 'Register user' });
});

// @desc     Get user data
// @route    POST /api/users/me
// @access   Public
export const getMe = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: 'Register user' });
});
