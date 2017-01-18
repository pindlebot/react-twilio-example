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
      <div><input onChange={this.changeInput.bind(this)} value={this.state.recipient} />
        <button onClick={this
          .sendSms
          .bind(this)}>Send message</button>
          {this.state.recipient}
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'));