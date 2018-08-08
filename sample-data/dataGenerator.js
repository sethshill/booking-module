// Notes
// Description: Generates fake data for all 3 tables

const faker = require('faker');
const db = require('./dataGenHelpers');

// Set Constants
const numListings = 10000;
const today = new Date();

// Define functions
const formatDate = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const makeReservation = (foreignId, todaysDate) => {
  // assume up to 100 reservations per listing
  const numReservationsPerListing = faker.random.number(100);

  for (let j = 0; j < numReservationsPerListing; j += 1) {
    let startDate = formatDate(todaysDate);
    todaysDate.setDate(todaysDate.getDate() + 1);
    let endDate = formatDate(todaysDate);

    const reservation = {
      listingId: foreignId,
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
  }
};

const makeDailyPrices = (foreignKey, currentDay) => {
  for (let i = 0; i < 180; i++) {
    const listingDailyPrice = {
      listingId: foreignKey,
      costPerNight: faker.random.number({
        min: 0,
        max: 500,
        precision: 0.01,
      }),
      startDate: formatDate(currentDay),
    };
    db.insertDailyPrices(listingDailyPrice, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // placeholder
      }
    });
    currentDay.setDate(currentDay.getDate() + 1);
  }
};

// Create entries
for (let i = 0; i < numListings; i += 1) {
  const listing = {
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
    additionalGuestFee: faker.random.number(100),
  };
  db.insertListing(listing, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      makeReservation(result.insertId, today);
      makeDailyPrices(result.insertId, today);
    }
  });
}
