import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Subcribtion/subcribtioncss.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function BuyerSeller() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="saiful">
        <div className="text-center subcriptionTop container">
            <div className="row headerPart  align-items-center pb-3 pt-4">
                {/* <div className="headerIcon col-lg-2">
                        <i class="far fa-envelope-open headerIconFar" ></i>
                    </div> */}
                <div className="row">
                <span className="headTitle1">Let's registered</span>

                </div>                 

                <div class="reg_div1 text-left  col-md-6 mt-3">
                    {/* <span class="headTitle">Let's registered</span> */}
                    <h2 class="headDesc">How to become a buyer</h2>
                    <p class="headDesc">If you want to buy product products from our website, you have to Registration frist then login and buy your favourite goods.</p>
                </div>

                <div class="reg_div2 text-left  col-md-6 mt-3">
                    {/* <span class="headTitle">Let's registered</span> */}
                    <h2 class="headDesc">How to become a seller</h2>
                    <p class="headDesc">If you want to sell your products to our website, you have to do Registration frist then login and buy your favourite goods.</p>
                </div>
                
                <div className="row">
                    <div className="">
                    <Link data-aos="fade-up" className="button" to="/registration">Register now</Link>
                    </div>
                </div>



                

            </div>


        </div>
    </div>
    );
}

export default BuyerSeller
