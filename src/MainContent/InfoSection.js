import React from 'react';
import { Card } from 'react-bootstrap';

export default function InfoSection() {
  return(
      <Card.Body>
        <Card.Title> Welcome to Kim's robot simulator</Card.Title>
        <Card.Text>
          These are the following commands you can send to the robot.
        </Card.Text>
        <Card.Text>
          X and Y can only placed from 0-4 and F must be NORTH, SOUTH, EAST OR WEST.
        </Card.Text>
        <ul>
          <li>PLACE X,Y,F - Places the robot at the given co-ordinates</li>
          <li>MOVE - Moves the robot 1 space forward</li>
          <li>LEFT - Turns the robot 90 degrees to the left</li>
          <li>RIGHT - Turns the robot 90 degrees to the right</li>
          <li>REPORT - Displays the robot's current location</li>
        </ul>
      </Card.Body>
  );
}
