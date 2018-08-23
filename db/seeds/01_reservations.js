const faker = require('faker');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      // return knex('listings').insert([
      //   {id: 1, name: 'test1'},
      //   {id: 2, name: 'test2'},
      //   {id: 3, name: 'test2'}
      // ]);
      const numListings = 1000;
      let listings = [];
      for (let i = 0; i < numListings; i += 1) {
        const listing = {
          avgRating: faker.random.number(5),
          reviewCount: faker.random.number(100),
          maxAdults: faker.random.number(8),
          maxChildren: faker.random.number(8),
          maxInfants: faker.random.number(5),
          cleaningFee: faker.random.number({
            min: 0.1,
            max: 1,
            precision: 0.01,
          }),
          serviceFeePerc: faker.random.number({
            min: 0.1,
            max: 0.3,
            precision: 0.01,
          }),
          occTaxRatePerc: faker.random.number({
            min: 0.1,
            max: 0.3,
            precision: 0.01,
          }),
          additionalGuestFee: faker.random.number(100),
        };

        listings.push(listing);
      }
      return knex('listigns').insert(listings);
    }
  )
};
