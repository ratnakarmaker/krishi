import React, {Component} from 'react'
import ScrollButton from 'react-scroll-button'
 
class ScrollComponent extends Component {
    render() {
        return (
 <>
 <a href="#">
 <ScrollButton 
                behavior={'smooth'} 
                buttonBackgroundColor={'red'}
                iconType={'arrow-up'}
                style= {{fontSize: '25px', marginRight: '15px', marginBottom: '100px', zIndex : -99}}
                
            />
 </a>
 </>
        );
    }
}

export default ScrollComponent