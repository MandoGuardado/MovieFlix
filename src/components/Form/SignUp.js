import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./Form.css";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        getAuth(),
        user.email,
        user.password
      );
      await updateProfile(userCredential.user, {
        displayName: user.name,
        photoURL:
          user.avatar ||
          "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
      });

      console.log(userCredential.user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h3> Sign Up! </h3>
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
        <input
          type='text'
          name='name'
          id=''
          placeholder='Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='avatar'
          id=''
          placeholder='Profile Photo URL'
          onChange={handleChange}
        />
        <button>Sign up!</button>
      </form>
    </div>
  );
};

export default SignUp;
