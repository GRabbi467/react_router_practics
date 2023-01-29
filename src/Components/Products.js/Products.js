import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';


const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1>available products are: {products.length}</h1>
            {
                products.map(product => <Product
                key ={product.id}
                product = {product}
                ></Product>)
            }
           
           
        </div>
    );
};

export default Products;