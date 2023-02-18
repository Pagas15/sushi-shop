import { useDispatch } from 'react-redux';
import { useAuth } from './use-auth';
import { addToCart } from '../store/slices/cartSlice';
import PopupInfo from '../components/PopupInfo';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function useToCart() {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const [funk, setFunk] = useState();

  const onClick = (item) => {
    dispatch(addToCart(item));
  };

  const popup = (
    <PopupInfo setOnOpen={setFunk}>
      <p className="popup__text">
        To add an item to your cart, you need to <Link to="/authorization">log in </Link>
      </p>
    </PopupInfo>
  );

  return isAuth ? [onClick, <></>] : [funk, popup];
}
