import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../components/Inputs';
import TitleBLock from '../components/TitleBlock';
import { setUser } from '../store/slices/userSlice';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

const Authorization = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  // const { isAuth } = useAuth();

  // if (isAuth) {
  //   return <Navigate to="/" replace />;
  // }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.uid,
            id: user.accessToken,
          }),
        );
      })
      .catch((error) => {
        alert('An error occurred, please try again later');
        console.log('ERROR! ERRROR CODE: ', error.code, error.message);
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.uid,
            id: user.accessToken,
          }),
        );
      })
      .catch((error) => {
        alert('An error occurred, please try again later');
        console.log('ERROR! ERRROR CODE: ', error.code, error.message);
      });
  };
  return (
    <section className="authorisation">
      <div className="authorisation__wrapper wrapper">
        <div className="authorisation__item">
          <TitleBLock text="Log in" />
          <form className="form" onSubmit={handleLogin}>
            <Input title="Email" type="email" required name="email" />
            <Input title="Password" type="password" required name="password" />
            <button className="button button--square">Log in</button>
          </form>
        </div>
        <div className="authorisation__item">
          <TitleBLock text="Sign Up" />
          <form className="form" onSubmit={handleSignUp}>
            <Input title="Email" type="email" required name="email" />
            <Input title="Password" type="password" required name="password" />
            <button className="button button--square">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Authorization;
