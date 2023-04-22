import { useState } from 'react';
import { authActions } from '../store';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // email is invalid
      return;
    }
    if (password.length < 4) {
      // password is too short
      return;
    }
    if (!/\d/.test(password)) {
      // password must include at least one number
      return;
    }
    loginHandler();
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleEmailChange}
              type="email"
              id="email"
              value={email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={handlePasswordChange}
              type="password"
              id="password"
              value={password}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
