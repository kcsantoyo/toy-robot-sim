import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

export default function ErrorMessage() {
  const errorMsg = useSelector(state => state.get('errorMsg'));
  return (
    <div>
      <Form.Text className='text-danger'>{ errorMsg }</Form.Text>
    </div>);
}
