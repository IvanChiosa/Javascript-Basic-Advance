'use strict';



const arr = [1, 2, 3, 4];
console.log(arr);
const newArr = [...arr];
console.log(newArr);
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


const passengers = 'iVaN';
const passengersLower = passengers.toLowerCase();
const passengersCorrect = passengersLower[0].toUpperCase() + passengersLower.slice(1);
console.log(passengersCorrect);
const passengersSliced = passengers.slice(8);
console.log(passengersSliced);


const announcements = 'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcements.replace('door', 'Gate'));
console.log(announcements.replaceAll('door', 'Gate'));


const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('ivan as a web developer');
