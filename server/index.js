const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/booking/core/listingId/:listingId', (req, res) => {
  db.getCoreData(req.params.listingId, () => {
    res.send();
  });
});

app.get('/booking/availability/listingId/:listingId', (req, res) => {
  db.getReservationData(req.params.listingId, () => {
    res.send();
  });
});

app.listen(3001, () => console.log('listening on port 3001!'));
