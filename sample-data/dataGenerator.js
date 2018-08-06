// Notes
// Description: Generates fake data for all 3 tables

const faker = require('faker');
const db = require('./dataGenHelpers');

// Iterate for 100 iterations (make 100 listings)
const numListings = 100;
let idx = 0;

// Keep track of time
const startTime = Date.now();

for (let i = 1; i < (numListings + 1); i += 1) {
  const listing = {
    id: i,
    avgRating: faker.random.number(5),
    reviewCount: faker.random.number(100),
    maxAdults: faker.random.number(8),
    maxChildren: faker.random.number(8),
    maxInfants: faker.random.number(5),
    cleaningFee: faker.random.number({
      min: 0,
      max: 1,
      precision: 0.01,
    }),
    serviceFeePerc: faker.random.number({
      min: 0,
      max: 1,
      precision: 0.01,
    }),
    occTaxRatePerc: faker.random.number({
      min: 0,
      max: 1,
      precision: 0.01,
    }),
    additionalGuestFee: faker.random.number(100)
  };
  db.insertListing(listing, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log('Result is: ', result);
    }
  });

  // assume up to 100 reservations per listing
  const numReservationsPerListing = faker.random.number(100);
  const today = new Date();
  let startDate;
  let endDate;
  const formatDate = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  for (let j = 0; j < numReservationsPerListing; j += 1) {
    startDate = formatDate(today);
    today.setDate(today.getDate() + 1);
    endDate = formatDate(today);

    const reservation = {
      listingId: i,
      startDate,
      endDate,
    };

    db.insertReservation(reservation, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log('Result is: ', result);
      }
    });
    const listingDailyPrice = {
      id: idx,
      listingId: i,
      costPerNight: faker.random.number({
        min: 0,
        max: 500,
        precision: 0.01,
      }),
      startDate,

    };

    db.insertDailyPrices(listingDailyPrice, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // let timePassed = Date.now() - startTime;
        // console.log('Time passed (ms): ', timePassed);
        // console.log('Result is: ', result);
      }
    });
    idx += 1;
  }
}
