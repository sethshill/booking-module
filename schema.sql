--run: mysql -u root < schema.sql

DROP DATABASE IF EXISTS project_nomad_booking;
CREATE DATABASE project_nomad_booking;

USE project_nomad_booking;

CREATE TABLE listings (
  id int PRIMARY KEY AUTO_INCREMENT,
  avg_cost_per_night int,
  avg_rating decimal (3, 2),
  max_adults int,
  max_children int,
  max_infants int,
  cleaning_fee int,
  service_fee_perc decimal (3, 2),
  occ_tax_rate_perc decimal (3, 2),
  additional_guest_fee int
);

CREATE TABLE reservations (
  id int PRIMARY KEY AUTO_INCREMENT,
  listing_id int,
  start_date date,
  end_date date
);

CREATE TABLE listing_daily_costs (
  id int PRIMARY KEY AUTO_INCREMENT,
  listing_id int,
  cost_per_night int,
  start_date date,
  end_date date
);