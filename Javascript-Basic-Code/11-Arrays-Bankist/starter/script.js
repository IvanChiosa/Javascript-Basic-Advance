// // 'use strict';

// // /////////////////////////////////////////////////
// // /////////////////////////////////////////////////
// // // BANKIST APP

// // // Data
// // const account1 = {
// //   owner: 'Jonas Schmedtmann',
// //   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// //   interestRate: 1.2, // %
// //   pin: 1111,
// // };

// // const account2 = {
// //   owner: 'Jessica Davis',
// //   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
// //   interestRate: 1.5,
// //   pin: 2222,
// // };

// // const account3 = {
// //   owner: 'Steven Thomas Williams',
// //   movements: [200, -200, 340, -300, -20, 50, 400, -460],
// //   interestRate: 0.7,
// //   pin: 3333,
// // };

// // const account4 = {
// //   owner: 'Sarah Smith',
// //   movements: [430, 1000, 700, 50, 90],
// //   interestRate: 1,
// //   pin: 4444,
// // };

// // const accounts = [account1, account2, account3, account4];

// // // Elements
// // const labelWelcome = document.querySelector('.welcome');
// // const labelDate = document.querySelector('.date');
// // const labelBalance = document.querySelector('.balance__value');
// // const labelSumIn = document.querySelector('.summary__value--in');
// // const labelSumOut = document.querySelector('.summary__value--out');
// // const labelSumInterest = document.querySelector('.summary__value--interest');
// // const labelTimer = document.querySelector('.timer');

// // const containerApp = document.querySelector('.app');
// // const containerMovements = document.querySelector('.movements');

// // const btnLogin = document.querySelector('.login__btn');
// // const btnTransfer = document.querySelector('.form__btn--transfer');
// // const btnLoan = document.querySelector('.form__btn--loan');
// // const btnClose = document.querySelector('.form__btn--close');
// // const btnSort = document.querySelector('.btn--sort');

// // const inputLoginUsername = document.querySelector('.login__input--user');
// // const inputLoginPin = document.querySelector('.login__input--pin');
// // const inputTransferTo = document.querySelector('.form__input--to');
// // const inputTransferAmount = document.querySelector('.form__input--amount');
// // const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// // const inputCloseUsername = document.querySelector('.form__input--user');
// // const inputClosePin = document.querySelector('.form__input--pin');

// // const mov = [1200]
// // const type = mov > 0 ? 'input' : 'output';
// // console.log(type);

// // /////////////////////////////////////////////////
// // /////////////////////////////////////////////////
// // // LECTURES

// // // const currencies = new Map([
// // //   ['USD', 'United States dollar'],
// // //   ['EUR', 'Euro'],
// // //   ['GBP', 'Pound sterling'],
// // // ]);

// // // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // /////////////////////////////////////////////////
// // let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// // console.log(arr.slice(1, -1));
// // console.log(arr);

// // let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// // arr1.splice(-2, 2);
// // console.log(arr1);

// // // Reverse
// // let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
// // let arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];

// // console.log(arr3.reverse());


// // // Concat

// // const arr4 = (arr2.concat(arr3));
// // console.log(arr4);


// // // Join
// // console.log(arr4.join('-'));


// // // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// //   if (movement > 0) {
// //     console.log(`You have a money: ${movement}`);
// //   } else {
// //     console.log(`You d'ont have a money: ${movement}`);
// //   }
// // }

// // console.log(`--------`);
// // movements.forEach(function (movement) {
// //   if (movement > 0) {
// //     console.log(`You have a money: ${movement}`);
// //   } else {
// //     console.log(`You d'ont have a money: ${movement}`);
// //   }
// // });


// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // currencies.forEach(function (value, key) {
// //   console.log(`${key}: ${value}`);

// // });

// // console.log(`------`);
// // const currencies1 = new Set(['USD', 'EUR', 'Euro', 'GBP', 'Pound', 'USD', 'EUR']);
// // currencies1.forEach(function (value, key) {
// //   console.log(`${key}: ${value}`);
// // })

// // //Link für die Banking App: https://bankist.netlify.app/
// // // User: jd pin 1111
// // // User: jd pin 2222



// // // Coding Challenge #1

// // /* 
// // Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// // Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// // 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// // 2. Create an array with both Julia's (corrected) and Kate's data
// // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// // 4. Run the function for both test datasets

// // HINT: Use tools from all lectures in this section so far 😉

// // TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// // TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// // GOOD LUCK 😀
// // */
// // const dogsJulia = [3, 5, 2, 12, 7];
// // const noCats = dogsJulia.slice(1, -2);
// // const dogsKate = [4, 1, 15, 8, 3];
// // const dogsJuliaKate = noCats.concat(dogsKate);

// // const checkDogs = function (dogs, i) {
// //   dogs.forEach(function () {
// //     if (dogs < 3) {
// //       console.log(`${i + 1}Is ein puppy Dog`);
// //       // console.log(`Dog number ${i + 1} is an adult, and is ${dogsJulia}years old`);
// //     } else {
// //       console.log(`Is ein adult Dog`);
// //     }
// //   });


// // }
// // console.log(checkDogs(dogsJuliaKate()));


// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const euroToUSD = 1.1;


// // const movementsToUSD = movements.map(function (mov) {
// //   return mov * euroToUSD;
// // });
// // console.log(movementsToUSD);


// // const movementsUSD = [];
// // for (const mov of movements) movementsUSD.push(mov * euroToUSD);

// // console.log(movementsUSD);


// // const movement = movements.map(mov => mov * euroToUSD);
// // console.log(movement);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movFilter = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movFilter);


// // const withdrawals = movements.filter(mov => mov < 0);
// // console.log(withdrawals);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawals);

// const dogs = [5, 2, 4, 1, 15, 8, 3]
// const calcAverageHUmanAge = function (ages) {
//   if (ages >= 2) {
//     return ages * 1
//   } else {
//     return ages * 4
//   }
// };
// console.log(calcAverageHUmanAge(dogs));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUSD)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(totalDepositUSD);


// const arrRandom = Array.from({ length: 10 }, (_, i) => i + 1)
// console.log(arrRandom);


///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla:  = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that irecommendedFoods recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
GOOD LUCK 😀
*/
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];








