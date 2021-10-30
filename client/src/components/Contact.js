import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './contact.css';
import { useLocation } from 'react-router';

function Contact() {
    const location = useLocation()

    const [state, setstate] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        message: ""
    })

    const [notification, setnotification] = useState({
        message: "",
        color: ""
    })

    const sendmessage = (e) => {
        e.preventDefault();
        if (state.name.length == 0 || state.email.length == 0 || state.address.length == 0 || state.phone.length == 0 || state.message.length == 0) {
            setnotification({
                message: "Fields cannot be empty",
                color: 'danger'

            });

            return;
        }
        axios.post('http://localhost:5000/mail/send', state)
            .then(response => {
                setnotification({
                    message: response.data.msg,
                    color: 'success'
                });
            })
            .catch(err => {
                setnotification({
                    message: err.message,
                    color: 'danger'
                })
            })

        setstate({ name: "", email: "", address: "", phone: "", message: "" })
    }

    return (
        // <!-- ======= Contact Section ======= -->
        <div className="main">
            <div id="cont" className="cont">
                <div className="container contact-container">
                    {/* <h1 className="brand"><span>Acme</span> Web Design</h1> */}
                    <div className="wrapper animated bounceInLeft">
                        <div className="company-info">
                            <h3><strong>{location.state.name}</strong></h3>
                            <ul>
                                <li><i className="fa fa-road"></i> {location.state.address.city},{location.state.address.state} - {location.state.address.pincode} </li>
                                <li><i className="fa fa-phone"></i>  {location.state.telephone}</li>
                                <li><i className="fa fa-envelope"></i> {location.state.email}</li>

                            </ul>
                        </div>
                        <div className="contact">
                            <h3 style={{ marginBottom: " 30px" }}><strong>Please tell us your details!</strong></h3>
                            {
                                notification.message && notification.message.length > 0 &&
                                < div className={`alert alert-${notification.color}`} role="alert">
                                    {notification.message}
                                </div>
                            }

                            <form>
                                <p>
                                    <label>Name</label>
                                    <input type="text" value={state.name} onChange={e => setstate({ ...state, name: e.target.value })} required />
                                </p>
                                <p>
                                    <label>Phone Number</label>
                                    <input type="text" value={state.phone} onChange={e => setstate({ ...state, phone: e.target.value })} required />
                                </p>
                                <p>
                                    <label>Email ID</label>
                                    <input type="email" value={state.email} onChange={e => setstate({ ...state, email: e.target.value })} required />
                                </p>
                                <p>
                                    <label>Address</label>
                                    <input type="text" value={state.address} onChange={e => setstate({ ...state, address: e.target.value })} required />
                                </p>
                                <p className="full">
                                    <label>Message</label>
                                    <textarea name="message" rows="5" value={state.message} onChange={e => setstate({ ...state, message: e.target.value })} required></textarea>
                                </p>
                                <p className="full">
                                    <button onClick={sendmessage}>Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Contact