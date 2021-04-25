import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from '../../img/s1.jpg';
import Slide2 from '../../img/s2.jpg';
import Slide3 from '../../img/s3.jpg';
import LeftArrow from '../../img/left-arrow.svg';
import RightArrow from '../../img/right-arrow.svg';
import '../../index.css'
import '../../bootstrap.min.css';
import Zoom from 'react-reveal/Zoom';



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
      <Carousel id="carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-controls">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active" style={{backgroundImage: `url(${Slide1})`}}></li>
          <li data-target="#carousel" data-slide-to="1" style={{backgroundImage: `url(${Slide2})`}} ></li>
          <li data-target="#carousel" data-slide-to="2" style={{backgroundImage: `url(${Slide3})`}}></li>

        </ol>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
         <img src={LeftArrow} alt="Prev" /> 
      </a>
      <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <img src={RightArrow} alt="Next" />
      </a>
      </div>
      <div className="carousel-inner">
        <Carousel.Item className="active" style={{backgroundImage: `url(${Slide1})`}}>
          <Carousel.Caption className="container">
             {/* <h2>Hello from Arrot</h2> */}
             <p>Arrot Ensures Standards Of All Vegitables.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="" style={{backgroundImage: `url(${Slide1})`}}>
          <Carousel.Caption className="container">
             <h2>Hello from Arrot</h2>
             <p>Arrot Brings Vegetables From The Field To Your Kitchen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="" style={{backgroundImage: `url(${Slide1})`}}>
          <Carousel.Caption className="container">
             <h2>Hello from Arrot</h2>
             <p>Better Food, Better Life.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </div>
    </Carousel>
     </section>      

    // <section className="homme">
    //       <Carousel>
    //   <Carousel.Item interval={3000}>
    //     <img
    //       className="d-block w-100 imgg"
    //       src={Slide1}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //     <Zoom left cascade>
    //       <p className="h33">Helps to live your life happier</p>
    //       {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    //     </Zoom>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   <Carousel.Item interval={3000}>
    //     <img
    //       className="d-block w-100 imgg" 
    //       src={Slide2}
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <Zoom right cascade>
    //     <p className="h33">Arrot for you</p>
    //       {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    //       </Zoom>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   <Carousel.Item interval={3000}>
    //     <img
    //       className="d-block w-100 imgg"
    //       src={Slide3}
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //     <Zoom>
    //     <p className="h33">
    //     Arrot Brings Vegetables From The Field To Your Kitchen.
    //     </p>
    //       {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    //       </Zoom>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>

    // </section>



  )
}

export default Slider;
