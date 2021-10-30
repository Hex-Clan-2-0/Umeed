import React from 'react'
import './Loginascontributor.css'
function Login() {
    return (
        <>
        <div class="container">
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
                {/* <li><a class="" href="/d/login">Login As Contributer</a></li> */}
               
            </ul>
        </div>

        <div class="details">
            <div class="heading">
                <h1>Login</h1>
                <h3>Please login to continue as Contributor.</h3>
            </div>
            <div class="twoBtns">
                <div class="login">Login</div>
                <div class="register">Register</div>
            </div>
            <form action="">
                <label for="Email">Email</label>
                <input type="email" name="" id="Email"/>
                <label for="Pwd">Password</label>
                <input type="password" name="" id="Pwd"/>
                <span id="message"></span>
                <div class="options">
                    <div class="submit">Submit</div>
                    {/* <!-- <div class="forget">Forgot Password?</div> --> */}
                </div>

            </form>

        </div>
        <div class="pic">Keeping You Close!</div>
    </div>
        
        </>
    )
}

export default Login
