import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

function Report({ displayReport, x_pos, y_pos, direction }) {
  return (
    <div>
      { displayReport ? <Alert variant="info">Currently at X:{x_pos}, Y:{y_pos}, Facing: {direction}</Alert> : <div/> }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    displayReport: state.get("displayReport"),
    x_pos: state.get("x_pos"),
    y_pos: state.get("y_pos"),
    direction: state.get("direction"),
  }
}

export default connect(mapStateToProps)(Report);
