// Name: Data Generator
// Description: Generates fake data entries for all 3 tables of the booking module and inserts them into a database.

// import { insertListing } from './dataGenHelpers';
const helpers = require('./dataGenHelpers');

helpers.insertListing(4, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Result is: ", result);
  }
});
