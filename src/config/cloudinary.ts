import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const cloudName = process.env.CLOUD_NAME as string;
const apiKey = process.env.API_KEY as string;
const apiSecret = process.env.API_SECRET as string;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Missing Cloudinary credentials');
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export default cloudinary;
