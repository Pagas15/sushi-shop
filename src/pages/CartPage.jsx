import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import TitleBLock from '../components/TitleBlock';
import { removeType, setCurrent } from '../store/slices/cartSlice';

const CartPage = () => {
  const { listCartItems, totalCount, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onChangeCount = (id, count) => {
    dispatch(setCurrent({ id, count }));
  };

  const onRemoveType = (id) => {
    dispatch(removeType(id));
  };

  const listCart = listCartItems.map((item) => {
    const remuveTypeId = () => {
      onRemoveType(item.id);
    };
    const onSetCount = (count) => {
      onChangeCount(item.id, count);
    };
    return (
      <li className="cart__item cartItem" key={item.id}>
        <Link to={`/products/${item.id}`} className="cartItem__img">
          <img src={item.imageUrl} alt="" />
        </Link>
        <div className="cartItem__cnt">
          <h4 className="cartItem__title">{item.title}</h4>
          <p className="cartItem__weight">Weight: {item.weight} g.</p>
        </div>
        <Counter ollCount={item.count} setCurrentLoc={onSetCount} />
        <button className="cartItem__remove" onClick={remuveTypeId}>
          <svg
            width={10}
            height={10}
            viewBox="0 0 10 10"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="inherit"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="inherit"
            />
          </svg>
        </button>
      </li>
    );
  });
  return (
    <section className="cart">
      <div className="cart__wrapper wrapper">
        <TitleBLock text="Cart :" />
        <ul className="cart__ul">{listCart}</ul>
        <div className="cart__cnt">
          <p className="cartItem__title">
            Total products: <span>{totalCount} pcs.</span>
          </p>
          <p className="cartItem__title">
            Order price: <span>{totalPrice} $</span>
          </p>
        </div>
        <div className="cart__btns">
          <Link to="/products" className="button button--borderWhite">
            Back to products
          </Link>
          <button className="button">Pay now</button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
