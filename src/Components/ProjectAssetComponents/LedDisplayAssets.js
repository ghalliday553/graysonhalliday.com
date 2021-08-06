import React from 'react';
import {Carousel} from 'react-bootstrap';

class LedDisplayAssets extends React.Component {

    constructor(props) {
        super(props);
        this.currentCarouselIndex = 0
    }
    
    handleSelect = (selectedIndex, e) => {
        if (this.currentCarouselIndex === 0) {
            this.refs.LEDDemo1Ref.pause();
        } else if (this.currentCarouselIndex === 1) {
            this.refs.LEDDemo2Ref.pause();
        }
        this.currentCarouselIndex = selectedIndex;
    }

    render() {
        return (
            <div className="ProjectAssetCarousel">
                <Carousel interval={null} indicators={false} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <video ref="LEDDemo1Ref" style={{display: "block", margin: "auto", height: "500px" }} controls>
                            <source src="/ProjectAssets/ledDemo1.mp4" type="video/mp4"></source>
                        </video>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video ref="LEDDemo2Ref" style={{display: "block", margin: "auto", height: "500px"}} controls>
                            <source src="/ProjectAssets/LEDInstrumental.mp4" type="video/mp4"></source>
                        </video>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default LedDisplayAssets;