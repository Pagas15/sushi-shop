import { useDispatch } from 'react-redux';
import { useAuth } from './use-auth';
import { addToCart } from '../store/slices/cartSlice';

export function useToCart(callBack = () => {}) {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const onClick = (item) => {
    dispatch(addToCart(item));
  };

  return isAuth ? onClick : callBack;
}
