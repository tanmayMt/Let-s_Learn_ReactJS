/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const Products = (products) => {
  return(
    <div className="products">
    {products.products.map((product,id)=>{
        const {title,price,description,category,image,rating} = product;
        return(
          <Product key={id} title={title} price={price} description={description} category={category} image={image} rating={rating}/>
        )
    })}
    </div>
  )
};

export default Products;