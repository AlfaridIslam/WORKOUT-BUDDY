import React from "react";
import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login,error} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email,password)

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h1>LOGIN - Welcome Back</h1>
      <form className="loginform"onSubmit={handleSubmit}>
        <h3>Enter your login details</h3>
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button>Submit</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default Login;
