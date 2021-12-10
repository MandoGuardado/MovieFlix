import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) return navigate("/dashboard");

      // Can use user info here if needed.
    });

    return unsubscribe;
  }, []);
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
          value={user.email}
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={user.password}
          placeholder='Password'
          onChange={handleChange}
        />

        <button>Sign in!</button>
      </form>
    </div>
  );
};

export default SignIn;
