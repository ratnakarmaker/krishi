import React, { useEffect } from 'react'
import './team.css';
import Image00 from '../../img/sarwar_morshed.jpeg';
import Image11 from '../../img/Anik_Alam.jpg';
import Image22 from '../../img/saiful.jpg';
import Image33 from '../../img/tomo.jpg';
import Image44 from '../../img/emon.jpg';
import Image55 from '../../img/sabbir_hossain.png';
import Image66 from '../../img/Ratna_Rani.jpg';
import Image77 from '../../img/Humayra_Rahman.jpg';
import Image88 from '../../img/Azizul_Haque.jpg';
import Image99 from '../../img/Mahfujur_Rahman.jpg';
import Image10 from '../../img/jony_islam.jpg';


import Aos from 'aos';
import 'aos/dist/aos.css';



function TeamSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>

      <header id="page-headerSaiful">
        <div class="container pt-5 mt-5">
          <div class="row">
            <div class="col-md-6 m-auto text-center text-light mt-5 contact">
              <h1>Team Members</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe.</p>
            </div>
          </div>
        </div>
      </header>


      <section data-aos="fade-up" id="team" className="text-center pt-5 pb-1 mb-5">
        <div className="bd-container justify-content-center">
          <div className="bd-container">
            <div className="row">
              <div className="col-12">
                <div className="info-team mb-5 pb-3">
                  <h4 className="display-5 team"><span className="team-name">Our</span> Teams </h4>
                  <p className="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, veniam, voluptate! Beatae magni, impedit distinctio. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card-body card-body1">
                <img src={Image00} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5> <span className="name">MD.Sarwar Morshed</span></h5>
                <h6>CEO</h6>
                <p className="ta">Mr. Sarwar Morshed has been serving as the CEO of SEleven IT Limited since 2011. He is PhD Research Fellow at Linnaeus University, Sweden.</p>
                <p className="pt-3">Since 2011s</p>
                <div className="d-flex flex-row justify-content-center mr-4">
                  <div className="p-4">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">

              <div className="card-body card-body1">
                <img src={Image11} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5> <span className="name">Anik Alom</span></h5>
                <h6>Team-lead</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit.</p>
                <p className="pt-3">Since 2021s</p>
                <div className="d-flex flex-row justify-content-center mr-4">
                  <div className="p-4">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section data-aos="fade-up" id="team" className="text-center pt-5 pb-1 mb-5">
        <div className="bd-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card-body card-body1">
                <img src={Image22} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5> <span className="name">Md. Saiful Islam</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>
                <div className="d-flex flex-row justify-content-center mr-4">
                  <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">

              <div className="card-body card-body1">
                <img src={Image33} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5><span className="name">Shimul Tamo</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>
                <div className="d-flex flex-row justify-content-center mr-4">
                <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">

              <div className="card-body  card-body1">
                <img src={Image44} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5> <span className="name">Fahim Foysal Emon</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>

                <div className="d-flex flex-row justify-content-center mr-4">
                <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section data-aos="fade-up" id="team" className="text-center pt-5 pb-1 mb-5">
        <div className="bd-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card-body card-body1">
                <img src={Image55} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5> <span className="name">Sabbir Hossain</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>
                <div className="d-flex flex-row justify-content-center mr-4">
                <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">

              <div className="card-body card-body1">
                <img src={Image66} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5><span className="name">Ratna Rani</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>
                <div className="d-flex flex-row justify-content-center mr-4">
                <div className="p-4">
                    <a href="https://www.linkedin.com/in/ratna-karmaker/"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="https://github.com/ratnakarmaker"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="ratnarani.cse@gmail.com"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">

              <div className="card-body card-body1">
                <img src={Image77} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5> <span className="name">Humayra Rahman</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>

                <div className="d-flex flex-row justify-content-center mr-4">
                <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section data-aos="fade-up" id="team" className="text-center pt-5 pb-1 mb-5">
        <div className="bd-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card-body card-body1">
                <img src={Image88} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5> <span className="name">Azizul Haque</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>
                <div className="d-flex flex-row justify-content-center mr-4">
                <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">

              <div className="card-body card-body1">
                <img src={Image99} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5><span className="name">Mahfujur Rahman</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>
                <div className="d-flex flex-row justify-content-center mr-4">
                <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">

              <div className="card-body card-body1">
                <img src={Image10} className="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams" />
                <h5> <span className="name">Jony Islam</span></h5>
                <h6>Jr. Software Developer</h6>
                <p className="ta">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="pt-3">Since 2021s</p>

                <div className="d-flex flex-row justify-content-center mr-4">
                <div className="p-4">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="#"><i class="fab fa-github"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="tel:123-456-7890"><i class="fas fa-phone-alt"></i></a>
                  </div>
                  <div className="p-4">
                    <a href="mailto:matteo@mailgo.dev"><i class="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>

  )

}
export default TeamSection