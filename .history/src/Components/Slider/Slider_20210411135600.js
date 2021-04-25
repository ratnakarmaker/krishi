import React from 'react';
//import { Carousel } from 'react-bootstrap';
// import Slide1 from '../../img/s1.jpg';
// import Slide2 from '../../img/s2.jpg';
// import Slide3 from '../../img/s3.jpg';
import LeftArrow from '../../img/left-arrow.svg';
import RightArrow from '../../img/right-arrow.svg';
import '../../index.css'

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

        <section className="home">
        <div id="carousel" class="carousel slide" data-ride="carousel">
        <div className="carousel-controls">
          <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" className="active SlideOne" ></li>
            <li data-target="#carousel" data-slide-to="1" className="SlideTwo" ></li>
            <li data-target="#carousel" data-slide-to="2" className="SlideThree"></li>
            
          </ol>
          <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
           <img src="../../img/left-arrow.svg" alt="Prev" /> 
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <img src={RightArrow} alt="Next" />
        </a>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active SlideOne" >
            <div className="container">
               <h2>Hello from Arrot</h2>
               <p>Arrot Ensures Standards Of All Vegitables.</p>
            </div>
          </div>
          <div className="carousel-item SlideTwo" >
            <div className="container">
               <h2>Hello from Arrot</h2>
               <p>Arrot Brings Vegetables From The Field To Your Kitchen.</p>
            </div>
          </div>
          <div className="carousel-item SlideThree">
            <div className="container">
               <h2>Hello from Arrot</h2>
               <p>Better Food, Better Life.</p>
            </div>
          </div>
        </div>
      </div>
       </section>      


    )
}

export default Slider;