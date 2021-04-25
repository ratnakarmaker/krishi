import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Talk() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        <section class="contact section bd-container" id="contact">
            <div class="contact__container bd-grid">
                <div class="contact__data">
                    <span class="section-subtitle contact__initial">Let's talk</span>
                    <h2 class="section-title contact__initial">Contact us</h2>
                    <p class="contact__description">If you want to reserve a table in our restaurant, contact us and we
                        will attend you quickly, with our 24/7 chat service.</p>
                </div>

                <div data-aos="fade-up" class="contact__button">
                    
                        <button className="button">Contact us now</button>
                    
                </div>
            </div>
        </section>
    )
}

export default Talk
