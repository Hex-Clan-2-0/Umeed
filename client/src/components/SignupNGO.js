import React from 'react'
import './Signupascontributor.css'
import img1 from './images/signup.jpg'
function Login() {
    return (
<>
<div class="page">
        <div class="nav-bar">
            <div class="logo dj a"><a href="/">Umeed</a></div>
            <div class="nav-btn ">
                <ul>
                    <li><a class="" href="/">Home</a></li>

                </ul>
            </div>
            <div class="burger-nav">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        <div class="nav-btn-slide ">
            <ul>
                <li><a class="" href="/">Home</a></li>

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
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name"/>

                    <label for="email">Email</label>
                    <input type="email" name="" id="email"/>

                    <label for="phone">Mobile Number</label>
                    <input type="text" name="" id="phone"/>
                    
                    <label for="address">Address</label>
                    <input type="text" name="" id="address"/>

                    <label for="age">Age</label>
                    <input type="fees" name="" id="Age"/>

                    <label for="pw">Password</label>
                    <input type="password" name="" id="pw"/>

                    <label for="cpw">Confirm Password</label>
                    <input type="password" name="" id="cpw"/>

                    <div class="message"></div>
                    <div class="submitbtn">SUBMIT</div>
                </form>
            </div>

        </div>
    </div>
  </>

    );
}

export default Login
