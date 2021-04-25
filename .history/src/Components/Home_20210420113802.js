import React from 'react'

import Card from './Card/Card'
import AboutSection from './AboutSection';
import Talk from './Talk'
import Work from './Work'
// import NewSlider from './NewSlider/NewSlider';
import Slider from './Slider/Slider';
import Marque from './Marque/Marque';

function Home() {
    return (
        <div>
            <Slider/>
            <Marque />
           <AboutSection/>
            <Card/>
            <Work/>
           <Talk/>
        </div>
    )
}

export default Home
