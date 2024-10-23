// src/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file before uploading.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            // Upload hình ảnh lên server Vercel
            const response = await axios.post('https://thien-dang.vercel.app/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const uploadedImageUrl = response.data.filePath; // URL hình ảnh đã upload
            setImageUrl(uploadedImageUrl);
            setMessage('Image uploaded successfully!');

        } catch (error) {
            console.error('Error uploading the file:', error);
            alert('Failed to upload the file.');
        }
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {imageUrl && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                </div>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default ImageUpload;
