import React from 'react';
import  '../Product/Product.css';
import { Link } from 'react-router-dom';

 
const Product = ({product}) => {
    const {title,description,price,id} = product;
    return (
        <div className='product'>
            <p>Product Id : {id}</p>
           <p>Product Name: {title} </p> 
           <p> Description :{description}</p>
           <h2>Price: ${price}</h2>
           <p><small>Product Link: <Link className='underline' to ={`/Product/${id}`}>{title}</Link></small></p>
           
        </div>
          
        
         
    );
    
};

export default Product;