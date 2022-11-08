'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  // ES5
  // numPassengers = numPassengers
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
