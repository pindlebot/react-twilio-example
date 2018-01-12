# react-twilio-example
Barebones example to demonstrate how you can use twilio to send SMS with React. 

Tutorial [here](http://www.automationfuel.com/reactjs-twilio-example-tutorial/).

## Quick Start

Clone the repository: 
```
git clone https://github.com/focuswish/react-twilio-example
```

Install dependencies: 
```
cd react-twilio-example
yarn
```

Add your Twilio SID and TOKEN to .env
```
TWILIO_SID=
TWILIO_TOKEN=
SENDER=
# Sender is a phone number that twilio leases to you
```

Build and start the server:
```
yarn run start
```
Finally, go to http://localhost:1234/.

Once the server is started, prove to yourself that it works by entering your phone number in the input box. You should receive an SMS!



