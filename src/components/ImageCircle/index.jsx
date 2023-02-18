import React from 'react';

import styles from './ImageCircle.module.scss';

const ImageCircle = ({ imageUrl, alt = '' }) => {
  return (
    <div className={styles.wrapper + ' imageBlock'}>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default ImageCircle;
