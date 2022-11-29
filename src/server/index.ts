import 'module-alias/register';

import '../config/module-alias';

import path from 'node:path';
import http from 'node:http';
import express from 'express';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv';

import { router } from './router';

dotenv.config();

const PORT = process.env.PORT || 3333;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', '..', 'uploads')),
    );
    app.use(express.json());
    app.use(router);

    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(console.error);
