// const knex = require('knex');
// const KnexOrm = require('knex-orm');

// const Database = new KnexOrm(knex({
//   client: 'mysql',
//   connection: {
//     user: 'root',
//     password: '',
//     databased: 'project_nomad_booking',
//   },
//   migrations: {
//     directory: __dirname + '/db/migrations'
//   },
//   seeds: {
//     directory: __dirname + '/db/seeds',
//   },
// }));

// module.exports = {
//   Database,
// };

const path = require('path');

module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: '',
    databased: 'project_nomad_booking',
  },
  migrations: { directory: path.join(__dirname, '/db/migrations') },
  seeds: { directory: path.join(__dirname, '/db/seeds') },
};







// class Listing extends Database.Model {
//   static get primaryKey() {
//     return 'id';
//   }
//   static get related() {
//     return {
//       reservations: this.hasMany('Reservation'),
//       listingDailyPrices: this.hasMany('ListingDailyPrice'),
//     };
//   }
// }

// class Reservation extends Database.Model {
//   static get related() {
//     return {
//       reservations: this.belongsTo('Listing'),
//     };
//   }
// }

// class ListingDailyPrice extends Database.Model {
//   static get related() {
//     return {
//       listingDailyPrices: this.belongsTo('Listing'),
//     };
//   }
// }


// // Register Models to make them relatable without cross-referencing each other
// Database.register(Listing);
// Database.register(Reservation);
// Database.register(ListingDailyPrice);
