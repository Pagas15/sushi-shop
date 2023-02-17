import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCatefory } from '../../store/slices/filterSlice';
import { VARIANT_CATEGORY } from '../../utill/consts';

import styles from './Category.module.scss';

const Category = () => {
  const variantKeys = Object.keys(VARIANT_CATEGORY).map((key) => Number(key));
  const category = useSelector((state) => state.filters.category);
  const dispatch = useDispatch();

  const onCategory = (indifier) => {
    dispatch(setCatefory(indifier));
  };

  const listVariants = variantKeys.map((key) => {
    const className = category === key ? ' active' : '';
    const onClick = () => {
      onCategory(key);
    };
    return (
      <li key={key} className={styles.category__item}>
        <button className={styles.category__btn + ' button' + className} onClick={onClick}>
          {VARIANT_CATEGORY[key]}
        </button>
      </li>
    );
  });
  return <ul className={styles.category}>{listVariants}</ul>;
};

export default Category;
