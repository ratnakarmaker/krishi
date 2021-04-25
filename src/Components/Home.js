import React from 'react'

import Card from './Card/Card'
import AboutSection from './AboutSection';
// import Talk from './Talk'
import Work from './Work'
import BecomeBuyer from './BecomeBuyer'
import NewSlider from './NewSlider/NewSlider';
import Marque from './Marque/Marque';
// import NewsLetter from './NewsLetter/NewsLetter';
// import Dashboard from './Dashboard/Dashboard';
import Slider from '../Components/Slider/Slider'
import Subcribtion from '../Components/Subcribtion/Subcribtion'

function Home() {
    return (
        <>
            {/* <NewSlider/> */}
            <Slider />
            <Marque />
           <AboutSection/>
            <Card/>
            <Work/>
            {/* <BecomeBuyer/> */}
            <Subcribtion/>
           {/* <Talk/> */}
           {/* <NewsLetter /> */}
        </>
    )
}

export default Home
