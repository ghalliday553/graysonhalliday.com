import React from 'react';
import {Carousel} from 'react-bootstrap';

class LedDisplayAssets extends React.Component {
    constructor(props) {
        super(props);
        this.currentCarouselIndex = 0
    }
    
    handleSelect = (selectedIndex, e) => {
        if (this.currentCarouselIndex === 1) {
            this.refs.AudioDemoRef.pause();
        } 
        this.currentCarouselIndex = selectedIndex;
    }

    render() {
        return (
            <div className="ProjectAssetCarousel">
                <Carousel interval={null} indicators={false} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="./ProjectAssets/audioEffects.jpg" alt="audio effects"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video ref="AudioDemoRef" style={{display: "block", margin: "auto", height: "500px" }} controls>
                            <source src="/ProjectAssets/audioEffectsDemo.mp4"></source>
                        </video>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default LedDisplayAssets;