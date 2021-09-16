import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

function ErrorMessage({ errorMsg }) {
  return (
    <div>
      <Form.Text className='text-danger'>{ errorMsg }</Form.Text>
    </div>);
}

const mapStateToProps = (state) => {
  return {
    errorMsg: state.page.get('errorMsg'),
  }
};

export default connect(mapStateToProps)(ErrorMessage);
