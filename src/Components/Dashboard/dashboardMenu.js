import React from 'react';
import './dashboaedMenu.css';
import LOGO from '../../img/download.png'
import { Link } from 'react-router-dom';

const dashboardMenu = () => {
    return (
            <aside class="menu-sidebar d-lg-block">
                {/* <div class="logo">
                    <a href="/dashboard">
                        <img className="menue-logo" src={LOGO} alt="Cool Admin" />
                    </a>
                </div> */}
                <div class="menu-sidebar__content js-scrollbar1 ps">
                    <nav class="navbar-sidebar mt-5">
                        <ul class="list-unstyled navbar__list">
                            <li class="active has-sub">
                                <a class="js-arrow" href="https://colorlib.com/polygon/cooladmin/index.html#">
                                    <i class="fas fa-tachometer-alt"></i>Dashboard</a>
                                <ul class="list-unstyled navbar__sub-list js-sub-list">
                                    <li>
                                        <a href="https://colorlib.com/polygon/cooladmin/index.html">Dashboard 1</a>
                                    </li>
                                    <li>
                                        <a href="https://colorlib.com/polygon/cooladmin/index2.html">Dashboard 2</a>
                                    </li>
                                    <li>
                                        <a href="https://colorlib.com/polygon/cooladmin/index3.html">Dashboard 3</a>
                                    </li>
                                    <li>
                                        <a href="https://colorlib.com/polygon/cooladmin/index4.html">Dashboard 4</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="tel:+8801947179930"><i class="fas fa-mobile-alt"></i>01947179930</a>
                            </li>
                            <li>
                                <a href="mailto: support@selevenit.com"><i class="fas fa-envelope-open-text"></i>anik@selevenit.com</a>
                            </li>
                        </ul>
                    </nav>
                    <Link class="go_home_btn" to="/home">Go Back</Link>
                    {/* <div class="ps__rail-x" >
                        <div class="ps__thumb-x" tabindex="0">
                        </div>
                    </div>
                    <div class="ps__rail-y" >
                        
                    </div> */}
                </div>
            </aside>
    );
};

export default dashboardMenu;