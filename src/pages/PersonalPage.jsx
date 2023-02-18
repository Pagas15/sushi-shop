import React from 'react';
import TitleBLock from '../components/TitleBlock';

import { useAuth } from '../hooks/use-auth';
const PersonalPage = () => {
  const { email } = useAuth();

  return (
    <section className="profile">
      <div className="profile__wrapper wrapper">
        <h2 className="productItem__title">
          Email: <span>{email}</span>
        </h2>
      </div>
    </section>
  );
};

export default PersonalPage;
