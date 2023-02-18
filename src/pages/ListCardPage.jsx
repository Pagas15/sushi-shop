import qs from 'qs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../components/Category';
import ProductCard from '../components/Product/ProductCard';
import Sort from '../components/Sort';
import TitleBLock from '../components/TitleBlock';
import { fetchSushi } from '../store/slices/sushiSlice';

const ListCardPage = () => {
  const dispatch = useDispatch();
  const { listSushi, status } = useSelector((state) => state.sushi);
  const { sort, category } = useSelector((state) => state.filters);

  const request = () => {
    const obj = {
      sortBy:
        sort === 'fromPrice' || sort === 'toPrice'
          ? 'price'
          : sort === 'fromWeight' || sort === 'toWeight'
          ? 'weight'
          : sort,
      order: sort === 'fromPrice' || sort === 'fromWeight' ? 'desc' : 'asc',
    };
    if (!!category) {
      obj.category = category;
    }
    const filterSetting = qs.stringify(obj);

    dispatch(fetchSushi(filterSetting));
  };

  useEffect(() => {
    request();
  }, [category, sort]);

  const listSushiComponent = listSushi.map((item) => {
    return <ProductCard key={item.id} {...item} modifier="products__item" />;
  });

  return (
    <section className="products">
      <div className="products__wrapper wrapper">
        <div className="products__filters">
          <Category /> <Sort />
        </div>
        <TitleBLock text="All sushi" />
        <ul className="products__list">{listSushiComponent}</ul>
      </div>
    </section>
  );
};

export default ListCardPage;
