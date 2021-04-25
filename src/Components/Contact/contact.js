import React, { Component, useEffect } from 'react'
import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default class contact extends Component {
   
    render() {
        useEffect(() => {
            Aos.init({duration: 2000});
           },[]);
        return (
            <div data-aos="fade-up" className="div0">
                <p>Let's talk</p>
                <div className="div1">
                    <div className="div2">
                        <h1>Contact us</h1>
                        <p>If you want to reserve a table in our restaurant, contact us and we will<br></br> attend you quickly, with our 24/7 chat service.</p>
                    </div>
                    <div className="div3">
                        <Button >Contact Us now</Button>
                    </div>
                </div>
            </div>
        )
    }
}

