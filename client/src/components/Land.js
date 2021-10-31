import React from 'react'
import style from './land.module.css';
function Land() {
    return (
        <div class={style.containerA}>
        <div class={style.div1}>
            <div class={style.headings}>
                <ul>
                    {/* <li><a href="/p/emergency">Emergency</a></li> */}
                    <li><a href="/p/contact">Contact Us</a></li>
                    
                </ul>

            </div>
            <div class={style.content}>
               <strong> <h1>उम्मीद</h1> </strong>
                <h3>Connecting you with someone who cares.</h3>
                <h2>Continue as:</h2>
                <div class={style.buttons}>
                    <div class={style.loginD}>NGO</div>
                    <div class={style.loginP}>Individual</div>
                </div>
            </div>
            
        </div>
        <div class={style.div1}>
            <div class={style.image2}></div>
            <div class={style.content2}>
                <h1>Discover</h1>
                <p>NGOs near you who are willing to help you.</p>
            </div>
        </div>
        <div class={style.div3}>
            <div class={style.content3}>
                <h1>Taking a step forward</h1>
                <p>Connect with NGOs who can help you with your problems or social initiatives.</p>
            </div>
            <div class={style.image3}></div>
        </div>
        <div class={style.div4}>
            <div class={style.image4}></div>
            <div class={style.content4}>
                <h1>Spread the Word</h1>
                <p>Many NGOs who are doing splendid job in their field are often left unnoticed. Help them connect with us</p>
            </div>
        </div>
        
    </div>

    )
}

export default Land
