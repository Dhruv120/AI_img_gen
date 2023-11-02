import mongoose from "mongoose";

// mongoose connection?



const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => {
      console.error('failed to connect with mongoDB');
      console.error(err);
    });
};

export default connectDB;