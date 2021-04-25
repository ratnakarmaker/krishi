import React,{useEffect} from 'react';
import Grower1 from '../img/s1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function GrowerSection1() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        
        <section data-aos="fade-up" class="about section bd-container" id="about">
            <div class="about__container  bd-grid mt-5">
                <div class="about__data">
                    <span class="section-subtitle about__initial">Growers</span>
                    <h2 class="section-title about__initial">Growers</h2>
                    <p class="about__description">Arrot’s growers range in size from 10 to over 10,000 decimals lands of vegetables, and can be found farming all along the Northern part and Southern part of Bangladesh. We are developing 10 clusters of vegetables all over Bangladesh. They grow the best organic produce available in the market. Arrot’s carefully hand selects expert growers who hold the same high standards and values to promote mutual success.</p>

                </div>

                <img src={Grower1} class="about__img" />
            </div>
        </section>
    )
}

export default GrowerSection1
