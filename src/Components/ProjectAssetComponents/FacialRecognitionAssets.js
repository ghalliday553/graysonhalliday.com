import React from 'react';
import {Carousel} from 'react-bootstrap';

class FacialRecognitionAssets extends React.Component {
    render() {
        return (
            <div className="ProjectAssetCarousel">
                <Carousel class="ProjectAssetCarousel">
                    <Carousel.Item>
                        <video style={{display: "block", margin: "auto", height: "500px"}} controls>
                            <source src="/ProjectAssets/IoTFRDemo.mp4" type="video/mp4"></source>
                        </video>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default FacialRecognitionAssets;