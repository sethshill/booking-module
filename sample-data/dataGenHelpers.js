// Description: Contains all SQL query statements in the form of functions to insert data entries into database

// es5 style imports
const mysql = require('mysql');
const config = require('../database/config');

// es6 style imports
// import mysql from 'mysql';
// import config from '../database/config.js';

const con = mysql.createConnection(config);
con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const insertListing = (values, callback) => {
  const sql = 'INSERT INTO listings (avg_rating, review_count, max_adults, max_children, max_infants, cleaning_fee, service_fee_perc, occ_tax_rate_perc, additional_guest_fee) VALUES(?,?,?,?,?,?,?,?,?)';
  const params = [values.avgRating, values.reviewCount, values.maxAdults, values.maxChildren, values.maxInfants, values.cleaningFee, values.serviceFeePerc, values.occTaxRatePerc, values.additionalGuestFee];
  con.query(sql, params, (err, result) => {
    if (err) callback(err, null);
    else callback(null, result);
  });
};

const insertReservation = (values, callback) => {
  const sql = 'INSERT INTO reservations (listing_id, start_date, end_date) VALUES (?,?,?)';
  const params = [values.listingId, values.startDate, values.endDate];
  con.query(sql, params, (err, result) => {
    if (err) callback(err, null);
    else callback(null, result);
  });
};

const insertDailyPrices = (values, callback) => {
  const sql = 'INSERT INTO listing_daily_prices (listing_id, cost_per_night, start_date) VALUES (?,?,?)';
  const params = [values.listingId, values.costPerNight, values.startDate];
  con.query(sql, params, (err, result) => {
    if (err) callback(err, null);
    else callback(null, result);
  });
};

module.exports = {
  insertListing,
  insertReservation,
  insertDailyPrices,
};
