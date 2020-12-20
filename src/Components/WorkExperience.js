import React from 'react';
import {CardDeck} from 'react-bootstrap';
import EmployerCard from './EmployerCard.js'

class WorkExperience extends React.Component {
    constructor(props) {
      super(props);
      this.sierraText = ["Developed, tested, and troubleshooted firmware written in C for an LTE modem using a Linux environment",
        "Refactored the modem’s networking stack solution with support for TCP, UDP, FTP, HTTP, HTTPS, TLS, and DTLS protocols",
        "Utilized RTOS technologies",
        "Analyzed and provided solutions for customer network and modem issues, utilizing a knowledge of LTE architecture"];
      this.sierraPositionText = ["Junior Firmware Engineer / September 2020 – Present",
        "Firmware Developer Co-op / Jan 2020 – September 2020"]
  
      this.nokiaDevText = ["Designed and implemented rich web client interfaces using ReactJS",
        "Developed server-side code using Spring Boot, Hibernate, MariaDB and Elastic Search",
        "Performed vigorous functional testing in addition to creating comprehensive unit tests using Mockito",
        "Implemented version control using GitLab",
        "Managed tasks in an Agile environment using Jira"];
      this.nokiaDevPositionText = ["Nuage SDWAN Portal Developer Co-op / Jan 2019 – April 2019"]
  
      this.nokiaQaText = ["Created and fulfilled comprehensive and exhaustive test plans while working on a software-defined network product",
        "Worked with multiple L2, L3, and software-defined networking technologies",
        "Worked with an infrastructure as a service platform and other cloud computing technologies",
        "Deployed and initialized the product within test servers using Ansible scripts",
        "Created bash scripts to automate network performance reporting",
        "Contributed to the design of product behavior"];
      this.nokiaQaPositionText = ["Network Management Engineering Test and Deployment Co-op / May 2018 – August 2018"]
  
      this.acdText = ["Lead QA for the iOS ACDSee Mobile Sync application",
        "Created and fulfilled comprehensive and exhaustive test plans for various projects",
        "Created Python scripts to optimize testing efficiency",
        "Contributed to the design of product behavior and functionality",
        "Tested an array of network configurations in order to guarantee seamless wireless file transfer for applicable products",
        "Understood underlying application architecture in order to effectively integrate new features"]
      this.acdPositionText = ["Quality Assurance Analyst Co-op / January 2017 – August 2017"]
    }
    render() {
      return (
        <div class="WorkExperience">
          <CardDeck>
            <EmployerCard employerImagePath="./sierra_wireless_logo.png"
              empoyerName="Sierra Wireless"
              employerText={this.sierraText}
              positionText={this.sierraPositionText}>
            </EmployerCard>
            <EmployerCard employerImagePath="./nokia_logo.png" 
              empoyerName="Nokia" 
              employerText={this.nokiaDevText}
              positionText={this.nokiaDevPositionText}>
            </EmployerCard>
          </CardDeck>
          <CardDeck style={{marginTop: "20px"}}>
            <EmployerCard employerImagePath="./nokia_logo.png" 
              empoyerName="Nokia" 
              employerText={this.nokiaQaText}
              positionText={this.nokiaQaPositionText}>
            </EmployerCard>
            <EmployerCard employerImagePath="./acd_systems_logo.png"
              empoyerName="ACD Systems" 
              employerText={this.acdText}
              positionText={this.acdPositionText}>
            </EmployerCard>
          </CardDeck>
        </div>
      );
    }
  }

  export default WorkExperience;