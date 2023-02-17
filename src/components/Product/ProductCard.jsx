import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, weight, description, price, imageUrl, modifier = null }) => {
  return (
    <li className={`productItem ${!!modifier && modifier}`}>
      <Link to={`/products/${id}`}>
        <div className="productItem__img">
          <img src={imageUrl} alt={title} />
        </div>
      </Link>
      <div className="productItem__cnt">
        <Link to={`/products/${id}`}>
          <div className="productItem__top">
            <h2 className="productItem__title">{title}</h2>
            <p className="productItem__weight">{weight} g</p>
          </div>
        </Link>
        <Link to={`/products/${id}`}>
          <p className="productItem__description">
            {description.lenght <= 90 ? description : description.slice(0, 90) + '...'}
          </p>
        </Link>
        <div className="productItem__bottom">
          <button className="button productItem__btn">In cart</button>
          <h3 className="productItem__price">{price} $</h3>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
