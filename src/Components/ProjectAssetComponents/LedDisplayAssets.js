import React from 'react';
import {Carousel} from 'react-bootstrap';

class LedDisplayAssets extends React.Component {
    render() {
        return (
            <div className="ProjectAssetCarousel">
                <Carousel interval={null}>
                    <Carousel.Item>
                        <video style={{display: "block", margin: "auto", height: "500px" }} controls>
                            <source src="./ProjectAssets/ledDemo1.mp4"></source>
                        </video>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption style={{zIndex: "0"}}>
                            <p>Notice: language advisory</p>
                        </Carousel.Caption>
                        <video style={{display: "block", margin: "auto", height: "500px"}} controls>
                            <source src="./ProjectAssets/LedDemo2_Clean.mp4"></source>
                        </video>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default LedDisplayAssets;