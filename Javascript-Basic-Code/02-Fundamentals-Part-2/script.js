'use strict';

// function fruit (orange, apples) {
//     const juice = `Juice whit ${orange} orange and ${apples} apples.`;
//     return juice;
// }

// const apple = fruit(3, 2);
// console.log(apple);

// const num = Number('10');
// console.log(typeof num);

// function calcAge (birthYear) {
//     return 2037 - birthYear;
   
// }

// const age1 = calcAge(1991);
// console.log(calcAge(1991));


// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const calcAge4 = (birthYear, name) => {
//     const age4 = 2037 - birthYear;
//     const retirement = 65 - age4;
//     return `${name} retires in ${retirement}`;
// };

// console.log(calcAge4(1991, 'Ivan'));


// const calcAverage = (a, b, c) => (a +b + c) / 3;
// console.log(calcAverage(3, 4, 5));

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20; 
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);