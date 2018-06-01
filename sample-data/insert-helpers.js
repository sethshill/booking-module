const mysql = require('mysql');

const config = {
  user: 'root',
  database: 'project_nomad_booking',
};

const connection = mysql.createConnection(config);
connection.connect();

module.exports = {
  insertListing: (listing) => {
    const insertListingQuery = `INSERT INTO listings (id, avg_rating, max_adults, max_children, max_infants, 
      cleaning_fee, service_fee_perc, occ_tax_rate_perc, additional_guest_fee)
      VALUES (${listing[0]}, ${listing[1]}, ${listing[2]}, ${listing[3]},
      ${listing[4]}, ${listing[5]}, ${listing[6]}, ${listing[7]}, ${listing[8]});`;

    connection.query(insertListingQuery, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
  },

  // insertReservation() {

  // },

  // insertPrice() {

  // },

};
