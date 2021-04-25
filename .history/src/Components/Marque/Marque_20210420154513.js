import React from 'react';
import './Marque.css';
import taka from '../../img/Taka.svg.png';
import { TrackChanges } from '@material-ui/icons';
import { Button } from 'react-bootstrap';
import { Card } from '@material-ui/core';
import potato from '../../img/1.jpg';

const Marque = () => {
    return (
        <div className="container d-flex justify-content-center out_border">
             <p className="product m-left">Todays Offer</p>
            <div class="Marquee mr-5">
                <div class="Marquee-content">
                    <div class="Marquee-tag">Potato 25 tk</div>
                    <div class="Marquee-tag">Eggplant 50 tk</div>
                    <div class="Marquee-tag">Tomato 20 tk</div>
                    <div class="Marquee-tag">Cucumber 80 tk</div>
                    <div class="Marquee-tag">Carrot 80 tk</div>
                    <div class="Marquee-tag">Onion 40 tk</div>
                    <div class="Marquee-tag">Garlic 100 tk</div>
                    <div class="Marquee-tag">Ginger 100 tk</div>
                </div>
            </div>
        </div>
    );
};

export default Marque;