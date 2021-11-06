import React from 'react';
import ProjectDescription from './ProjectDescription.js'
import ProjectOverview from './ProjectOverview'
import TeamSolveAssets from './ProjectAssetComponents/TeamSolveAssets.js';
import LedDisplayAssets from './ProjectAssetComponents/LedDisplayAssets.js';
import FatigueDetectionAssets from './ProjectAssetComponents/FatigueDetectionAssets.js';
import FacialRecognitionAssets from './ProjectAssetComponents/FacialRecognitionAssets.js';
import AudioEffectsAssets from './ProjectAssetComponents/AudioEffectsAssets.js';
import NHLBettingAssets from './ProjectAssetComponents/NHLBettingAssets.js';

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.teamSolve = {
            projectName: "TeamSolve iOS Application",
            projectOverviewText: ["iOS application designed to promote collaboration and improve team productivity by facilitating problem-solving through individual problem contexts.",
                "Currently, teams rely on instant messaging services such as Slack, Microsoft Teams, or Facebook Messenger for group discussions. However, these services behave poorly once team members collaborating on a problem generate multiple trains of thought. The growing number of responses become increasingly hard to follow, providing a barrier to additional contribution.",
                "TeamSolve instead allows a user to define a problem, requests peers to define solutions, and then facilitates all discussions within the context of the parent problem or solution."],
            projectDescriptionList: ["Rich user interface utilizing Swift and the iOS SDK",
                                    "Scalable back-end using NodeJS, Express, MongoDb, and Mongoose",
                                    "Hosted on an AWS EC2 compute instance and an Atlas MongoDb cluster"],
            assets: <TeamSolveAssets></TeamSolveAssets>
        }
        this.facialRecognition = {
            projectName: "IoT Facial Recognition System",
            projectOverviewText: ["Facial recognition system with support for the open-sourced Home Assistant platform.",
                "The facial recognition module first detects motion as a user enters its field of vision, captures a series of images using an integrated camera, performs facial recognition on the on the captured images, and interfaces with the Home Assistant server via MQTT. The user then has the ability to use these state updates as a trigger for home automations involving supported products."],
            projectDescriptionList: ["Accurate facial recognition model utilizing a 3-layer Convolutional Neural Network (CNN)",
                                    "Large dataset consisting of a wide range of user images with respect to angles, lighting, clothing, etc.",
                                    "Raspberry Pi 4 running facial recognition firmware and interfacing with peripherals"],
            assets: <FacialRecognitionAssets></FacialRecognitionAssets>
        }
        this.NHLBetting = {
            projectName: "Machine Learning NHL Game Prediction System",
            projectOverviewText: ["Machine learning system with the ability to predict NHL game victors.",
                                "The system analyses both common and advanced statistics associated with each teams' previous sequence of games using a Long Short-Term Memory (LSTM) Recurrent Neural Network (RNN).", "The model was validated by simulating $100 bets on the predicted victor of each game over the entire 2021 NHL season. Using historical moneyline bet values, the model generated a profit of ~$5000."],
            projectDescriptionList: ["LSTM RNN trained on the 2015-2020 NHL seasons",
                                    "Program to identify the optimal combination of NHL statistics to be included within the dataset",
                                    "Program to identify the optimal LSTM RNN architecture"],
            assets: <NHLBettingAssets></NHLBettingAssets>
        }
        this.ledDisplay = {
            projectName: "Network-Connected Audio Sensing LED Display",
            projectOverviewText: ["LED Display capable of synchronizing with low musical frequencies, providing an autonomous and interactive visual experience.",
                                "Additional networking capabilities enable the user to select pre-defined light shows through a web application consisting of a variety of color sequences, brightness levels, and wave characteristics."],
            projectDescriptionList: ["Audio sampled through the use of an embedded microphone, required circuity and an Arduino",
                                    "FFT performed on sampled audio to sync programmed choreographed light shows with the sonic characteristics of a kick-drum", 
                                    "Web server hosted on an integrated NodeMCU to allow for the selection of multiple light show patterns and colors",
                                    "Custom 3D printed housings and joints"],
            assets: <LedDisplayAssets></LedDisplayAssets>
        }
        this.fatigueDetection = {
            projectName: "Fatigue-Detecting Neural Net Utilizing EEG Data",
            projectOverviewText: ["Fatigue detection system utilizing EEG data to infer if an individual is fit to perform a task.",
                                "The system utilized a Long Short-Term Memory (LSTM) Recurrent Neural Network (RNN) to analyze a subject's brain frequency entropy. Testing results showed the system was able to correctly classify a nurse as either pre or post-shift with greater than 90% accuracy."],
            projectDescriptionList: ["LSTM network trained using EEG data taken from nurses before and after hospital shifts"],
            assets: <FatigueDetectionAssets></FatigueDetectionAssets>
        }
        this.audioEffects = {
            projectName: "Dynamic Real-Time Audio Effects Device",
            projectOverviewText: ["Audio effects device attempting to prototype a digital guitar pedal capable of applying user-uploaded effects in real-time.",
                                "The system consists of both an iOS app allowing for effect uploads over Bluetooth, as well as a 'pedal' responsible for applying uploaded effects."],
            projectDescriptionList: ["iOS app utilizing the Core Bluetooth Framework",
                                    "Arduino responsible for sampling audio and performing the digital signal processing, Bluetooth module for interfacing with the iOS app, LED display for advertising the chosen effect, and a digital-to-analog converter for outputting processed audio"],
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
            case "NHLBetting":
                this.currentProject = this.NHLBetting;
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