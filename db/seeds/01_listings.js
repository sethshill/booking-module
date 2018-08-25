const faker = require('faker');
// Set Constants
// const numListings = 100000;
const numListings = 1000;
// const factor = 50;
const today = new Date();

// Define functions
const formatDate = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

// while iterations < factor
//  make a promise for X # of iterations
//  add promise to promiseAll
// when all promises completed
// complete seeding

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('listings').del(),
    knex('reservations').del(),
    knex('listing_daily_prices').del()
    .then(() => {
      console.log('a log to check how often this completes');
      let listings = [];
      for (let i = 0; i < numListings; i += 1) {
        const listing = {
          avg_rating: faker.random.number(5),
          review_count: faker.random.number(100),
          max_adults: faker.random.number(8),
          max_children: faker.random.number(8),
          max_infants: faker.random.number(5),
          cleaning_fee: faker.random.number({
            min: 0.1,
            max: 1,
            precision: 0.01,
          }),
          service_fee_perc: faker.random.number({
            min: 0.1,
            max: 0.3,
            precision: 0.01,
          }),
          occ_tax_rate_perc: faker.random.number({
            min: 0.1,
            max: 0.3,
            precision: 0.01,
          }),
          additional_guest_fee: faker.random.number({
            min: 0.1,
            max: 0.3,
            precision: 0.01,
          }),
        };
        listings.push(listing);
      }
      return knex('listings').insert(listings);
    }
  )
  .then(() => {
    let reservations = [];
    for (let i = 1; i < numListings + 1; i += 1) {
      // assume up to 10 reservations per listing
      const numReservationsPerListing = faker.random.number(10);
      // const numReservationsPerListing = 0;
      for (let j = 0; j < numReservationsPerListing; j += 1) {
        let start_date = formatDate(today);
        today.setDate(today.getDate() + 1);
        let end_date = formatDate(today);

        const reservation = {
          listing_id: i,
          start_date,
          end_date,
        };
        reservations.push(reservation);
      }
    };
    return knex('reservations').insert(reservations);
  })
  .then(() => {
    const daysOut = 90;
    let listingDailyPrices = [];
    for (let i = 1; i < numListings + 1; i += 1) {
      let today = new Date();
      for (let j = 0; j < daysOut; j += 1) {
        let listingDailyPrice = {
          listing_id: i,
          cost_per_night: faker.random.number({
            min: 0,
            max: 500,
            precision: 0.01,
          }),
          start_date: formatDate(today),
        };
        today.setDate(today.getDate() + 1);
        listingDailyPrices.push(listingDailyPrice);
      }
    }
    return knex('listing_daily_prices').insert(listingDailyPrices);
  })
)};
