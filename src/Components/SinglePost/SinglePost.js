import React,{useEffect} from 'react';
import Image1 from '../../img/imageedit_29_5127185664.9adc5fcd.jpg';
import Image2 from '../../img/imageedit_39_5373247728.0bd88898.jpg';
import Image3 from '../../img/image2.jpeg'; 
import Image4 from '../../img/image1.jpeg'; 
import Image5 from '../../img/image3.jpeg'; 
import '../../Components/SinglePost/SinglePost.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';         

function SinglePost() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        <div>
           

            <section id="single-post">
                <div class="bd-container">
                    <div class="row">
                        <div class="col-md-12 pl-5 pr-5 mt-2">
                            <img src= {Image1} />
                        </div>
                        <div data-aos="fade-up" class="col-md-12">
                            <h2 class="single-post pt-3">I am a Web Developer</h2>
                            <small class="pb-3">Author: Arrot</small>
                            <br />
                            <small class="pb-5 mb-5">Date : Tue Apr 13 2021</small>
                            <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magni libero possimus quasi impedit tempore molestias asperiores, pariatur consequatur facilis provident sunt quo, reprehenderit harum! Nisi voluptatem iste repudiandae nobis odio quos repellat recusandae vero. Ducimus dolor illum non officiis repellendus nobis illo dignissimos iusto! Quam accusamus quisquam quo alias vitae fuga sapiente iusto tempora eius ea. Cupiditate ducimus aperiam, excepturi repudiandae doloribus aut in necessitatibus. Ipsum quasi iure facilis, rerum iusto aliquid optio sapiente saepe vel quibusdam, consequatur molestias nemo! Magni dolor harum, pariatur illo molestias, quae, atque laudantium distinctio animi deserunt quia consectetur consequatur beatae dolorum sunt reiciendis!</p>
                            <div class="row my-2">
                                <div class="col-md-6">
                                    <img src={Image2} />
                                </div>
                                <div class="col-md-6">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magni libero possimus quasi impedit tempore molestias asperiores, pariatur consequatur facilis provident sunt quo, reprehenderit harum! Nisi voluptatem iste repudiandae nobis odio quos repellat recusandae vero. Ducimus dolor illum non officiis repellendus nobis illo dignissimos iusto! Quam accusamus quisquam quo alias vitae fuga sapiente iusto tempora eius ea. vitae fuga sapiente iusto tempora eius ea.</p>
                                </div>

                            </div>
                            <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus magni libero possimus quasi impedit tempore molestias asperiores, pariatur consequatur facilis provident sunt quo, reprehenderit harum! Nisi voluptatem iste repudiandae nobis odio quos repellat recusandae vero. Ducimus dolor illum non officiis repellendus nobis illo dignissimos iusto! Quam accusamus quisquam quo alias vitae fuga sapiente iusto tempora eius ea. Cupiditate ducimus aperiam, excepturi repudiandae doloribus aut in necessitatibus. Ipsum quasi iure facilis, rerum iusto aliquid optio sapiente saepe vel quibusdam, consequatur molestias nemo! Magni dolor harum, pariatur illo molestias, quae, atque laudantium distinctio animi deserunt quia consectetur consequatur beatae dolorum sunt reiciendis!</p>
                        </div>

                    </div>
                </div>
            </section>

            <section data-aos="fade-up" id="blog" class="pt-2">
                <div class="bd-container">
                    <h2 class="py-5">Related Post</h2>
                    <div class="row">
                        <div class="col-md-4 pt-2 pb-1">
                            <div class="card ">
                                <img src={Image3} class="card-img-top img-fluid"  />
                                <div class="card-body">
                                    <h4 class="card-title">Blog Post Two</h4>
                                    <small class="text-muted">Author : Anik</small>
                                </div>
                            </div>


                        </div>

                        <div class="col-md-4 pt-2 pb-1">
                            <div class="card ">
                                <img src={Image4} class="card-img-top img-fluid"  />
                                <div class="card-body">
                                    <h4 class="card-title">Blog Post One</h4>
                                    <small class="text-muted">Author : Mahfuj</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 pt-2 pb-1">
                            <div class="card ">
                                <img src={Image5} class="card-img-top img-fluid"  />
                                <div class="card-body">
                                    <h4 class="card-title">Blog Post Three
                </h4>
                                    <small class="text-muted">Author : Jony</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default SinglePost
