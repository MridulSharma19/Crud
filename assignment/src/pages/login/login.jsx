import React, { useState } from "react";
import axios from "axios";
import "./login.style.css";

const Login = ({ setAuth, history }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const a = await axios.post("/login", credentials);
      if (a.status == 200) {
        setAuth(true);
      }
    } catch (err) {
      alert("login failed");
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div className="admin-login">
      <h1 className="admin-login-heading">Admin Login</h1>
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button className="admin-login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
