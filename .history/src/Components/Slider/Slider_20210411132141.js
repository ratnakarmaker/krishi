import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from '../../img/s1.jpg';
import Slide2 from '../../img/s2.jpg';
import Slide3 from '../../img/s3.jpg';

function Slider() {
    return (
        // <div>
        //     <Carousel fade>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src={Slide1}
        //                 alt="First slide"
        //             />
        //             <Carousel.Caption>
        //                 <h3>First slide label</h3>
        //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src={Slide2}
        //                 alt="Second slide"
        //             />

        //             <Carousel.Caption>
        //                 <h3>Second slide label</h3>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src={Slide3}
        //                 alt="Third slide"
        //             />

        //             <Carousel.Caption>
        //                 <h3>Third slide label</h3>
        //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>

        <div class="home">
        <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-controls">
          <ol class="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" class="active" style="background-image:url('assets/img/s1.jpg')"></li>
            <li data-target="#carousel" data-slide-to="1" style="background-image:url('assets/img/s2.jpg')"></li>
            <li data-target="#carousel" data-slide-to="2" style="background-image:url('assets/img/s3.jpg')"></li>
            
          </ol>
          <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
           <img src="assets/img/left-arrow.svg" alt="Prev" /> 
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <img src="assets/img/right-arrow.svg" alt="Next" />
        </a>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" style={Slider1}>
            <div class="container">
               <h2></h2>
               <p>Arrot Ensures Standards Of All Vegitables.</p>
            </div>
          </div>
          <div class="carousel-item" style={Slider2}>
            <div class="container">
               <h2></h2>
               <p>Arrot Brings Vegetables From The Field To Your Kitchen.</p>
            </div>
          </div>
          <div class="carousel-item" style={Slider3}>
            <div class="container">
               <h2></h2>
               <p>Better Food, Better Life.</p>
            </div>
          </div>
        </div>
      </div>
       </div>      


    )
}

export default Slider;
