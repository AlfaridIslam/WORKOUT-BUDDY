import React from "react";
import { useState } from "react";
import { useSignup } from "../../Hooks/useSignup";
import "./signup.css"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signup,error} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email,password);

    setEmail("");
    setPassword("");
  }
  return (
    <>
      <h1>SIGN UP - For Workout Buddy</h1>

      <form className="signupform"   onSubmit={handleSubmit}>
        <h3>Signup with Workout Buddy</h3>
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

export default Signup;
