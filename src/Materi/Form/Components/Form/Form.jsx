import React from 'react';
import FormGroup from '../FormGroup/FormGroup';
import DisplayError from '../DisplayError/DisplayError';
import './index.css';

export default class Form extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    errors: [],
  };

  validationEmail = (email) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let message = [];
    const { username, email, password } = this.state;

    if (username.length === 0) {
      message = [...message, 'Username tidak boleh kosong'];
    }
    if (email.length === 0) {
      message = [...message, 'Email tidak boleh kosong'];
    } else if (!this.validationEmail(email)) {
      message = [...message, 'Email tidak valid'];
    }

    if (password.length === 0) {
      message = [...message, 'Password tidak boleh kosong'];
    }

    if (message.length > 0) {
      this.setState({ errors: message });
    } else {
      alert(`
        Username: ${username}
        Email: ${email}`);
      this.setState({ errors: [] });
    }
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <legend>Registration Form</legend>
        {this.state.errors.length !== 0 && (
          <DisplayError errors={this.state.errors} />
        )}
        <fieldset>
          <FormGroup
            type={'text'}
            name={'username'}
            placeholder={'Username'}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <FormGroup
            type={'email'}
            name={'email'}
            placeholder={'Email'}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <FormGroup
            type={'password'}
            name={'password'}
            placeholder={'Password'}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}
