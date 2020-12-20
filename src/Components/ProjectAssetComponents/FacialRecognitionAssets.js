import React from 'react';
import {Carousel} from 'react-bootstrap';

class FacialRecognitionAssets extends React.Component {
    render() {
        return (
            <div className="ProjectAssetCarousel">
                <Carousel class="ProjectAssetCarousel">
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="./ProjectAssets/ComingSoon.png" alt="coming soon"></img>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default FacialRecognitionAssets;