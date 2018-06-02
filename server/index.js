const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/booking/core/listingId/:listingId', (req, res) => {
  db.getCoreData(req.params.listingId, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/booking/availability/listingId/:listingId', (req, res) => {
  db.getReservationData(req.params.listingId, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/booking/pricing/listingId/:listingId', (req, res) => {
  db.getPricingData(req.params.listingId, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.listen(3001, () => console.log('listening on port 3001!'));
