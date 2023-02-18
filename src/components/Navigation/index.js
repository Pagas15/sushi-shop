import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

import style from './Navigation.module.scss';

const Navigation = () => {
  const { isAuth } = useAuth();
  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink to="/" className={style.link}>
          Main
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink to="/products" className={style.link}>
          Products
        </NavLink>
      </li>
      {isAuth && (
        <li className={style.item}>
          <NavLink to="/profile" className={style.link}>
            Profile
          </NavLink>
        </li>
      )}
      {isAuth && (
        <li className={style.item}>
          <NavLink to="/cart" className={style.link}>
            Cart
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
