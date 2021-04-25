import React from 'react';
import AboutSecImgR from './AboutSecImgR';
import AboutNew from './AboutNew';
import BuyerSeller from './BuyerSeller';
// import BecomeSeller from './BecomeSeller';
// import BecomeBuyerAbout from './BecomeBuyerAbout';

function About() {
    return (
        <div>
            <header id="pages-header">
                <div class="container pt-5 mt-5">
                    <div class="row">
                        <div class="col-md-6 m-auto text-center text-light mt-5 contact">
                            <h1>About Us</h1>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe.</p>
                        </div>
                    </div>
                </div>
            </header>
            <AboutNew />
            <AboutSecImgR />
            <BuyerSeller/>
            {/* <BecomeBuyerAbout />
            <BecomeSeller /> */}
        </div>
    )
}

export default About
