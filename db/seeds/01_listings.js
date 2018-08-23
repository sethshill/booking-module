const faker = require('faker');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
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
};
