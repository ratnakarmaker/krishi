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

           <section id="blog" class="py-5" data-aos="fade-up">
               <div class="container">
                    <div class="row">
                    <div class="col-md-4 py-5 justify-content-center px-2">
                            <h1>Web Design</h1>
                            <p class="py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda dolorem a, cumque recusandae dolores enim magni exercitationem placeat at facilis ut non nobis laborum aut consequatur vitae in autem earum modi! Perspiciatis in ratione a totam reprehenderit dolores quos corporis maxime quia, velit sit dignissimos fuga ea. Labore, sint?</p>
                            <a href="single-post.html" class="button">Read More</a>
                    </div>
                    <div class="col-md-8">
                            <img src={image} alt=""/>
                    </div>
                    </div>
               </div>
           </section>


           <section id="blog" class="pt-2">
    <div class="container">
      <div class="row">
        <div class="col-md-4">

        <div class="card">
              <img src="assets/img/image2.jpeg" class="card-img-top img-fluid" alt="" />
              <div class="card-body">
                <h4 class="card-title">Blog Post Two</h4>
                <small class="text-muted">Author : Anik</small>
                <hr />
                <p class="card-text lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure non eveniet recusandae minus nesciunt commodi hic consequatur quo officiis quos.
                </p>
                <a href="#" class="button mt-2">Read More</a>
              </div>
            </div>

            <div class="col-md-4">
          <div class="card">
              <img src="assets/img/image1.jpeg" class="card-img-top img-fluid" alt="" />
              <div class="card-body">
                <h4 class="card-title">Blog Post One</h4>
                <small class="text-muted">Author : Mahfuj</small>
                <hr />
                <p class="card-text lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure non eveniet recusandae minus nesciunt commodi hic consequatur quo officiis quos.
                </p>
                <a href="#" class="button mt-2">Read More</a>
              </div>
            </div>
        </div>


        </div>
         </div>   
        </div>
        </section>


            
        </div>
    )
}

export default Blog
