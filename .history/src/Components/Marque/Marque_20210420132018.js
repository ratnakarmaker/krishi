import React from 'react';
import './Marque.css';
import taka from '../../img/Taka.svg.png';
import { TrackChanges } from '@material-ui/icons';
import { Button } from 'react-bootstrap';
import { Card } from '@material-ui/core';
import potato from '../../img/1.jpg';
import Marquee from "react-fast-marquee";


const Marque = () => {
    return (
        <div className="container justify-content-center">
            <div className="row  mx-5">
                <div className="border-red d-flex">
                    <p className="product">
                        Updated Price
                </p>
                    {/* <marquee behavior="scroll" width="100%" direction="left" scrollamount="10">
                        <div className="d-flex element">
                            <h4 className="mr-5"><span className="product_color" >Potato</span>:25 <img src={taka} className="taka_img" alt="" /></h4>
                            <h4 className="mr-5"><span className="product_color" >Eggplant</span>:50 <img src={taka} className="taka_img" alt="" /></h4>
                            <h4 className="mr-5"><span className="product_color" >Tomato</span>:15 <img src={taka} className="taka_img" alt="" /></h4>
                            <h4 className="mr-5"><span className="product_color" >Cucumber</span>:60 <img src={taka} className="taka_img" alt="" /></h4>
                        </div>
                    </marquee> */}
                    {/* <p className="product_1">
                    Todays Offer
                </p> */}
<Marquee pauseOnHover='true'>
  <p>Hello</p>
  <p>World</p>
</Marquee>

                </div>
                {/* <div className="col-md-2 text-right">
                <button type="button" class="btn text-white px-3 button py-2 px-4">See More</button>
            </div> */}
            </div>
        </div>
    );
};

export default Marque;