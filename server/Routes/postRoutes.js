import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../modal/post.js'
dotenv.config();

const router = express.Router();


const CLOUD_NAME = 'ddjnrx3bn';
const API_KEY ='477487612544616';
const API_SECRET_KEY='uipbAJEMcWUZX-KvtlXpPDtW3Ew';

cloudinary.config({
    cloud_name:CLOUD_NAME,
    api_key: API_KEY,
    api_secret:API_SECRET_KEY,
  });



router.route('/').get(async (req, res) => {
    try {
      const posts = await Post.find({});
      res.status(200).json({ success: true, data: posts });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
  });

// ===========================================================================

router.route('/').post(async (req, res) => {
    try {
      const { name, prompt, photo } = req.body;
      const photoUrl = await cloudinary.uploader.upload(photo);
  
      const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url,
      });
  
      res.status(200).json({ success: true, data: newPost });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
});

export default router;