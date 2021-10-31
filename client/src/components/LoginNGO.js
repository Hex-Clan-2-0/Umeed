import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import style from "./module.Loginascontributor.css";
function LoginNGO({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const auth = getAuth();

  const handeSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        //show errors
        setMessage(error.message);
      });
  };
  return (
    <>
      <div class={style.container}>
        <div class={style.navbar}>
          <div class={'${logo}, ${dj}, ${a}'}>
            <a href="/">Umeed</a>
          </div>
          <div class={style.navbtn}>
            <ul>
              <li>
                <a class="" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div class={style.burgernav}>
            <i class={'${fas}, ${fa-bars}'}></i>
          </div>
        </div>
        <div class={style.navbtnslide }>
          <ul>
            <li>
              <a class="" href="/">
                Home
              </a>
            </li>
            {/* <li><a class="" href="/d/login">Login As Contributer</a></li> */}
          </ul>
        </div>

        <div class={style.details}>
          <div class={style.heading}>
            <h1>Login</h1>
            <h3>Please login to continue as Contributor.</h3>
          </div>
          <div class={style.twoBtns}>
            <div class={style.login}>Login</div>
            <div class={style.register}>Register</div>
          </div>
          <form action="">
            <label for="Email">Email</label>
            <input type="email" name="" id={style.Email} />
            <label for="Pwd">Password</label>
            <input type="password" name="" id="Pwd" />
            {message.length > 0 && <span id="message">{message}</span>}

            <div class={style.options}>
              <div class={style.submit} onClick={handeSubmit}>
                Submit
              </div>
              {/* <!-- <div class="forget">Forgot Password?</div> --> */}
            </div>
          </form>
        </div>
        <div class={style.pic}>Keeping You Close!</div>
      </div>
    </>
  );
}

export default LoginNGO;
