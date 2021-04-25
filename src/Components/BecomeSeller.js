import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const BecomeSeller = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section class="contact section bd-container " id="contact">
            <div class="ab_contact__container bd-grid pt-5">
                <div class="contact__data">
                    <span class="section-subtitle contact__initial">Let's registered</span>
                    <h2 class="section-title contact__initial become_buyer_font">How to become a Seller</h2>
                    <p class="contact__description">If you want to sell products through our website, you have to Registration first then login and post your favourite goods.</p>
                </div>

                <div data-aos="fade-up" class="contact__button">
                    <Link class="button" to="/buyerregistration">Register now</Link>
                </div>
            </div>
        </section>
    );
};

export default BecomeSeller;