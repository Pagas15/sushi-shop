import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper">
        <Link to="/" className="header__logo">
          <img src={image} alt="logo" />
        </Link>
        <ul className="footer__links">
          <li className="footer__linksItem">
            <a href="/" className="footer__linksLink">
              Privacy terms
            </a>
          </li>
          <li className="footer__linksItem">
            <a href="/" className="footer__linksLink">
              Vacancies
            </a>
          </li>
          <li className="footer__linksItem">
            <a href="/" className="footer__linksLink">
              Products
            </a>
          </li>
          <li className="footer__linksItem">
            <a href="/" className="footer__linksLink">
              GitHub
            </a>
          </li>
          <li className="footer__linksItem">
            <a href="/" className="footer__linksLink">
              Some text
            </a>
          </li>
          <li className="footer__linksItem">
            <a href="/" className="footer__linksLink">
              Some text
            </a>
          </li>
        </ul>
        <ul className="footer__social">
          <li className="footer__socialItem">
            <a href="/" className="footer__socialLink">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <style dangerouslySetInnerHTML={{ __html: '.cls-1{fill:none;}' }} />
                </defs>
                <title />
                <g id="TELEGRAM">
                  <rect className="cls-1" height={32} id="Frame" width={32} />
                  <path
                    d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm8.50867,7.40686L18.04,26.39728a.84081.84081,0,0,1-1.31592.41412L13.613,22.46271l-1.3194,1.25946a.93462.93462,0,0,1-.746.36505l.26989-3.76178.1637-.14386-.005-.0069,8.79711-8.48761c.23816-.21429,0-.45239-.2619-.2619L10.4881,19.42474l-4.2995-3.1488a.84084.84084,0,0,1,.41406-1.316L23.6,8.49817A.68143.68143,0,0,1,24.50867,9.40686Z"
                    data-name="Telegram"
                    id="Telegram-2"
                  />
                </g>
              </svg>
              <span>Telegram</span>
            </a>
          </li>
          <li className="footer__socialItem">
            <a href="/" className="footer__socialLink">
              <svg
                height="512px"
                id="Layer_1"
                style={{ enableBackground: 'new 0 0 512 512' }}
                version="1.1"
                viewBox="0 0 512 512"
                width="512px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html: '\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;}\n',
                  }}
                />
                <g>
                  <path
                    className="st0"
                    d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"
                  />
                </g>
              </svg>
              <span>Github</span>
            </a>
          </li>
          <li className="footer__socialItem">
            <a href="/" className="footer__socialLink">
              <svg
                height="100%"
                style={{
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 2,
                }}
                version="1.1"
                viewBox="0 0 512 512"
                width="100%">
                <path
                  d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
                  style={{ fillRule: 'nonzero' }}
                />
              </svg>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="footer__copyright">
        <p className="wrapper">Copyright © 2023 Just test project</p>
      </div>
    </footer>
  );
};

export default Footer;
