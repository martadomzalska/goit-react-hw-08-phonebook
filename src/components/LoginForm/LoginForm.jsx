import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <Link to="/" className={css.button}>
        x
      </Link>
      <h2>Login</h2>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.label}>
          <label className={css.label}>
            Email
            <input className={css.input}  type="email" name="email" />
          </label>
        </div>
        <div className={css.label}>
          <label className={css.label}>
            Password
            <input className={css.input} type="password" name="password" />
          </label>
        </div>
        <button className={css.submitBtn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
