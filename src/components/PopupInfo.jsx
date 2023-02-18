import React, { useEffect, useState } from 'react';

const PopupInfo = ({ children, setOnOpen = null }) => {
  const [toggle, setToggle] = useState(false);

  const openPopup = () => {
    setToggle(true);
  };
  const closePopup = () => {
    setToggle(false);
  };
  useEffect(() => {
    // console.log(setOnOpen);
    setOnOpen && setOnOpen(() => openPopup);
  }, []);
  return (
    <div className={`popup ${toggle ? 'active' : ''}`}>
      <div className="popup__bg" onClick={closePopup}></div>
      <div className="popup__block">{children}</div>
    </div>
  );
};

export default PopupInfo;
