import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../Components/NewSlider/NewSlider.css';
import Image1 from '../../img/s1.jpg';
import Image2 from '../../img/s2.jpg';
import Image3 from '../../img/s3.jpg';
import CarouselCaption  from 'react-bootstrap'
function NewSlider() {
    return (
        <div>
            <Carousel infiniteLoop autoPlay>

                <div className='image'>
                    <img src={Image1} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
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
                </div>

            </Carousel>

        </div>
    )
}

export default NewSlider
