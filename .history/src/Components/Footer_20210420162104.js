import React,{useEffect} from 'react';
import logf from '../img/download.png';
// import Fade from 'react-reveal/Fade';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return(
       
        <footer  className="footer section mt-5">
            <div className="footer__container bd-grid  bd-container">
                <div data-aos="fade-up" className="footer__content">
                <a href="#" className="footer__logo"><img src={logf} alt=""/></a>
                    <span className="footer__description">Arrot Krishi Ponno Ltd.</span>
                    {/* <p>Lorem ipsum dolor sit amet<br>adipisicing elit. </p> */}
                    <p> Lorem ipsum dolor sit ametadi pisicing elit. </p>
                    <div className="pt-2">
                        <a href="#" className=" footer__social"><i className="fab fa-facebook-square"></i></a>
                        <a href="#" className=" footer__social"><i className="fab fa-instagram-square"></i></a>
                        <a href="#" className=" footer__social"><i className="fab fa-twitter-square"></i></a>
                     
                    </div>
                </div>

                {/* <div data-aos="fade-up" className="footer__content">
                    <h3 className="footer__title">Services</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Delivery</a></li>
                        <li><a href="#" className="footer__link">Pricing</a></li>
                        <li><a href="#" className="footer__link">Best Quality</a></li>
                        <li><a href="#" className="footer__link">Reserve Order</a></li>
                    </ul>
                </div> */}
                <div data-aos="fade-up" className="footer__content">
                    <h3 className="footer__title text-center">Subscription</h3>
                    <div className="input-field ">
                        <input type="text" className="input-newsletter" placeholder="Name"/><br/>
                        <input type="text" className="input-newsletter" placeholder="Email"/><br/>
                        <input type="text" className="input-newsletter" placeholder="Phone"/><br/>
                        <button className="button newsletter-btn"> Submit</button>
                    </div>
                </div>

                <div data-aos="fade-up" className="footer__content">
                    <h3 className="footer__title">Information</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Event</a></li>
                        <li><a href="#" className="footer__link">Contact us</a></li>
                        <li><a href="#" className="footer__link">Privacy policy</a></li>
                        <li><a href="#" className="footer__link">Terms of services</a></li>
                    </ul>
                </div>

                <div data-aos="fade-up" className="footer__content footer_icon">
                    <h3 className="footer__title">Adress</h3>
                    <ul className="footer-address">
                        <li>1259 (4th Floor),Road 10 Mirpur DOHS,Dhaka</li>
                        <li className="pt-2"></li>
                        <li className="footer_icon pt-2"><i className="fas fa-phone-volume"></i> 999 - 888 - 777</li>
                        <li className="pt-2"><i className="far fa-envelope "></i> support@s11.com</li>
                    </ul>
                </div>
            </div>
           <p className="footer__copy">&#169; {(new Date().getFullYear())} Arrot Krishi Ponno Ltd. All right reserved</p>
            
        </footer>
       

    );
}
export default Footer;