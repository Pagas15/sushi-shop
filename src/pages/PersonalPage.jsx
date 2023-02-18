import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import { useAuth } from '../hooks/use-auth';
const PersonalPage = () => {
  const { email } = useAuth();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(removeUser());
  };

  return (
    <section className="profile">
      <div className="profile__wrapper wrapper">
        <h2 className="productItem__title">
          Email: <span>{email}</span>
        </h2>
        <button className="button button--square" onClick={logOut}>
          Log out
        </button>
      </div>
    </section>
  );
};

export default PersonalPage;
