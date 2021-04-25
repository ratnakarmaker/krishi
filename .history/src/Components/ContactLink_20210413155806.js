import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ContactLink() {
  useEffect(() => {
    Aos.init({duration: 2000});
   },[]);
  return (

    <div>
      
      <header id="page-headers">
        <div className="container pt-5 mt-5">
          <div className="row">
            <div className="col-md-6 m-auto text-center text-light mt-5 contact">
              <h1>Contact Us</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe.</p>
            </div>
          </div>
        </div>
      </header>

      

      <section data-aos="fade-up" id="contact" className="py-5">
        <div className="container">
          <div className="row pt-5 contact__data">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-4 text-center">Please fill out this form to contact us</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group py-2">
                        <input type="text" placeholder="First Name" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group py-2">
                        <input type="text" placeholder="Last Name" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group py-2">
                        <input type="email" placeholder="Email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group py-2">
                        <input type="text" placeholder="Phone Number" className="form-control " />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group py-2">
                        <textarea cols="30" rows="5" placeholder="Message" className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <input type="submit" className="btn btn-block  btn-danger" value="Send" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body py-5">
                  <h4>Get In Touch</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequuntur.</p>
                  <h4>Address</h4>
                  <p><i className="fas fa-map-marker-alt"></i> 1259 (4th Floor),Road 10 Mirpur DOHS,Dhaka</p>

                  <p><i className="far fa-envelope"></i> support@selevenit.com</p>

                  <p className="mb-2"><i className="fas fa-phone-volume"></i> 01767100058</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    


    </div>
  )
}

export default ContactLink

