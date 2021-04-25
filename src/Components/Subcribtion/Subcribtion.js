import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './subcribtioncss.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



function Subcribtion() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="saiful">
            <div className="text-center subcriptionTop container">
                <div className="row headerPart  align-items-center pb-3 pt-5">
                    {/* <div className="headerIcon col-lg-2">
                            <i class="far fa-envelope-open headerIconFar" ></i>
                        </div> */}



                    {/* <div class=" text-left  col-md-5 ml-5">
                    <h2 class="headDesc">How to become a buyer</h2>

                        <span class="headTitle">Let's registered</span>
                        <p class="headDesc">If you want to buy product products from our website, you have to Registration frist then login and buy your favourite goods.</p>
                        <Link data-aos="fade-up" className="button" to="/buyerregistration">Register now</Link>
                    </div>

                    <span className="separator_marquee"> | </span> */}


                    <div className="text-left mt-5  col-md-6 w-49 pb-5">
                        <h3 className="headTitle pb-2">How to become a buyer</h3>
                        <p className="headDesc">If you want to buy product products from our website, you have to Registration frist then login and buy your favourite goods.</p>

                        {/* <Button data-aos="fade-up" className="inputButton input_margin" variant="danger">Subscribe</Button> */}
                        <Link data-aos="fade-up" className="button" to="/registration">Registration</Link>

                    </div>

                    <div className="text-left mt-5  col-md-6 w-49 pb-5">
                        <h3 className="headTitle pb-2">Subscribe us to get update</h3>
                        <p className="headDesc">Enter your name and verified email bellow then hit the Subscribe button.Then you will get our products and service update.</p>
                        <input type="text" className="inputText input_margin mr-3 mb-2" placeholder="Email" />

                        <Link data-aos="fade-up" className="button">Subscribe</Link>

                    </div>

                </div>


            </div>
        </div>
    );
}


export default Subcribtion;