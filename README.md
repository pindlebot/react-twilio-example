# react-twilio-example
Barebones example to demonstrate how you can use twilio to send SMS in ReactJS. 

## Quick Start

Clone the repository: 
```
git clone https://github.com/focuswish/react-twilio-example
```

Install dependencies: 

```
cd react-twilio-example
npm install
```

Add your Twilio API keys:
```
touch twiliokeys.js
```

And add:

```
module.exports = {
  sid: 'TWILIO_ACCOUNT_SID',
  token: 'TWILIO_ACCOUNT_AUTH_TOKEN'
}
```

Alternatively, you can edit ```server.babel.js``` and add your keys directly. Make sure not to publish them on Github!


Build and start the server:

```
webpack && node server.js
```

Once the server is started, prove to yourself that it works by entering your phone number in the input box. You should receive an SMS.



