import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>Cart is empty 😕</h2>
      <p>
        You probably haven't ordered sushi yet.
        <br />
        To order sushi, go to the main page.
      </p>
      <Link className="button button--borderWhite" to="/products">
        Come back
      </Link>
    </div>
  );
};

export default CartEmpty;
