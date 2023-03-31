
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URL);

const connectionString = process.env.MONGO_URL;

const db = await mongoose.connect(connectionString);

const userSchema = new mongoose.Schema({

    name: String,
  capital: String,

});


export const User = db.model("country", userSchema);
