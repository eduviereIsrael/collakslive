import React from 'react';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  validateEmail(email) {
    // regex to check if email is in the correct format
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;

    if (!this.validateEmail(email)) {
      // show an error message if email is not valid
      alert('Please enter a valid email address.');
    } else {
      // submit the form if email is valid
      alert('Form submitted successfully.');
    }
  }

  render() {
    const { email } = this.state;
    return (
        <div style={{display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center'}}>
            <form onSubmit={this.handleSubmit}>
                <label>
                Email:
                <input type="email" value={email} onChange={this.handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
      
    );
  }
}

export default EmailForm;
