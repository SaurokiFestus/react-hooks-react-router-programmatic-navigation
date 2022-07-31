import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  //if the user is not logged in, take them to back to the login page
  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;