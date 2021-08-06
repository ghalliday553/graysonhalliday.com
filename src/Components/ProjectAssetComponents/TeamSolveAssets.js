import React from 'react';
import {Carousel} from 'react-bootstrap';

class TeamSolveAssets extends React.Component {
    render() {
        return (
            <div className="ProjectAssetCarousel">
                <Carousel interval={null} indicators={false}>
                    <Carousel.Item>
                        <video style={{display: "block", margin: "auto", height: "500px"}} controls>
                            <source src="/ProjectAssets/TeamSolve/TeamSolveDemo_V2.mp4" type="video/mp4"></source>
                        </video>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="/ProjectAssets/TeamSolve/UserPage.jpeg" alt="user page"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="/ProjectAssets/TeamSolve/ProblemList.jpeg" alt="problem list"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="/ProjectAssets/TeamSolve/ProblemCreation.jpeg" alt="problem creation"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="/ProjectAssets/TeamSolve/ProblemPage.jpeg" alt="problem page"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="/ProjectAssets/TeamSolve/SolutionPage.jpeg" alt="solution page"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="/ProjectAssets/TeamSolve/FullScreenImage.jpeg" alt="full screen page"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{display: "block", margin: "auto", height: "500px" }} src="/ProjectAssets/TeamSolve/Comments.jpeg" alt="comments page"></img>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default TeamSolveAssets;