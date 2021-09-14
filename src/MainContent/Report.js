import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

export default function Report() {
  const displayReport = useSelector(state => state.get("displayReport"))
  const x_pos = useSelector(state => state.get("x_pos"));
  const y_pos = useSelector(state => state.get("y_pos"));
  const direction = useSelector(state => state.get("direction"))
  return (
    <div>
      { displayReport ? <Alert variant="info">Currently at X:{x_pos}, Y:{y_pos}, Facing: {direction}</Alert> : <div/> }
    </div>
  )
}
