import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Form.css";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        getAuth(),
        user.email,
        user.password
      );
      console.log(userCredential.user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h3> Sign In! </h3>
        <input
          type='text'
          name='email'
          id=''
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          id=''
          placeholder='Password'
          onChange={handleChange}
        />

        <button>Sign in!</button>
      </form>
    </div>
  );
};

export default SignIn;
