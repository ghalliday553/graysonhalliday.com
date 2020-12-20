import React from 'react';

class HomeComponent extends React.Component {
    render() {
        return(
            <div>
                <h2 className="HelloTitle">Grayson Halliday</h2>
                <hr></hr>
                <p className="HelloContainer">
                    <p className="HelloContainerText">
                        <p className="HelloText">I am a fifth-year electrical engineering student at the University of Victoria seeking full time employment for fall 2021.</p>
                        <p className="HelloText">Outside of the workplace my passions involve playing and performing music, sports, and outdoor adventures.</p>
                    </p>
                    <img className="Headshot" src="./headshot.jpeg"></img>
                </p>
            </div>
        )
    }
}

export default HomeComponent