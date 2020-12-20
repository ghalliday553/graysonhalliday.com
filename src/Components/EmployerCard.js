import React from 'react';
import {Card} from 'react-bootstrap';

class EmployerCard extends React.Component {
    render() {
        return (
            <Card>
            <Card.Img variant="top" src={this.props.employerImagePath} />
            {this.props.positionText.map((text, ind) =>
                <Card.Header key={ind}>{text}</Card.Header>
            )} 
            <Card.Body>
            <Card.Title>{this.props.empoyerName}</Card.Title>
            <Card.Text>
                <ul>
                {this.props.employerText.map((text, ind) =>
                    <li key={ind}>{text}</li>
                )}
                </ul>
            </Card.Text>
            </Card.Body>
            </Card>
        );
    }
}

export default EmployerCard;
