import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


function BecomeBuyer() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section class="contact section bd-container " id="contact">
            <div class="ab_contact__container bd-grid pt-5 mt-5">
                <div class="contact__data">
                    <span class="section-subtitle contact__initial">Let's registered</span>
                    <h2 class="section-title contact__initial become_buyer_font">How to become a buyer</h2>
                    <p class="contact__description">If you want to buy product products from our website, you have to Registration frist then login and buy your favourite goods.</p>
                </div>

                <div data-aos="fade-up" class="contact__button">
                    <Link class="button" to="/buyerregistration">Register now</Link>
                </div>
            </div>
        </section>
    )
}

export default BecomeBuyer
