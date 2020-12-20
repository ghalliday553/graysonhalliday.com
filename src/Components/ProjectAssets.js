import React from 'react';
import {Carousel} from 'react-bootstrap';

class ProjectAssets extends React.Component {
    constructor (props) {
        super(props);
        this.handleSelect = (selectedIndex, e) => {
            console.log("insdide handle")
            console.log(selectedIndex)
            this.setState((state, props) => ({
                index: selectedIndex
            }));
          };
        this.state = {
            projectAssets: props.projectAssets,
            index: 0
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps !== this.props){
            this.setState((state, props) => ({
                projectAssets: []
              }));
        }else if(this.state.projectAssets.length == 0) {
            console.log("inside handle 2");
            this.setState((state, props) => ({
                projectAssets: props.projectAssets
              }));
        }
    }

    render() {
        console.log(this.props.projectAssets)
        return (
            <div>
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
                {this.state.projectAssets.map((asset, ind) => {
                    if (asset.isImage) {
                        return (
                            <Carousel.Item key={ind}>
                                <img key={ind + this.state.projectAssets.length} style={{display: "block", margin: "auto", height: "500px" }} src={asset.path} alt={ind}></img>
                            </Carousel.Item>
                            )
                    } else {
                        return (
                            <Carousel.Item key={ind}>
                                <video style={{display: "block", margin: "auto", height: "500px" }} controls key={ind + this.state.projectAssets.length}>
                                    <source src={asset.path} key={ind + (this.state.projectAssets.length)*2}></source>
                                </video>
                            </Carousel.Item>
                            )
                    }
                })}
            </Carousel>
            </div>
        )
    }
}

export default ProjectAssets;