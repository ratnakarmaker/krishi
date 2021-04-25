import React, {useEffect} from 'react'
import Image1 from '../../img/about.jpg';
import Image2 from '../../img/about.jpg';
import Image3 from '../../img/about.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';


function Services() { 

    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        <>
            <header id="page-header">
                <div class="container pt-5 mt-5">
                    <div class="row">
                        <div class="col-md-6 m-auto text-center text-light mt-5 contact">
                            <h1>Services</h1>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe.</p>
                        </div>
                    </div>
                </div>
            </header>

            <section data-aos="fade-up" id="authors" class="text-center pt-5 pb-1">
                <div  class="container">
                    <div class="row">
                        <div class="col-12 author__data">
                            <div class="info-authors mb-5 pb-3">
                                <h1 class="author">Meet The Authors </h1>
                                <p class="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, veniam, voluptate! Beatae magni, impedit distinctio. </p>
                            </div>
                        </div>
                    </div>


                    

                    <div class="row author__data ">
                        <div class="col-lg-3 col-md-6 col-sm-12 py-5">
                            <div class="card ">
                                <div class="card-body card-body1">
                                    <img src={Image1} class="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                                    <h3 >Susan Williams</h3>
                                    <h5>Lead Writer</h5>
                                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolores earum numquam vel tempora, ut.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 py-5">
                            <div class="card">
                                <div class="card-body card-body1">
                                    <img src={Image2} class="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                                    <h3 >Grace Smith</h3>
                                    <h5>Co-Writer</h5>
                                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolores earum numquam vel tempora, ut.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 py-5">
                            <div class="card">
                                <div class="card-body card-body1">
                                    <img src={Image3} class="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                                    <h3>John Doe</h3>
                                    <h5>Editor</h5>
                                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolores earum numquam vel tempora, ut.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 py-5">
                            <div class="card">
                                <div class="card-body card-body1">
                                    <img src={Image1} class="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                                    <h3>Kevin Swanson</h3>
                                    <h5>Artist</h5>
                                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolores earum numquam vel tempora, ut.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>

    )


}
export default Services
