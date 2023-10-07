import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import css from './RegisterForm.module.css';
import { startTransition } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const registrationStatus = useSelector(
    state => state.auth.registrationStatus
  );

  const handleSubmit = e => {

    e.preventDefault();
    const form = e.currentTarget;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
     startTransition(() => {
       dispatch(register(newUser));
     });
    
  
  
    form.reset();
  };

  return (
    <div className={css.container}>
      <Link className={css.button} to="/">
        x
      </Link>
      <h2>Sign up form</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.label}>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" required />
        </div>
        <div className={css.label}>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" required />
        </div>
        <div className={css.label}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" required />
        </div>

        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
      {registrationStatus === 'loading' && <p>Loading...</p>}
      {registrationStatus === 'succeeded' && <p>Success!</p>}
      {registrationStatus === 'failed' && <p>Error.</p>}
    </div>
  );
};

export default RegisterForm;
