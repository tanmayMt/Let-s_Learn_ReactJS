/* eslint-disable react/prop-types */
import React from 'react';


const Product = (product) => {
  const {title,price,description,category,image,rating} = product;

  return (
    <article className="product">
      <img className = 'product_img' src={image} alt="" />
      <div className="product_details">
        <h4 className="product_title">product title: {title}</h4>
        <p className='product_price'>Price:{price}</p>
        {/* <p className='product_rating'>Rating: {rating.rate}/{rating.count}</p> */}
        <p className="product_desc">Description: {description}</p>
        <button className="product_btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;