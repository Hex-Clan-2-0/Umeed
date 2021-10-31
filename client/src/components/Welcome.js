import React from 'react'
import style from './module.Welcome.css';
import Image from './images/img.jpg';
import image2 from './images/1241128.png';
function Welcome() {
    return (
        <>
            <div class={style.page}>
                <div class={style.container}>
                    <div class={style.navbar}>
                        <div class={`${style.logo} ${style.dj} ${style.a}`}><a href="/">Umeed</a></div>
                        <div id="headerWrap">

                            {/* <div class="search"><input type="text" name="" id="SearchInput" placeholder="Search NGO near me"/><i
                            class="fas fasearch" id="searchBtn"></i></div> */}

                            <div class={style.navbtn}>
                                <ul>
                                    <li><a class="" href="/p/contact">Contact</a></li>
                                    {/* <li><a class="" href="/p/emergency">Emergency</a></li> */}
                                </ul>
                            </div>
                            <div class={style.icons}>
                                <i class='fas fas-earch' id="searchBtnMobile"></i>
                                <div class={style.burgernav}>
                                    <i class='fas fa-bars'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={style.navbtnslide}>
                        <ul>
                            <li><a class="" href="/p/pendingRequest">Pending Request</a></li>
                            <li><a class="" href="/p/doctorList">NGO's List</a></li>
                            <li><a class="" href="/p/contact">Contact</a></li>
                            {/* <li><a class="" href="/p/emergency">Emergency</a></li> */}
                            <li><a class="" href="/p/logout">Logout</a></li>
                        </ul>
                    </div>
                    <div class={style.div1Wrapper}>
                        <div class={style.div1}>
                            <div class={style.name}>
                                WELCOME
                            </div>
                            <div class={style.name}>
                                username
                            </div>
                            <div className={style.common} id={style.option1}>
                            <i className={'${fas}, ${fa-user-circle}'}></i>Profile
                            </div>
                            {/* <div className="common" id="option2"><i class="fas faflask"></i>Lab Report</div> */}
                            {/* <div className="common" id="option3"><i class="fas faprescription"></i>Prescription</div> */}
                            {/* <div className="common" id="option4"><i class="fas fafileprescription"></i>Eprescription</div> */}
                            <div className={style.common} id={style.option5}><i class={'${fas}, ${fahourglassstart}'}></i>Pending Request</div>
                            <div className={style.common} id={style.option7}><i class={'${fas}, ${fausermd}'}></i>NGOs</div>
                            <div className={style.common} id={style.option6}><i class={'${fas}, ${fasignoutalt}'}></i>Logout</div>

                        </div>
                    </div>
                    <div class={style.div2}>

                        <div class={style.first}>
                            <div class={style.heading}>Profile </div>
                        </div>
                        <div class={style.second}>
                            <div class={style.wrap}>
                                <div class={style.mainprofile}>
                                    <div class={style.pDetails}>
                                        <div id={style.name}>
                                            username
                                        </div>
                                        <div class={style.details}>
                                            <div id="email"><span>Email: </span>
                                                <input type="text" name="" id="pEmail" />
                                            </div>
                                            <div id="mobileno"><span>Phone no.:</span>
                                                <input type="text" name="" id="pPhone" />

                                            </div>
                                            <div id="address"><span> Address :</span>
                                                <input type="text" name="" id="pAddress" />

                                            </div>
                                            <div id="timing"><span>Age :</span>
                                                <input type="text" name="" id="pAge" />

                                            </div>

                                            <div class={style.editBtn}>Find NGO near me</div>
                                            <div class={style.saveBtn}>Save</div>
                                            <div class={style.ProfilecancelBtn}>Cancel</div>
                                        </div>
                                    </div>
                                    <div class={style.profilePic}>
                                        <img src={Image} />
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div class={style.options}>
                    <i class={'${fas}, ${fa-flask}'} id={style.showLB}></i>
                    <i class={' ${fas}, ${fa-prescription}'} id={style.showPres}></i>
                    <i class={'${fas} ${fa-file-prescription}'} id={style.showPres}></i>
                    <i class={'${fas}, ${fa-user-circle}'} id={style.showProfile}></i>
                </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Welcome
