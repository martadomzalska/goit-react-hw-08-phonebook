import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <div className="home">
        <h1>Welcome to your phonebook!</h1>
        <p>Log in to see your contacts or add new ones :)</p>
      </div>
    </>
  );
}

export default Home;
