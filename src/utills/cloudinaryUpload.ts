import cloudinary from '../config/cloudinary.js';

export const uploadToCloudinary = async (file: Express.Multer.File, folder: string): Promise<string> => {
    try {
        const result = await cloudinary.uploader.upload(file.path, {
            folder: folder,
            resource_type: 'image',
        });
        return result.secure_url;
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error('Failed to upload image to Cloudinary');
    }
};

export const deleteFromCloudinary = async (imageUrl: string): Promise<void> => {
    try {
        const publicId = imageUrl.split('/').pop()?.split('.')[0];
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }
    } catch (error) {
        console.error('Cloudinary delete error:', error);
    }
};
