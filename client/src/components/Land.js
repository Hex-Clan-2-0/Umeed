import React from 'react'
import { Link } from 'react-router-dom'
import './land.css';
function Land() {
    return (
        <div class="containerA">
            <div class="div1">
                <div class="headings">
                    <ul>
                        <li><a className="text-dark" href="/p/contact">Contact Us</a></li>
                    </ul>

                </div>
                <div class="content">
                    <strong> <h1>उम्मीद</h1> </strong>
                    <h3>Connecting you with someone who cares.</h3>
                    <h2>Continue as:</h2>
                    <div class="buttons">
                        <div class="loginD"> <Link to="/ngo/register"> NGO </Link> </div>
                        <div class="loginP"> <Link to="/user/register"> Individual</Link> </div>
                    </div>
                </div>

            </div>
            <div class="div2">
                <div class="image2"></div>
                <div class="content2">
                    <h1>Discover</h1>
                    <p>NGOs near you who are willing to help you.</p>
                </div>
            </div>
            <div class="div3">
                <div class="content3">
                    <h1>Taking a step forward</h1>
                    <p>Connect with NGOs who can help you with your problems or social initiatives.</p>
                </div>
                <div class="image3"></div>
            </div>
            <div class="div4">
                <div class="image4"></div>
                <div class="content4">
                    <h1>Spread the Word</h1>
                    <p>Many NGOs who are doing splendid job in their field are often left unnoticed. Help them connect with us</p>
                </div>
            </div>

        </div>

    )
}

export default Land
