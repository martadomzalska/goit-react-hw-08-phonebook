import axios from "axios";

function SignUpForm() {
  const register = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <input placeholder="nickname"></input>
      <input placeholder="email"></input>
      <input placeholder="password"></input>
      <button>Sign up</button>
    </form>
  );
}

export default SignUpForm;
