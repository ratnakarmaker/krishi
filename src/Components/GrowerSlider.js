import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from '../img/s1.jpg'
import Slide2 from '../img/s2.jpg'
import Slide3 from '../img/s2.jpg'
// import '../../index.css';
// import '../../bootstrap.min.css';

const GrowerSlider = () => {
    return (
        <>
        <section className="homme">

            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 imgg"
                        src={Slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption_title_car">
                        <h1 className="h1p text-center">Arrot Ensures Standards Of All Vegitables.</h1>
                        <button className="slider_button">See More</button>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 imgg"
                        src={Slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="caption_title_car ">
                        <h1 className="h1p text-center">Arrot Brings Vegetables From The Field To Your Kitchen.</h1>
                        <button className="slider_button">See More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgg"
                        src={Slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="caption_title_car ">
                        <h1 className="h1p text-center">Better Food, Better Life</h1>
                        <button className="slider_button">See More</button>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>


        </section>

        </>

    );
};

export default GrowerSlider;