import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import { useAuth } from '../hooks/use-auth';
import ImageCircle from '../components/ImageCircle';
const PersonalPage = () => {
  const { email, name, avatar, number } = useAuth();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(removeUser());
  };

  return (
    <section className="profile">
      <div className="profile__wrapper wrapper">
        {avatar && <ImageCircle imageUrl={avatar} />}
        {name && (
          <h2 className="productItem__title">
            Name: <span>{name}</span>
          </h2>
        )}
        {number && (
          <h2 className="productItem__title">
            Phone number: <span>{number}</span>
          </h2>
        )}
        {email && (
          <h2 className="productItem__title">
            Email: <span>{email}</span>
          </h2>
        )}
        <button className="button button--square" onClick={logOut}>
          Log out
        </button>
      </div>
    </section>
  );
};

export default PersonalPage;
