import React from 'react';

class EducationComponent extends React.Component {
  render() {
    return (
      <div>
        <img src="./UVIC_logo.png" alt="UVic logo"/>
        <p class="EducationHeader"> University Of Victoria </p>
        <hr></hr>
        <p class="EducationHeader"> Electrical Engineering | Graduating August 2021 </p>
        <a href="./currentTranscript.pdf" style={{marginLeft: "25px"}}>Current Transcript</a>
      </div>
    );
  }
}

export default EducationComponent;