import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../../Components/NewSlider/NewSlider.css';
import Image1 from '../../img/s1.jpg';
import Image2 from '../../img/s2.jpg';
import Image3 from '../../img/s3.jpg';
// import { CarouselItem } from 'react-bootstrap';
// import { Carousel }  from 'react-bootstrap'

function NewSlider() {
    return (
        <div>
            <Carousel infiniteLoop autoPlay>




                <div className='image'>
                    <img src={Image1} /> 
                    <h1 className="img_txt">Arrot Ensures Standards Of All Vegitables.</h1>
                </div>


                <div className='image'>
                    <img src={Image2} />
                    <h1 className="img_txt">Arrot Ensures Standards Of All Vegitables.
</h1>
                </div>

                <div className='image'>
                    <img src={Image3} />
                    <h1 className="img_txt">Arrot Ensures Standards Of All Vegitables.
</h1>
                </div>

                <div className='image'>
                    <img src={Image1} />
                    <h1 className="img_txt">Arrot Ensures Standards Of All Vegitables.
</h1>
                </div>

                <div className='image'>
                    <img src={Image2} />
                    <h1 className="img_txt">Arrot Ensures Standards Of All Vegitables.
</h1>
                </div>

            </Carousel>

        </div>
    )
}

export default NewSlider
