import React, { useEffect, useState } from "react";
import "./Signupascontributor.css";
import img1 from "./images/signup.jpg";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import axios from "axios";
function SignupNGO() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  const auth = getAuth();

  useEffect(() => {});

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
              setMessage(error.message);
            });
        });
      })
      .catch((error) => {
        setMessage(error.message);
        // ..
      });
  };
  return (
    <>
      <div class="page">
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
          </ul>
        </div>

        <div class="container">
          <img src={img1} alt=""></img>
          <div class="details">
            <div class="option">
              <div class="loginbtn">Login</div>
              <div class="registerbtn">Register</div>
            </div>
            <div class="heading">
              <h1>Welcome</h1>
              <h3>CREATE YOUR ACCOUNT</h3>
            </div>
            <form action="" id="signupForm">
              <label for="name">Name </label>
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

              {message.length > 0 && <span id="message">{message}</span>}

              <div class="submitbtn" onClick={handleSubmit}>
                SUBMIT
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupNGO;
