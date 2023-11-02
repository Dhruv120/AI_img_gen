import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './Routes/postRoutes.js'
import dalleRoutes from './Routes/dalleRoutes.js'

dotenv.config();

const app = express();
app.use(cors({}));


app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'Hello from DALL.E!',
    });
});

const startServer = async () => {
    try {
      connectDB('mongodb+srv://dhd44255:dhd44255@cluster0.nttlszy.mongodb.net/');
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };

startServer();

// mongodb od dhd44255@gmail.com