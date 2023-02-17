import React from 'react';

const BannerGrid = () => {
  return (
    <section className="bannerGrid">
      <ul className="bannerGrid__wrapper wrapper">
        <li className="bannerGrid__item">
          <a href="#" className="bannerGrid__link">
            <img
              className="bannerGrid__image"
              src={process.env.PUBLIC_URL + '/assets/image/banner_grid/1.png'}
              alt="image"
            />
          </a>
        </li>
        <li className="bannerGrid__item">
          <a href="#" className="bannerGrid__link">
            <img
              className="bannerGrid__image"
              src={process.env.PUBLIC_URL + '/assets/image/banner_grid/2.png'}
              alt="image"
            />
          </a>
        </li>
        <li className="bannerGrid__item">
          <a href="#" className="bannerGrid__link">
            <img
              className="bannerGrid__image"
              src={process.env.PUBLIC_URL + '/assets/image/banner_grid/3.png'}
              alt="image"
            />
          </a>
        </li>
        <li className="bannerGrid__item">
          <a href="#" className="bannerGrid__link">
            <img
              className="bannerGrid__image"
              src={process.env.PUBLIC_URL + '/assets/image/banner_grid/4.png'}
              alt="image"
            />
          </a>
        </li>
        <li className="bannerGrid__item">
          <a href="#" className="bannerGrid__link">
            <img
              className="bannerGrid__image"
              src={process.env.PUBLIC_URL + '/assets/image/banner_grid/5.png'}
              alt="image"
            />
          </a>
        </li>
        <li className="bannerGrid__item">
          <a href="#" className="bannerGrid__link">
            <img
              className="bannerGrid__image"
              src={process.env.PUBLIC_URL + '/assets/image/banner_grid/6.png'}
              alt="image"
            />
          </a>
        </li>
        <li className="bannerGrid__item">
          <a href="#" className="bannerGrid__link">
            <img
              className="bannerGrid__image"
              src={process.env.PUBLIC_URL + '/assets/image/banner_grid/7.png'}
              alt="image"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default BannerGrid;
