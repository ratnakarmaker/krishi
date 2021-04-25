import React, { useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
import About2 from '../img/s2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function BuyerSection3() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    
    return (
        
            <section data-aos="fade-up" class="about section bd-container" id="about">
                <div class="about__container  bd-grid ">
                    <div class="about__data about1">
                        <span class="section-subtitle about__initial">Benefits</span>
                        <h2 class="section-title about__initial display-5">BUYER BENEFITS </h2>
                        <p class="about__description">Arrot is an organic produce brand owned and operated by Arrot Krishi Ponno Limited. At Arrot we are dedicated to supply quality vegetables free from harmful chemicals to our customers by building strong, lasting relationships with growers who are stewards of the land and their communities. Growers who pack in the Arrot Brand meet our strict criteria for excellence and consistency.</p>
                    </div>
                    <div class="about2">
                        <img src={About2} alt="" className="about__img" />
                    </div>
                </div>
            </section>
        
    )
}

export default BuyerSection3
