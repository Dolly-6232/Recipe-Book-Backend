import cloudinary from '../config/cloudinary.js';

export const uploadToCloudinary = async (file: Express.Multer.File, folder: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        try {
            console.log('Uploading to Cloudinary:', { filename: file.originalname, mimetype: file.mimetype, size: file.size });
            
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: folder,
                    resource_type: 'image',
                },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary upload stream error:', error);
                        reject(error);
                    } else {
                        console.log('Cloudinary upload successful:', result?.secure_url);
                        resolve(result?.secure_url || '');
                    }
                }
            );

            uploadStream.end(file.buffer);
        } catch (error) {
            console.error('Cloudinary upload error:', error);
            reject(new Error('Failed to upload image to Cloudinary'));
        }
    });
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
