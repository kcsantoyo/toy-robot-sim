import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ReportSection = styled.div`
  margin-top: 2em;
`

function Report({ displayReport, x_pos, y_pos, direction }) {
  return (
    <ReportSection>
      { displayReport ? <Alert variant="info">Currently at X: {x_pos}, Y: {y_pos}, Facing: {direction}</Alert> : <div/> }
    </ReportSection>
  )
}

const mapStateToProps = (state) => {
  return {
    displayReport: state.page.get("displayReport"),
    x_pos: state.robot.get("x_pos"),
    y_pos: state.robot.get("y_pos"),
    direction: state.robot.get("direction"),
  }
}

export default connect(mapStateToProps)(Report);
