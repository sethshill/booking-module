#run: mysql -u root < sample-data/schema.sql

DROP DATABASE IF EXISTS project_nomad_booking;
CREATE DATABASE project_nomad_booking;

USE project_nomad_booking;

CREATE TABLE listings (
  id int PRIMARY KEY AUTO_INCREMENT,
  avg_rating decimal (3, 2) DEFAULT 0,
  review_count int DEFAULT 0,
  max_adults int DEFAULT 1,
  max_children int DEFAULT 0,
  max_infants int DEFAULT 0,
  cleaning_fee decimal (10, 2) DEFAULT 0,
  service_fee_perc decimal (3, 2) DEFAULT 0,
  occ_tax_rate_perc decimal (3, 2) DEFAULT 0,
  additional_guest_fee decimal(10, 2) DEFAULT 0
);

CREATE TABLE reservations (
  id int PRIMARY KEY AUTO_INCREMENT,
  listing_id int NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL
);

CREATE TABLE listing_daily_prices (
  id int PRIMARY KEY AUTO_INCREMENT,
  listing_id int NOT NULL,
  cost_per_night decimal(10, 2) NOT NULL,
  start_date date NOT NULL
);