const mysql = require('mysql');

const config = require('../database/config.js');

const connection = mysql.createConnection(config);
connection.connect();

module.exports = {
  insertListing: (listing) => {
    const insertListingQuery = `INSERT INTO listings (avg_rating, review_count, max_adults, max_children,
      max_infants, cleaning_fee, service_fee_perc, occ_tax_rate_perc, additional_guest_fee)
      VALUES (${listing[1]}, ${listing[2]}, ${listing[3]},
      ${listing[4]}, ${listing[5]}, ${listing[6]}, ${listing[7]}, ${listing[8]}, ${listing[9]});`;

    connection.query(insertListingQuery, (err) => {
      if (err) {
        // console.log(err);
        throw err;
      }
    });
  },

  insertReservation: (reservation) => {
    const insertReservationQuery = `INSERT INTO reservations (listing_id, start_date, end_date)
      VALUES (${reservation[1]}, STR_TO_DATE('${reservation[2]}', '%m/%d/%Y'), STR_TO_DATE('${reservation[3]}', '%m/%d/%Y'));`;

    connection.query(insertReservationQuery, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },

  insertPrice: (price) => {
    const insertPriceQuery = `INSERT INTO listing_daily_prices (listing_id, cost_per_night, start_date)
      VALUES (${price[1]}, ${price[2]}, STR_TO_DATE('${price[3]}', '%m/%d/%Y'));`;

    connection.query(insertPriceQuery, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },

  closeConnection: () => {
    connection.end();
  },

};
