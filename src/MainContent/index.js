import React, { Component } from 'react';
import { performCommandAction, resetError, resetReport, invalidCommandError } from './../actions'
import { validateInput } from '../utils/validation';
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
    if (this.props.hasError) {
      this.props.resetError();
    }
    if(this.props.displayReport) {
      this.props.resetReport();
    }
    const input = event.target.value.toUpperCase();
    this.setState({
      input: input,
    });
  }

  onSubmit = () => {
    const input = this.state.input.trim();
    if(validateInput(input)) {
      if(checkIfPlaceCommand(input)) {
        const formattedPlaceInput = formatPlaceInput(input);
        const type = formattedPlaceInput.type
        const placement = formattedPlaceInput.placement
        this.props.placeRobot(type, placement);
      }
      else {
        this.props.commandRobot(input);
      }
    }
    else {
      this.props.invalidCommand();
    }
    if(!this.props.hasError) {
      this.clearTextField();
    }
  }

  clearTextField = () => {
    document.getElementById('robot-commands').value = '';
  }

  render() {

      return(
        <Container>
          <Row>
            <InfoSection />
          </Row>
          <Row>
            <InputGroup>
              <Form.Control
              id="robot-commands"
              isInvalid={this.props.hasError}
              placeholder="Enter a command"
              value={this.state.value}
              onChange={this.onUpdateTextField}
              />
              <Button onClick={this.onSubmit}>Submit</Button>
            </InputGroup>
          { this.props.hasError ? <ErrorMessage /> : <div/> }
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
    hasError: state.get('hasError'),
    displayReport: state.get('displayReport'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    placeRobot: (type, placement) => dispatch(performCommandAction(type, placement)),
    commandRobot: (type) => dispatch(performCommandAction(type)),
    resetError: () => dispatch(resetError()),
    resetReport: () => dispatch(resetReport()),
    invalidCommand: () => dispatch(invalidCommandError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
