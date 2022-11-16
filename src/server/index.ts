import 'module-alias/register';

import '../config/module-alias';

import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { router } from './router';

dotenv.config();

const PORT = process.env.PORT || 3333;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
