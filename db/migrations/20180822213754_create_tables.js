
exports.up = async function (knex, Promise) {
  await knex.schema.dropTableIfExists('listings').dropTableIfExists('reservations').dropTableIfExists('listing_daily_prices');
  return knex.schema.createTable('listings', (t) => {
    t.increments('id');
    t.string('avg_rating');
    t.integer('review_count');
    t.integer('max_adults');
    t.integer('max_children');
    t.integer('max_infants');
    t.decimal('cleaning_fee', 10, 2);
    t.decimal('service_fee_perc', 3, 2);
    t.decimal('occ_tax_rate_per', 3, 2);
    t.decimal('additional_guest_fee', 10, 2);
  })

    .createTable('reservations', (t) => {
      t.increments('id');
      t.integer('listing_id').notNullable();
      t.date('start_date').notNullable();
      t.date('end_date').notNullable();
    })
    .createTable('listing_daily_prices', (t) => {
      t.increments('id');
      t.integer('listing_id');
      t.decimal('cost_per_night', 10, 2).notNullable();
      t.date('start_date').notNullable();
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('listings').dropTable('reservations').dropTable('listing_daily_prices');
};
