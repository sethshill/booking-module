// helpers
const getRandomInt = function getRandomIntegerBetweenValues(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

const getRandomDecimal = function getRandomDecimalBetweenValues(min, max, decimalPlace) {
  const rand = (Math.random() * (max - min)) + min;
  const power = 10 ** decimalPlace;
  return Math.floor(rand * power) / power;
};


// listings
const listings = [];
for (let i = 0; i < 100; i += 1) {
  const row = [];

  row.push(i + 1); // index
  row.push(getRandomInt(45, 550)); // average_cost_per_night
  row.push('');// averate_rating -- calculate from daily prices
  row.push(getRandomInt(2, 20)); // max_adults
  row.push(getRandomInt(2, 6)); // max_children
  row.push(getRandomInt(2, 6)); // max_infants
  row.push(getRandomInt(0, 80)); // cleaning_fee
  row.push(getRandomDecimal(0, 0.4, 2)); // service_fee_perc
  row.push(getRandomDecimal(0, 0.4, 2)); // occ_tac_rate_perc
  row.push(getRandomInt(0, 50)); // additional_guest_fee

  listings[i] = row;
}

// reservations
const reservations = [];
let rowNum = 1;
for (let i = 0; i < 100; i += 1) {
  const reservationsForListing = getRandomInt(10, 50);

  for (let j = 0; j < reservationsForListing; j += 1) {
    const row = [];

    row.push(rowNum); // index
    row.push(i + 1); // listing_id
    row.push(); // start_date
    row.push(); // end_date

    reservations[i] = row;
    rowNum += 1;
  }
}

// daily prices
const dailyPrices = [];
rowNum = 1;
for (let i = 0; i < 100; i += 1) {
  const priceChangesForListing = getRandomInt(0, 10);

  for (let j = 0; j < priceChangesForListing; i += 1) {
    const row = [];

    row.push(rowNum); // index
    row.push(i + 1); // listing_id
    row.push(); // cost_per_night
    row.push(); // start_date
    row.push(); // end_date

    dailyPrices[i] = row;
    rowNum += 1;
  }
}


// load into database
