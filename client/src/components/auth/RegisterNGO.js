import React, { useEffect, useState } from "react";
import "./auth.css";

import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

const RegisterNGO = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const auth = getAuth();

  useEffect(() => {
    console.log(email);
  });

  const handleSubmit = () => {
    let info = {
      name,
      email,
      telephone,
      address: {
        city: city,
        pincode: pincode,
        state: state,
      },
    };
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // console.log(user);

        updateProfile(auth.currentUser, { displayName: name }).then(() => {
          axios
            .post("http://localhost:5000/ngo/update", info)
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
            });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div class="container">
      <div class="nav-bar">
        <div class="logo dj a">
          <a href="/">Umeed</a>
        </div>
        <div class="nav-btn ">
          <ul>
            <li>
              <a class="" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div class="burger-nav">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="nav-btn-slide ">
        <ul>
          <li>
            <a class="" href="/">
              Home
            </a>
          </li>
          <li>
            <a class="" href="/d/login">
              Register as NGO
            </a>
          </li>
        </ul>
      </div>

      <div class="details">
        <div class="heading">
          <h1>Login</h1>
          <h3>Please Register your Organization</h3>
        </div>
        <div class="twoBtns">
          <div class="login">Login</div>
          <div class="register">Register</div>
        </div>
        <form action="">
          <label for="name">Name</label>
          <input
            type="text"
            name=""
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="Email">Email</label>
          <input
            type="email"
            name=""
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="Pwd">Password</label>
          <input
            type="password"
            name=""
            id="Pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="address">Address</label>
          <label for="city">City</label>
          <input
            type="text"
            name=""
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label for="pincode">Pincode</label>
          <input
            type="text"
            name=""
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <label for="state">State</label>
          <input
            type="text"
            name=""
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <span id="message"></span>
          <div class="options">
            <div class="submit" onClick={handleSubmit}>
              Submit
            </div>
            {/* <!-- <div class="forget">Forgot Password?</div> --> */}
          </div>
        </form>
      </div>
      <div class="pic">Keeping You Close!</div>
    </div>
  );
};

export default RegisterNGO;
