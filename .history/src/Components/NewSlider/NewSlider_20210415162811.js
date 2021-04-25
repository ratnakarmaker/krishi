import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../Components/NewSlider/NewSlider.css';
import Image1 from '../../img/s1.jpg';
import Image2 from '../../img/s2.jpg';
import Image3 from '../../img/s3.jpg';
import { CarouselItem } from 'react-bootstrap';
// import { Carousel }  from 'react-bootstrap'

function NewSlider() {
    return (
        <div>
            <Carousel infiniteLoop autoPlay>


            <CarouselItem>
            <div className='image'>
                    <img src={Image1} />

                </div>
                <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
            <div className='image'>
                    <img src={Image2} />

                </div>
                <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
            </CarouselItem>

            <CarouselItem>
            <div className='image'>
                    <img src={Image3} />

                </div>
                <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
            </CarouselItem>


                {/* <div className='image'>
                    <img src={Image1} />
                   
                </div>


                <div className='image'>
                    <img src={Image2} />

                </div>

                <div className='image'>
                    <img src={Image3} />
                </div>

                <div className='image'>
                    <img src={Image1} />
                </div>

                <div className='image'>
                    <img src={Image2} />
                </div> */}

            </Carousel>

        </div>
    )
}

export default NewSlider
