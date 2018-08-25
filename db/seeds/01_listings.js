const faker = require('faker');
const path = require('path');
// Set Constants
const numListings = 100000;
const subset = 1000;
let today = new Date();

// Define functions
const formatDate = date => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  const createDbSubset = () => {
    const listings = [];
    for (let i = 0; i < subset; i += 1) {
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
  return knex('listings').insert(listings)
      .then(() => {
        const reservations = [];
        for (let i = 1; i < subset + 1; i += 1) {
          // assume up to 10 reservations per listing
          const numReservationsPerListing = faker.random.number(10);
          // const numReservationsPerListing = 0;
          for (let j = 0; j < numReservationsPerListing; j += 1) {
            const startDate = formatDate(today);
            today.setDate(today.getDate() + 1);
            const endDate = formatDate(today);

            const reservation = {
              listing_id: i,
              start_date: startDate,
              end_date: endDate,
            };
            reservations.push(reservation);
          }
        }
        return knex('reservations').insert(reservations);
      })
      .then(() => {
        const daysOut = 90;
        const listingDailyPrices = [];
        for (let i = 1; i < subset + 1; i += 1) {
          today = new Date();
          for (let j = 0; j < daysOut; j += 1) {
            const listingDailyPrice = {
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
      });
    };
  const factor = Math.ceil(numListings/subset);
  await knex('listings').del()
  await knex('reservations').del()
  await knex('listing_daily_prices').del();
  for (let i = 0; i < factor; i += 1) {
    await createDbSubset();
    console.log( `${i/factor*100}%`)
  }
};
