import React from 'react';
import ProjectDescription from './ProjectDescription.js'
import ProjectOverview from './ProjectOverview'
import TeamSolveAssets from './ProjectAssetComponents/TeamSolveAssets.js';
import LedDisplayAssets from './ProjectAssetComponents/LedDisplayAssets.js';
import FatigueDetectionAssets from './ProjectAssetComponents/FatigueDetectionAssets.js';
import FacialRecognitionAssets from './ProjectAssetComponents/FacialRecognitionAssets.js';
import AudioEffectsAssets from './ProjectAssetComponents/AudioEffectsAssets.js';

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.teamSolve = {
            projectName: "TeamSolve iOS Application",
            projectOverviewText: ["TeamSolve is an iOS application designed to promote team collaboration and improve productivity by providing an instant messaging service within problem contexts.",
                                "Currently, teams rely on instant messaging services such as slack or facebook messenger. However, these services behave poorly once multiple team members collaborating on a problem generate multiple trains of thought. The growing number of responses becomes increasingly hard to follow, providing a barrier to additional contribution and lowering team productivity.",
                                "TeamSolve instead allows a user to define a problem, requests peers to define solutions, and then facilitates all discussions within the context of the parent problem or solution."],
            projectDescriptionList: ["Rich user interfaces utilizing Swift and the iOS SDK",
                                    "Scalable backend using NodeJS, Express, MongoDb, and Mongoose",
                                    "Beta targeted for early 2021"],
            assets: <TeamSolveAssets></TeamSolveAssets>
        }
        this.ledDisplay = {
            projectName: "Network-Connected Audio Sensing LED Display",
            projectOverviewText: ["LED Display capable of synchronizing with low musical frequencies, providing an autonomous and interactive visual experience.",
                                "Additional networking capabilities enable the user to select pre-defined light shows through a web page, utilising a variety of colour sequences, brightness levels, and wave characteristics."],
            projectDescriptionList: ["Housing includes an embedded microphone and required circuity to sample audio using an Arduino.",
                                    "Performs an FFT on sampled audio to sync programmed choreographed light shows with the sonic characteristics of a kick-drum.", 
                                    "Integrated NodeMCU hosts a web server to allow for the selection of multiple light show patterns and colors.",
                                    "Designed and 3D printed all housings and joints."],
            assets: <LedDisplayAssets></LedDisplayAssets>
        }
        this.facialRecognition = {
            projectName: "Audio Greeting Using Remote Facial Recognition",
            projectOverviewText: ["Facial recognition system used to greet identified individuals with a personalized audio message.",
                                "System utilizes an iOS app to stream camera data to a local web server hosted on a raspberry pi. Individuals are then identified using a convolutional neural net"],
            projectDescriptionList: ["iOS application responsible for accessing and sending camera data using Alamofire",
                                    "Model created using tensorflow and keras utilising four 2D CNN layers."],
            assets: <FacialRecognitionAssets></FacialRecognitionAssets>
        }
        this.fatigueDetection = {
            projectName: "Fatigue-Detecting Neural Net Utilizing EEG Data",
            projectOverviewText: ["Fatigue detection system utilizing EEG data to infer if an individual is fit to perform a task. Testing showed results carry a confidence rating greater than 90%.",
                                "Neural net additionally achieves subject-independence by utilising brain frequency entropy."],
            projectDescriptionList: ["System utilises long short-term memory network.",
                                    "Model trained using EEG data taken from nurses before and after hospital shifts."],
            assets: <FatigueDetectionAssets></FatigueDetectionAssets>
        }
        this.audioEffects = {
            projectName: "Dynamic Real-Time Audio Effects Device",
            projectOverviewText: ["Audio effects device attempting to prototype a digital guitar pedal capable of applying user-uploaded effects in real-time.",
                                "The system consists of both an iOS app allowing for effect uploads over bluetooth, as well as a 'pedal' responsible for applying the effects."],
            projectDescriptionList: ["iOS app utilising the Core Bluetooth Framework",
                                    "Pedal consisting of an arduino responsible for sampling audio and performing the digital signal processing, bluetooth chip for communicating with the iOS app, LED display for advertising the chosen effect, and a digital-to-analog converter for outputting processed audio"],
            assets: <AudioEffectsAssets></AudioEffectsAssets>
        }
    }
    render() {
        switch(this.props.projectName) {
            case "teamSolve":
                this.currentProject = this.teamSolve;
                break;
            case "ledDisplay":
                this.currentProject = this.ledDisplay;
                break
            case "facialRecognition":
                this.currentProject = this.facialRecognition;
                break
            case "fatigueDetection":
                this.currentProject = this.fatigueDetection;
                break
            case "audioEffects":
                this.currentProject = this.audioEffects;
                break
            default:
                this.currentProject = null;
        }
        return (
            <div>
                <h2 className="ProjectTitle">{this.currentProject.projectName}</h2>
                <hr></hr>
                <ProjectOverview projectOverviewText={this.currentProject.projectOverviewText}></ProjectOverview>
                {this.currentProject.assets}
                <ProjectDescription projectDescriptionList={this.currentProject.projectDescriptionList}></ProjectDescription>
            </div>
        );
    }
  }
  
  export default ProjectComponent;