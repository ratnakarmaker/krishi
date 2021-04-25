import React from 'react'
import './DashboardNav.css';
import Image from '../../img/sarwarmorshed.jpeg';
import LOGO from '../../img/download.png'

function DashboardNav() {
    return (
        <div className="dash_nav  fixed-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 logo pl-5 py-2">
                        <a href="/dashboard">
                            <img className="menue-logo" src={LOGO} alt="Cool Admin" />
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="dash_nav_head text-details d-flex justify-content-start align-items-center mt-3">
                            <h5><i class="fas fa-phone-alt p-1"></i>+880-1947179930</h5>
                            <h5 className='px-3 '><i class="far fa-envelope px-1"></i>support@selevenit.com</h5>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end align-items-center px-5">
                        <div class="account-item ">
                            <div class="image">
                                <img src={Image} />
                            </div>
                            <div class="content">
                                <h3>Sarwar Morshed</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav
