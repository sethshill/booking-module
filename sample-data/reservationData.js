// Notes
// Description: Generates fake data for all 3 tables
// From Nick: node seed reservation data, iterates for X records, stores in db
let faker = require('faker');
let date = new Date();

// Iterate for 100 iterations (make 100 listings)
let numListings = 1;
let listings = [];
let reservations = [];
let listing_daily_prices = [];

let idx = 0;
for (let i = 1; i < (numListings + 1); i++) {
  let listing = {
    "id": i,
    "avg_rating": faker.random.number(5),
    "review_count": faker.random.number(100),
    "max_adults": faker.random.number(8),
    "max_children": faker.random.number(8),
    "max_infants": faker.random.number(5),
    "cleaning_fee": faker.random.number({
      'min': 0,
      'max': 1,
      'precision': 0.01
    }),
    "service_fee_perc": faker.random.number({
      'min': 0,
      'max': 1,
      'precision': 0.01
    }),
    "occ_tax_rate_perc": faker.random.number({
      'min': 0,
      'max': 1,
      'precision': 0.01
    }),
    "additional_guest_fee": faker.random.number(100)
  };
  listings.push(listing);

  let numReservationsPerListing = faker.random.number(100); // assume up to 100 reservations per listing
  let formatDate = (date) => {
    return '' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  };
  let startDate, endDate;
  for (let j = 0; j < numReservationsPerListing; j++) {
    date.setDate(date.getDate() + 1);
    startDate = formatDate(date);
    date.setDate(date.getDate() + 1);
    endDate = formatDate(date);

    const reservation = {
      "id": idx,
      "listingId": i,
      "start_date": startDate,
      "end_date": endDate
    };
    reservations.push(reservation);

    const listingDailyPrice = {
      "id": idx,
      "listing_id": i,
      "cost_per_night": faker.random.number({
        'min': 0,
        'max': 500,
        'precision': 0.01
      }),
      "start_date": startDate
    };
    listing_daily_prices.push(listingDailyPrice);
    idx++;
  }
}
console.log('Reservations: ', reservations);
console.log('listing_daily_prices: ', listing_daily_prices)
// let date = new Date();
// date.setDate(date.getDate() + 1);
// let formattedDate = (date) => {
//   return '' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
// };
// console.log(formattedDate(date));
