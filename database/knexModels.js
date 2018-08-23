const knex = require('knex');
// const knexOrm = require('knex-orm');

knex.schema.createTable('listing', (t) => {
  t.increments('id');
  t.string('avg_rating');
  t.integer('review_count');
  t.integer('max_adults');
  t.integer('max_children');
  t.integer('max_infants');
  t.decimal('cleaning_fee', 2, 10);
  t.decimal('service_fee_perc', 2, 3);
  t.decimal('occ_tax_rate_per', 2, 3);
  t.decimal('additional_guest_fee', 2, 10);
});

knex.schema.createTable('reservation', (t) => {
  t.increments('id');
  t.integer('listing_id').notNullable();
  t.date('start_date').notNullable();
  t.date('end_date').notNullable();
});

knex.schema.createTable('listing_daily_prices', (t) => {
  t.increments('id');
  t.integer('listing_id');
  t.decimal('cost_per_night', 2, 10).notNullable();
  t.date('start_date').notNullable();
});

Database.register(Listing);
Database.register(Reservation);
Database.register(ListingDailyPrice);
