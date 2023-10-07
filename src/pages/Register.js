import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';

function Register() {
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <RegisterForm></RegisterForm>
    </>
  );
}

export default Register;
