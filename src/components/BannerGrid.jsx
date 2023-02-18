import React from 'react';
import { Link } from 'react-router-dom';

const listBanners = [
  { id: 1, productId: 1, imageUrl: '/assets/image/banner_grid/1.png' },
  { id: 2, productId: 2, imageUrl: '/assets/image/banner_grid/2.png' },
  { id: 3, productId: 3, imageUrl: '/assets/image/banner_grid/3.png' },
  { id: 4, productId: 4, imageUrl: '/assets/image/banner_grid/4.png' },
  { id: 5, productId: 5, imageUrl: '/assets/image/banner_grid/5.png' },
  { id: 6, productId: 6, imageUrl: '/assets/image/banner_grid/6.png' },
  { id: 7, productId: 7, imageUrl: '/assets/image/banner_grid/7.png' },
];

const BannerGrid = () => {
  const listComponentBanners = listBanners.map((item) => {
    return (
      <li className="bannerGrid__item" key={item.id}>
        <Link to={`/products/${item.productId}`} className="bannerGrid__link">
          <img className="bannerGrid__image" src={item.imageUrl} alt="" />
        </Link>
      </li>
    );
  });
  return (
    <section className="bannerGrid">
      <ul className="bannerGrid__wrapper wrapper">{listComponentBanners}</ul>
    </section>
  );
};

export default BannerGrid;
