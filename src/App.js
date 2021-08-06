import React from 'react';
import { Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {BrowserView, MobileView} from 'react-device-detect';
import WorkExperience from './Components/WorkExperience.js'
import ProjectComponent from './Components/ProjectComponent.js'
import HomeComponent from './Components/HomeComponent.js'
import ContactComponent from './Components/ContactComponent.js'
import EducationComponent from './Components/EducationComponent.js';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Grayson Halliday';
  }
  render() {
    return (
      <div>
        <BrowserView>
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand as={Link} to="/">Grayson Halliday</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/education">Education</Nav.Link>
                  <Nav.Link as={Link} to="/work-experience">Work Experience</Nav.Link>
                  <NavDropdown title="Personal Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/team-solve">TeamSolve iOS Application</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/facial-recognition">IoT Facial Recognition System</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/nhl-betting">Machine Learning NHL Game Prediction System</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/led-display">Network-Connected Audio-Sensing LED Display</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/fatigue-detection">Fatigue Detecting Neural Net</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/audio-effects">Bluetooth-Connected Real-Time Audio Effects Device</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route exact path="/">
                <HomeComponent></HomeComponent>
              </Route>
              <Route path="/education">
                <EducationComponent></EducationComponent>
              </Route>
              <Route path="/work-experience">
                <WorkExperience></WorkExperience>
              </Route>
              <Route path="/team-solve">
                <ProjectComponent projectName="teamSolve"></ProjectComponent>
              </Route>
              <Route path="/led-display">
                <ProjectComponent projectName="ledDisplay"></ProjectComponent>
              </Route>
              <Route path="/facial-recognition">
                <ProjectComponent projectName="facialRecognition"></ProjectComponent>
              </Route>
              <Route path="/nhl-betting">
                <ProjectComponent projectName="NHLBetting"></ProjectComponent>
              </Route>
              <Route path="/fatigue-detection">
                <ProjectComponent projectName="fatigueDetection"></ProjectComponent>
              </Route>
              <Route path="/audio-effects">
                <ProjectComponent projectName="audioEffects"></ProjectComponent>
              </Route>
              <Route path="/contact">
                <ContactComponent></ContactComponent>
              </Route>
            </Switch>
          </Router>
        </BrowserView>
        <MobileView>
          <div className="Mobile">
            <p> Sorry, this website is not yet supported on mobile</p>
          </div>
        </MobileView>
      </div>
    );
  }
}

export default App;
