// Name: Data Generator
/* Description: Generates fake data entries for all 3 tables of the booking module and inserts them into a database.
*/

// import { insertListing } from './dataGenHelpers';
const helpers = require('./dataGenHelpers');

const listingParams = {
  avgRating: 4,
  reviewCount: 2,
  maxAdults: 3,
  maxChildren: 2,
  maxInfants: 4,
  cleaningFee: 100,
  serviceFeePerc: 8.7,
  occTaxRatePerc: 3.5,
  additionalGuestFee: 50,
};

helpers.insertListing(listingParams, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Result is: ', result);
  }
});

helpers.insertReservation(reservationParams,
  helpers.insertListing(listingParams, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Result is: ', result);
    }
  });
