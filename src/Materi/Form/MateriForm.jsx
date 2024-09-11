import React from 'react';
import Hero from './Components/Hero/Hero';
import Form from './Components/Form/Form';
import './MateriForm.css';

export default class MateriForm extends React.Component {
  render() {
    return (
      <div className="container">
        <Hero text="Tugas Router" />
        <Form />
      </div>
    );
  }
}
