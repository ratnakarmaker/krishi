
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



function ServiceSection3() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        <div  class="saiful">
            <section class="contact section bd-container" id="contact">
                <div class="contact__container bd-grid contact-contact ">
                    <div class="contact__data text-light">
                        <span class=" text-light">Let's registered</span>
                        <h2 class="section-title contact__initial text-light">How to become a buyer</h2>
                        <p class="contact__description">If you want to buy product products from our website, you have to Registration frist then login and buy your favourite goods.</p>
                    </div>

                    <div data-aos="fade-up" class="contact__button">
                        <Link class="button" to="/buyerregistration">Register now</Link>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ServiceSection3
