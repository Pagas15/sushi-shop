import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.module.scss';

const Navigation = () => {
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
      <li className={style.item}>
        <NavLink to="/" className={style.link}>
          Order
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
