import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from 'antd';

const CategoryUpload = ({ refresh, setRefresh }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleAddCategory = async () => {
        if (!name) {
            alert('Nhập tên danh mục');
            return;
        }

        try {
            const response = await axios.post('https://media.denlongthiendang.com/add-category', {
                name: name,
            });

            if (response.status === 200) {
                setMessage('Category added successfully!');
                setName('');
                setRefresh(!refresh);
            }
        } catch (error) {
            console.error('Error adding category:', error.response ? error.response.data : error.message);
            setMessage('Failed to add category.');
        }
    };

    return (
        <div>
            <h2>Tạo mới danh mục</h2>
            <div className="d-flex">
                <Input
                    type="text"
                    placeholder="Nhập tên danh mục"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={handleAddCategory}>Thêm</Button>
            </div>

            {message && <p>{message}</p>}
        </div>
    );
};

export default CategoryUpload;
