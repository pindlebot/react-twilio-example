import express from 'express';
import path from 'path';
import keys from './twilioKeys';
import bodyParser from 'body-parser';

const app = express();

app.use('/', express.static('public'));

app.post('/sendsms', bodyParser.json(), (req, res) => {
  var client = require('twilio')(keys.sid, keys.token);
  client.sendMessage({
    to: req.body.recipient,
    from: '+12223334444',
    body: 'word to your mother.'
  }, function (err, responseData) {
    if (!err) {
      res.json({"From": responseData.from, "Body": responseData.body});
    }
  });
});

app.listen(process.env.PORT || 3000);