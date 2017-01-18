import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: ''
    };
  }
  changeInput(event) {
    this.setState({recipient: event.target.value});
  }

  sendSms() {
    fetch('/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({"recipient": this.state.recipient})
    });
  }
  render() {
    return (
      <div>
        <p>Enter phone number to send SMS to: </p>
      <input onChange={this.changeInput.bind(this)} value={this.state.recipient} placeholder="+12223334444"/>
        <button onClick={this
          .sendSms
          .bind(this)}>Send message</button>
          <p>Don't forget your country code, e.g., +1.</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'));