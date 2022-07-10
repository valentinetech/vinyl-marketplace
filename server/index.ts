import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import process from './types/types';
import { errorHandler } from './middleware/errorMiddleware';

const app = express();
const PORT = process.env.PORT;
const MONGO_TOKEN = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auction', require('./routes/auctionRoutes'));
app.use(errorHandler);

// app.use(bodyParser.json({ limit: '30mb' }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }));
app.use(cors());

mongoose
  .connect(MONGO_TOKEN)
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error: Error) => console.log(error.message));

// app.get('/getUsers', (req, res) => {
//   UserModel.find({}, (err: string, result: string) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.post('/createUser', async (req, res) => {
//   const user = req.body;
//   const newUser = new UserModel(user);
//   await newUser.save();

//   res.json(user);
// });
