import "../components/Product.scss";
import React from "react";

function Product({ id, title, image, price, rating }) {
  return (
    <div>
      <div className="product">
        <img src={image} alt="" />
        <div className="product__info">
          <p> {title} </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <p className="product__price">
            <small>$</small>
            <strong> {price} </strong>
          </p>
        </div>
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
