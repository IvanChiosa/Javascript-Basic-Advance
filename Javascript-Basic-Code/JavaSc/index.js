'use strict';



// const arr = [1, 2, 3, 4];
// console.log(arr);
// const newArr = [...arr];
// console.log(newArr);
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);


// const passengers = 'iVaN';
// const passengersLower = passengers.toLowerCase();
// const passengersCorrect = passengersLower[0].toUpperCase() + passengersLower.slice(1);
// console.log(passengersCorrect);
// const passengersSliced = passengers.slice(8);
// console.log(passengersSliced);


// const announcements = 'All passengers come to boarding door 23. Boarding door 23';
// // console.log(announcements.replace('door', 'Gate'));
// console.log(announcements.replaceAll('door', 'Gate'));


// const capitalizeName = function (name) {
//     const names = name.split(' ');
//     const namesUpper = [];

//     for (const n of names) {
//         namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     }
//     console.log(namesUpper.join(' '));
// }
// capitalizeName('ivan as a web developer');


const user = function (str) {
    return str.replace(/ /g, ' ').toLowerCase();
};

console.log(user('Ivan is a web developer'));

const upperFirst = function (str) {
    const [first, second, ...rest] = str.split(' ');
    return [first.toUpperCase(), second.toUpperCase(), ...rest].join(' ');
};

console.log(upperFirst('Ivan is a web developer'));

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Original string: ${fn(str)}`);
}

transformer('Ivan is a web developer', user)
transformer('Ivan is a web developer', upperFirst)


// const user1 = function (str) {
//     const splitWort = str.split(' ');
//     return str.split(' ').toUpperCase([0]).join(' ')
// }


// console.log(user1('hello world'));

function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
console.log(titleCase('download prIce History'));


const oneWords = function (str) {
    const [first, ...last] = str.split(' ');
    console.log([first.toUpperCase(), ...last].join(' '));
};
oneWords('hello World')


const firstLetter = function () {
    let str = 'hello World';
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
console.log(firstLetter('hello World'));