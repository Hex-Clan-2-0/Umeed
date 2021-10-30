import React, { useEffect, useState } from "react";
import style from "./module.SignupasIndividual.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import axios from "axios";

function SignupIndividual({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  const auth = getAuth();

  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();

    let info = {
      name,
      age,
      email,
      telephone,
      address: {
        city: city,
        pincode: pincode,
        state: state,
      },
    };
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {
            axios
              .post("http://localhost:5000/user/create", info)
              .then((res) => {
                history.push("/welcome");
              })
              .catch((error) => {
                setMessage(error.message);
              });
          })
          .catch((error) => {
            setMessage(error.message);
            // ..
          });
      }
    );
  };

  return (
    <>
      <div class={style.page}>
        <div class={style.nav-bar}>
          <div class={'${logo}, ${dj}, ${a}'}>
            <a href="/">Umeed</a>
          </div>
          <div class={style.nav-btn}>
            <ul>
              <li>
                <a class="" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div class={style.burger-nav}>
            <i class={'${fas}, ${fa-bars}'}></i>
          </div>
        </div>
        <div class={style.nav-btn-slide}>
          <ul>
            <li>
              <a class="" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>

        <div class={style.container}>
          {/* <img src={img1} alt=""></img> */}
          <div class={style.details}>
            <div class={style.option}>
              <div class={style.loginbtn}>Login</div>
              <div class={style.registerbtn}>Register</div>
            </div>
            <div class={style.heading}>
              <h1>Welcome</h1>
              <h3>CREATE YOUR ACCOUNT</h3>
            </div>
            <form action="" id={style.signupForm}>
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
              <label for="pwd">Password</label>
              <input
                type="password"
                name=""
                id="Pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="telephone">Phone Number</label>
              <input
                type="text"
                name=""
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <label for="telephone">Age</label>
              <input
                type="text"
                name=""
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
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

              <div class={style.submitbtn} onClick={handleSubmit}>
                SUBMIT
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupIndividual;
