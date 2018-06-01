const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/booking/core/listingId/:listingId', (req, res) => {
  res.send(req.params);
});

app.get('/booking/availability/listingId/:listingId', (req, res) => {
  res.send(req.params);
});

app.listen(3001, () => console.log('listening on port 3001!'));
