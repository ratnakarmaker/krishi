import React,{useEffect} from 'react';
import Grower2 from '../img/about1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function GrowerSection2() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        <section data-aos="fade-up" class="about section bd-container" id="about">
            <div class="  bd-grid ">
                <div class="about__data about1">
                    <span class="section-subtitle about__initial">About Us</span>
                    <h2 class="section-title about__initial">WHO WE ARE</h2>
                    <p class="about__description">Arrot is an organic produce brand owned and operated by Arrot Krishi Ponno Limited. At Arrot we are dedicated to supply quality vegetables free from harmful chemicals to our customers by building strong, lasting relationships with growers who are stewards of the land and their communities. Growers who pack in the Arrot Brand meet our strict criteria for excellence and consistency.</p>

                </div>
                
                </div>
            </section>
    )
}

export default GrowerSection2
