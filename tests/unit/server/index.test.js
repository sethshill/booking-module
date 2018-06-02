const request = require('supertest');
const app = require('../../../server/app.js');

describe('Test static files', () => {
  test('It should response the GET method', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should serve index.html', (done) => {
    request(app).get('/').then((response) => {
      expect(response.type).toBe('text/html');
      done();
    });
  });

  test('It should serve bundle.js', (done) => {
    request(app).get('/bundle.js').then((response) => {
      expect(response.type).toBe('application/javascript');
      done();
    });
  });
});


describe('Test GET /booking/core/', () => {
  test('It should response to the GET method', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should send data for only 1 listing', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(response.body.length).toBe(1);
      done();
    });
  });

  test('It should send avg_rating', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].avg_rating).toBe('number');
      done();
    });
  });

  test('It should send max_adults', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].max_adults).toBe('number');
      done();
    });
  });

  test('It should send max_children', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].max_children).toBe('number');
      done();
    });
  });

  test('It should send max_infants', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].max_infants).toBe('number');
      done();
    });
  });

  test('It should send cleaning_fee', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].cleaning_fee).toBe('number');
      done();
    });
  });

  test('It should send service_fee_perc', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].service_fee_perc).toBe('number');
      done();
    });
  });

  test('It should send occ_tax_rate_perc', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].occ_tax_rate_perc).toBe('number');
      done();
    });
  });

  test('It should send additional_guest_fee', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].additional_guest_fee).toBe('number');
      done();
    });
  });

  test('It should send avg_cost_per_night', (done) => {
    request(app).get('/booking/core/listingId/1').then((response) => {
      expect(typeof response.body[0].avg_cost_per_night).toBe('number');
      done();
    });
  });
});

describe('Test GET /booking/availability/', () => {
  test('It should response to the GET method', (done) => {
    request(app).get('/booking/availability/listingid/3?start_date=2018-07-01&end_date=2018-09-28').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should send body containing 0 or more reservations', (done) => {
    request(app).get('/booking/availability/listingid/3?start_date=2018-07-01&end_date=2018-09-28').then((response) => {
      expect(response.body.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });
});

describe('Test GET /booking/pricing/', () => {
  test('It should response to the GET method', (done) => {
    request(app).get('/booking/pricing/listingid/3?start_date=2018-07-01&end_date=2018-09-28').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should send body containing at least one price', (done) => {
    request(app).get('/booking/pricing/listingid/3?start_date=2018-07-01&end_date=2018-09-28').then((response) => {
      expect(response.body.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });

  test('It should send the most recent price for dates far in the future', (done) => {
    request(app).get('/booking/pricing/listingid/3?start_date=2020-07-01&end_date=2020-09-28').then((response) => {
      expect(response.body.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });

  test('It should send id', (done) => {
    request(app).get('/booking/pricing/listingid/3?start_date=2018-07-01&end_date=2018-09-28').then((response) => {
      expect(typeof response.body[0].id).toBe('number');
      done();
    });
  });

  test('It should send a start_date', (done) => {
    request(app).get('/booking/pricing/listingid/3?start_date=2018-07-01&end_date=2018-09-28').then((response) => {
      expect(typeof response.body[0].start_date).toBe('string');
      done();
    });
  });

  test('It should send a start_date', (done) => {
    request(app).get('/booking/pricing/listingid/3?start_date=2018-07-01&end_date=2018-09-28').then((response) => {
      expect(typeof response.body[0].cost_per_night).toBe('number');
      done();
    });
  });
});
