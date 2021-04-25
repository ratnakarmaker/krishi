import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import About2 from '../img/s1.jpg';

function Work() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section data-aos="fade-up" className="about section bd-container jonyy my-5" id="about">
            <div className="about__container  bd-grid">
                <div className="about__data">
                    <span className="section-subtitle about__initial">HOW IT WORKS</span>
                    <h2 className="section-title about__initial">A FARMING PHILOSOPHY</h2>
                    <p className="about__description">Every season we begin by meeting with each of our partner growers to determine what they will be growing for us to sell and for distribution. This commitment provides the growers with security that they will have a market for their produce, and gives Arrot’s a steady supply of top quality organic produce for our customers..</p>
                    <button className="button">Explore history</button>
                </div>
                <img src={About2} alt="" className="about__img" />
            </div>
        </section>

    )
}

export default Work
