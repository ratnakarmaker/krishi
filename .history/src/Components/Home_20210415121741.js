import React from 'react'

import Card from './Card/Card'
import AboutSection from './AboutSection';
import Talk from './Talk'
import Work from './Work'
import NewSlider from './NewSlider/NewSlider';

function Home() {
    return (
        <div>
            <NewSlider/>
           <AboutSection/>
            <Card/>
            <Work/>
           <Talk/>
        </div>
    )
}

export default Home
