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
                style= {{fontSize: '25px', marginRight: '30px', marginBottom: '100px'}}
                
            />
 </a>
 </>
        );
    }
}

export default ScrollComponent