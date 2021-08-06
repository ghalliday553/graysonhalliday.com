import React from 'react';

class HomeComponent extends React.Component {
    render() {
        return(
            <div>
                <h2 className="HelloTitle">Grayson Halliday</h2>
                <hr></hr>
                <p className="HelloContainer">
                    <p className="HelloContainerText">
                        <p className="HelloText">Hello!</p>
                        <p className="HelloText">My name is Grayson Halliday and I am an electrical engineering graduate of the University of Victoria. Although my interests currently lie within networking and machine learning, I am always looking for new projects to tackle and knowledge to gain.</p>
                        <p className="HelloText">Outside of the workplace my passions involve playing and performing music, sports, and outdoor adventures.</p>
                    </p>
                    <img className="Headshot" src="./headshot.jpeg" alt="headshot"></img>
                </p>
            </div>
        )
    }
}

export default HomeComponent