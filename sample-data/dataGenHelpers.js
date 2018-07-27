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

const insertListing = (avgRating, callback) => {
  // let sql = "INSERT INTO listings (avg_rating,) VALUES(?,?,?,?,?,?,?,?,?)";
  const sql = 'INSERT INTO listings (avg_rating) VALUES(?)';
  const params = [avgRating];
  con.query(sql, params, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  insertListing: insertListing
};
