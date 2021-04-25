import React,{useEffect} from 'react';
import Buyer from '../img/raspberry-2023404_640 (1).jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import image from "../img/about.jpg"


function Blog() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        <div>
            <header  id="pages-header">
                <div class="container pt-5 mt-5">
                    <div class="row">
                        <div class="col-md-6 m-auto text-center text-light mt-5 contact">
                            <h1>Our Blog</h1>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe.</p>
                        </div>
                    </div>
                </div>
            </header>

            <section data-aos="fade-up">
                <div class="container">
                    <div class="row buyeranimation">
                        <div class="col-md-12">
                            <h1 class="buyers"><span class="bg-white">Our Blog</span></h1>
                            <p class="text-center">Arrot is an organic produce brand owned and operated by Arrot Krishi Ponno Limited.</p>
                        </div>
                    </div>
                </div>
            </section>

           <section>
               <div class="container">
                    <div class="row">
                    <div class="col-md-4 py-5 justify-content-center px-2">
                            <h1>Web Design</h1>
                            <p class="py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda dolorem a, cumque recusandae dolores enim magni exercitationem placeat at facilis ut non nobis laborum aut consequatur vitae in autem earum modi! Perspiciatis in ratione a totam reprehenderit dolores quos corporis maxime quia, velit sit dignissimos fuga ea. Labore, sint?</p>
                            <a href="single-post.html" class="button">Read More</a>
                    </div>
                    <div class="col-md-8 blog-img">
                            <img src={image} class="py-5" alt="" class="about__img">
                    </div>
                    </div>
               </div>
           </section>


            <section data-aos="fade-up" class="about section bd-container jonyyy" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <span class="section-subtitle about__initial">Buyer</span>
                        <h2 class="section-title about__initial display-5">HOW TO BECOME A BUYER</h2>
                        <p class="about__description">Arrot is an organic produce brand owned and operated by Arrot Krishi Ponno Limited. At Arrot we are dedicated to supply quality vegetables free from harmful chemicals to our customers by building strong, lasting relationships with growers who are stewards of the land and their communities. Growers who pack in the Arrot Brand meet our strict criteria for excellence and consistency.</p>

                    </div>

                    <img src={Buyer} alt="" class="about__img" />
                </div>
            </section>
        </div>
    )
}

export default Blog

