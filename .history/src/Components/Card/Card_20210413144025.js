import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import Image1 from '../../img/imageedit_29_5127185664.9adc5fcd.jpg';
import Image2 from '../../img/imageedit_31_5200351415.4b3980fe.jpg';
import Image3 from '../../img/s1.jpg'



function Card() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
  return (
  
    <section data-aos="fade-up" class="services section bd-container" id="services">
        <span class="section-subtitle">Offering</span>
        <h2 class="section-title">Our amazing services</h2>

        <div class="services__container  bd-grid">
            <div class="services__content">
                <img src={Image1} alt=""/>
                    
                <h3 class="services__title">Promote Organics</h3>
                <p class="services__description">Arrot is an organic produce brand owned and operated by Arrot Krishi Ponno Limited. At Arrot we are dedicated to supply quality vegetables free from harmful chemicals to our customers by building strong.</p>
            </div>

            <div class="services__content">
                
                <img src={Image2} alt=""/>

                <h3 class="services__title">A Food Brand Exploring</h3>
                <p class="services__description">With the establishment of a grower liaison, we were able to create a system that maintains the benefit to the growers and to the consumer alike. In the beginning we had 12 growers packing without any Brand.</p>
            </div>

            <div class="services__content">
                <img src={Image3} alt=""/>
                <h3 class="services__title">Safe Delivery</h3>
                <p class="services__description">Every season we begin by meeting with each of our partner growers to determine what they will be growing for us to sell and for distribution. This commitment provides the growers with security that they .</p>
            </div>
        </div>
    </section>
   
  )
}

export default Card
