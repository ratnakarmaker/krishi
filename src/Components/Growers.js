import React from 'react'
import GrowerSection1 from './GrowerSection1'
import GrowerSection2 from './GrowerSection2'
import GrowerSlider from './GrowerSlider'
import NewSlider from './NewSlider/NewSlider'
import Slider from './Slider/Slider'

function Growers() {
    return (
        <div>
            <GrowerSlider />
            <GrowerSection1/>
            <GrowerSection2/>
        </div>
    )
}

export default Growers
