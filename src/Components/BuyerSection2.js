import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';



function BuyerSection2() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        <div  class="jonyyyy">
            <section class="contact section bd-container align-items-center" id="contact">
                <div class=" contact__container bd-grid contact-contact  align-items-center">
                    <div class="contact__data text-light pt-4">
                        <span class=" text-light">Let's talk</span>
                        <h2 class="section-title contact__initial text-light">Contact us</h2>
                        <p class="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                    </div>

                    <div data-aos="fade-up" class="contact__button">
                        <Link class="button" to="/contact">Register now</Link>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default BuyerSection2
