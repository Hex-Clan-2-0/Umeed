import React from 'react'
import './Welcome.css'
import Image from './images/cute-elderly-senior-age-couple-icon_76775-250.jpg';
import image2 from './images/1241128.png';
function Welcome() {
    return (
       <>
     <div class="page">
        <div class="container">
            <div class="nav-bar">
                <div class="logo dj a"><a href="/">Umeed</a></div>
                <div id="headerWrap">

                    {/* <div class="search"><input type="text" name="" id="SearchInput" placeholder="Search NGO near me"/><i
                            class="fas fa-search" id="searchBtn"></i></div> */}

                    <div class="nav-btn ">
                        <ul>
                            <li><a class="" href="/p/contact">Contact</a></li>
                            {/* <li><a class="" href="/p/emergency">Emergency</a></li> */}
                        </ul>
                    </div>
                    <div class="icons">
                        <i class="fas fa-search" id="searchBtnMobile"></i>
                        <div class="burger-nav">
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-btn-slide ">
                <ul>
                    <li><a class="" href="/p/pendingRequest">Pending Request</a></li>
                    <li><a class="" href="/p/doctorList">NGO's List</a></li>
                    <li><a class="" href="/p/contact">Contact</a></li>
                    {/* <li><a class="" href="/p/emergency">Emergency</a></li> */}
                    <li><a class="" href="/p/logout">Logout</a></li>
                </ul>
            </div>
            <div class="div1Wrapper">
                <div class="div1">
                    <div class="name">
                        WELCOME
                    </div>
                    <div class="name">
                        username
                    </div>
                    <div className="common" id="option1">
                        <i className="fas fa-user-circle"></i>Profile
                    </div>
                    {/* <div className="common" id="option2"><i class="fas fa-flask"></i>Lab Report</div> */}
                    {/* <div className="common" id="option3"><i class="fas fa-prescription"></i>Prescription</div> */}
                    {/* <div className="common" id="option4"><i class="fas fa-file-prescription"></i>E-prescription</div> */}
                    <div className="common" id="option5"><i class="fas fa-hourglass-start"></i>Pending Request</div>
                    <div className="common" id="option7"><i class="fas fa-user-md"></i>NGOs</div>
                    <div className="common" id="option6"><i class="fas fa-sign-out-alt"></i>Logout</div>

                </div>
            </div>
            <div class="div2">

                <div class="first">
                    <div class="heading">Profile </div>
                </div>
                <div class="second">
                    <div class="wrap">
                        <div class="mainprofile">
                            <div class="pDetails">
                                <div id="name">
                                    username
                                </div>
                                <div class="details">
                                    <div id="email"><span>Email: </span>
                                        <input type="text" name="" id="pEmail" / >
                                    </div>
                                    <div id="mobileno"><span>Phone no.:</span>
                                        <input type="text" name="" id="pPhone"/ >

                                    </div>
                                    <div id="address"><span> Address :</span>
                                        <input type="text" name="" id="pAddress"  />

                                    </div>
                                    <div id="timing"><span>Age :</span>
                                        <input type="text" name="" id="pAge" />

                                    </div>

                                    <div class="editBtn">Find NGO near me</div>
                                    <div class="saveBtn">Save</div>
                                    <div class="ProfilecancelBtn">Cancel</div>
                                </div>
                            </div>
                            <div class="profilePic">
                                <img src={Image}/>
                            </div>

                        </div>


                    </div>
                </div>

                <div class="options">
                    <i class="fas fa-flask" id="showLB"></i>
                    <i class="fas fa-prescription" id="showPres"></i>
                    <i class="fas fa-file-prescription" id="showEpres"></i>
                    <i class="fas fa-user-circle" id="showProfile"></i>
                </div>
            </div>

        </div>
    </div>
    
       </>
    )
}

export default Welcome
