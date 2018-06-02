const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);
connection.connect();

module.exports.getCoreData = function getBaseDataForListing(listingId, callback) {
  const query = `SELECT l.*, ROUND(AVG(p.cost_per_night), 0) as avg_cost_per_night
    FROM listings l
    JOIN listing_daily_prices p ON l.id = p.listing_id
    WHERE l.id = ${listingId}
    GROUP BY 1,2,3,4,5,6,7`;

  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getReservationData = function getReservationDataForDateRange(listingId, callback) {
  const query = `SELECT id, start_date, end_date FROM reservations WHERE listing_id = ${listingId}`;

  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getPricingData = function getPricingDataForDateRange(listingId, callback) {
  const query = `SELECT id, start_date, cost_per_night FROM listing_daily_prices WHERE listing_id = ${listingId}`;

  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
