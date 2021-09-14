import React from 'react';
import { Card } from 'react-bootstrap';

export default function InfoSection() {
  return(
      <Card.Body>
        <Card.Title> Welcome to Kim's robot simulator</Card.Title>
        <Card.Text>
          These are the following commands you can send to the robot. The PLACE command must also be in a proper format.
          <ul>
            <li>PLACE X,Y,F</li>
            <li>MOVE</li>
            <li>LEFT</li>
            <li>RIGHT</li>
            <li>REPORT</li>
          </ul>
        </Card.Text>
      </Card.Body>
  );
}
