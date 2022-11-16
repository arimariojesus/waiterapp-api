import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3333;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    const app = express();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
