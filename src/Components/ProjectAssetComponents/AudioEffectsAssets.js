import React from 'react';
import {Carousel} from 'react-bootstrap';

class LedDisplayAssets extends React.Component {
    render() {
        return (
            <div className="ProjectAssetCarousel">
                <Carousel interval={null} indicators={false}>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="./ProjectAssets/audioEffects.jpg" alt="audio effects"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video style={{display: "block", margin: "auto", height: "500px" }} controls>
                            <source src="./ProjectAssets/audioEffectsDemo.mp4"></source>
                        </video>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default LedDisplayAssets;