import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <h1>Im the log page</h1>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

      <h4>Developed by Shubham.</h4>
    </div>
  );
}

export default Login;
