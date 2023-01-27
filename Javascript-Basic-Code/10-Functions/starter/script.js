'use strict';



///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
};

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 24739479284) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passport!');
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);


///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};


const user = function (str) {
    return str.toLowerCase();
}
console.log(user('Hey Ivan ich wunche dir viel erfolgt'));


const upperFirst = function (str) {
    const [first, second, ...rest] = str.split(' ');
    return [first.toUpperCase(), second.toUpperCase(), ...rest].join(' ');
};
console.log(upperFirst('hey IVan ich wunche dir wiel erfolg'));


// Higher-order function
const transformer = function (str, str2, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)} `);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', 'Hallo', upperFirstWord);
transformer('JavaScript is the best!', 'Ivan', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = function (greeting) {
    return function (name, vorname) {
        console.log(`${greeting}... mein name ist ${name} und mein vorname ist ${vorname}`);
    };
};


const greetingHey = greet('Hey');
greetingHey('Ivan', 'Chiosa');

greet('Hallo')('Ivan', 'Schulz');


// Arrow functions 1
const greet1 = greetings => {
    return function (name, vorname) {
        console.log(`${greetings}... mein name ist ${name} und mein vorname ist ${vorname}`);
    };
};

greet1('Guten Tag')('Ecaterina', 'Chiosa')

// Arrow function 2 
const greet2 = greeting => (namen, vorname) => console.log(`${greeting}... mein name ist ${namen} und mein vorname ist ${vorname}`)

greet2('Buna ziua')('Nina', 'Chiosa')


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} ${this.iataCode} ${flightNum}`);
        this.bookings.push({ flight: `${this.airline} ${this.iataCode} ${flightNum}`, name })
    }
};

lufthansa.book(123, 'Ivan Chiosa');
console.log(lufthansa);


const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.40);
console.log(addVAT2(100));

(function () {
    console.log('Hey Ivan');
})();

(() => console.log('Hey Basti'))();