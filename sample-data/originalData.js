// // Notes
// // Description: Generates fake data for all 3 tables
// // From Nick: node seed reservation data, iterates for X records, stores in db
// let faker = require('faker');

// (() => {
//   let date = faker.date.future(0);
//   let newDate = date.setHours(0, 0, 0, 0);
//   console.log(date);
//   console.log(newDate);
// })();

// Iterate for 100 iterations (make 100 listings)
let numListings = 1;
let listings = [];
let reservations = [];
let listing_daily_prices = [];

for (let i = 0; i < numListings; i++) {
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
  for (let j = 0; j < numReservationsPerListing; j++) {
    // create a listing with listingId = i,
    // startDate and endDates that don't overlap with with other reservations having the same listingId

    // pick a start date & end date
    let isAvailable = false;
    // while isAvailable = false
      // for each reservation with the same listingId
        // if either the start date greater than or equal to the startDate of reservation && less than the endDate
          // set isAvailable = false

    let listingsInReservation = [];
    // let start_date = faker.date.future(0);
    // let end_date = faker.date.between(start_date,'2019-03-01');
    // let reservation = {
    //   "listingId": i,
    //   "startDate":
    // };

  }
  let currentListingReservations = [];

  let end_date,
    start_date;

  // finds 2 different dates and assigns them to start_date and end_date
  let getDates = () => {
    let date1 = faker.date.future(0).setHours(0, 0, 0, 0);
    let date2 = faker.date.future(0).setHours(0, 0, 0, 0);
    console.log("date1: ", date1)
    if (date1.getTime() > date2.getTime()) {
      start_date = date2;
      end_date = date1;
    } else if (date1.getTime() === date2.getTime()) {
      getDates();
    } else {
      start_date = date1;
      end_date = date2;
    }
  };

  // checks if given dates startDate1 and endDate1 don't overlap with exisiting reservation dates startDate2 and endDate2
  let hasOverlap = (startDate1, endDate1, startDate2, endDate2) => {
    if ((
      startDate1.getTime() >= startDate2.getTime() && startDate1.getTime() < endDate2.getTime()) ||
      (endDate1.getTime() > start && endDate1.getTime() <= endDate2.getTime()) ||
      (startDate1.getTime() < startDate2.getTime() && endDate1.getTime() > endDate2.getTime())) {
        return true;
      }
    return false;
  }

  // find available dates
  let getAvailableDates = (currentListingReservations) => {
    // console.log(startDate, ' , ', endDate);
    getDates();
    currentListingReservations.forEach((reservation) => {
      if (hasOverlap(start_date, end_date, reservation.start_date, reservation.end_date) === false) {
        console.log(`The dates ${start_date} and ${end_date} overlap with ${reservation.start_date} and ${reservation.end_date}`);
      }
    });
  };
  // for testing only, populate currentListingReservations with dates
  let temp = {};
  for (let k = 0; k < 5; k++) {
    getDates();
    temp.start_date = start_date;
    temp.end_date = end_date;
    currentListingReservations.push(temp);
  }

  // console.log(currentListingReservations);
  let availableDates = getAvailableDates(currentListingReservations);

  // let Reservation = {
  //   listingId: i,
  //   start_date: start_date,
  //   end_date: end_date,
  // };
}


