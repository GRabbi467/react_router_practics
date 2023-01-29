import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ProductDetail = () => {
    const proDet = useLoaderData();
    const {description,category} = proDet;
    return (
        <div>
            <p>Product Detail : {description}</p>
            <p>Category : {category.name}</p>
            
        </div>
    );
};

export default ProductDetail;