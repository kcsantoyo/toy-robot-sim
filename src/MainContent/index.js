import React, { Component } from 'react';
import {
  sendCommand,
  mustPlaceError,
  resetError,
  resetReport,
  cannotMoveFurtherError,
  invalidCommandError,
  invalidPlacementError,
  invalidPlaceFormatError,
} from './../actions'
import {
  validateInput,
  validateMove,
  validatePlacement,
  validatePlaceFormat,
} from '../utils/validation';
import { checkIfPlaceCommand, formatPlaceInput } from '../utils/utilities';
import {
  Container,
  Button,
  InputGroup,
  Form,
  Row,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import ErrorMessage from './ErrorMessage';
import InfoSection from './InfoSection';
import Report from './Report';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  onUpdateTextField = (event) => {
    if (this.props.page.get('hasError')) {
      this.props.resetError();
    }
    if(this.props.page.get('displayReport')) {
      this.props.resetReport();
    }
    const input = event.target.value.toUpperCase();
    this.setState({
      input: input,
    });
  }

  onSubmit = () => {
    const input = this.state.input.trim();
    const x_pos = this.props.robot.get('x_pos');
    const y_pos = this.props.robot.get('y_pos');
    const direction = this.props.robot.get('direction');

    if(validateInput(input)) {
      if(checkIfPlaceCommand(input)) {
        if(validatePlaceFormat(input)) {
          const formattedPlaceInput = formatPlaceInput(input);
          const type = formattedPlaceInput.type
          const placement = formattedPlaceInput.placement
          if(validatePlacement(placement)) {
            this.props.placeRobot(type, placement);
          }
          else {
            this.props.invalidPlacementError(placement);
          }
        }
        else {
          this.props.invalidPlaceFormatError()
        }
      }
      else {
        if (this.props.robot.get('placed')) {
          if(input === 'MOVE') {
            if(validateMove(x_pos, y_pos, direction)) {
              this.props.sendCommand(input);
            }
            else {
              this.props.cannotMoveFurther(direction);
            }
          }
          if(input === 'REPORT' || input === 'LEFT' ||
             input === 'RIGHT') {
               this.props.sendCommand(input);
             }
        }
        else {
          this.props.mustPlaceError();
        }
      }
    }
    else {
      this.props.invalidCommandError(input);
    }
    this.setState({ input: ''});
  }

  render() {
      return (
        <Container>
          <Row>
            <InfoSection />
          </Row>
          <Row>
            <InputGroup>
              <Form.Control
              id="command-input"
              isInvalid={this.props.page.get('hasError')}
              placeholder="Enter a command"
              value={this.state.input}
              onChange={this.onUpdateTextField}
              />
              <Button id="submit-button" onClick={this.onSubmit}>Submit</Button>
            </InputGroup>
          { this.props.page.get('hasError') ? <ErrorMessage /> : <div/> }
          </Row>
          <Row>
            <Report />
          </Row>
        </Container>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    robot: state.robot,
    page: state.page,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placeRobot: (type, placement) => dispatch(sendCommand(type, placement)),
    sendCommand: (type) => dispatch(sendCommand(type)),
    cannotMoveFurther: (direction) => dispatch(cannotMoveFurtherError(direction)),
    placedError: () => dispatch(mustPlaceError()),
    resetError: () => dispatch(resetError()),
    resetReport: () => dispatch(resetReport()),
    invalidCommandError: (input) => dispatch(invalidCommandError(input)),
    invalidPlacementError: (placement) => dispatch(invalidPlacementError(placement)),
    invalidPlaceFormatError: () => dispatch(invalidPlaceFormatError()),
    mustPlaceError: () => dispatch(mustPlaceError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
