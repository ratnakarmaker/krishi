import React from 'react';
import './Marque.css';
import taka from '../../img/Taka.svg.png';
import { TrackChanges } from '@material-ui/icons';
import { Button } from 'react-bootstrap';
import { Card } from '@material-ui/core';
import potato from '../../img/1.jpg';

//background-color: #1d7da5;color: #1d7da5;border-radius: 4px;border-style: solid;border-width: thin;

const Marque = () => {
    return (
        <div className="container d-flex justify-content-center out_border my-lg-5">
             <p className="product m-left">Todays Offer</p>
            <div class="Marquee">
                <div class="Marquee-content">
                    <div class="marqu_height Marquee-tag">Potato 25 tk</div>
                    <span className="separator_marquee"> | </span>
                    <div class="marqu_height Marquee-tag">Eggplant 50 tk</div>
                    <span className="separator_marquee"> | </span>

                    <div class="marqu_height Marquee-tag">Tomato 20 tk</div>
                    <span className="separator_marquee"> | </span>

                    <div class="marqu_height Marquee-tag">Cucumber 80 tk</div>
                    <span className="separator_marquee"> | </span>

                    <div class="marqu_height Marquee-tag">Carrot 80 tk</div>
                    <span className="separator_marquee"> | </span>

                    <div class="marqu_height Marquee-tag">Onion 40 tk</div>
                    <span className="separator_marquee"> | </span>

                    <div class="marqu_height Marquee-tag">Garlic 100 tk</div>
                    <span className="separator_marquee"> | </span>

                    <div class="marqu_height Marquee-tag">Ginger 100 tk</div>
                    <span className="separator_marquee"> | </span>

                </div>
            </div>
        </div>
    );
};

export default Marque;