'use strict';



const info = function (firstName, lastName) {

    return `Mein  name ist ${firstName}}, und mein Last name ist ${lastName}`;
};

console.log('Ivan', 'Chiosa');

const info2 = (first, last) => {
    return `Mein  name ist ${first}}, und mein Last name ist ${last}`;

};
console.log('Mario', 'Rossi');

const greet = () => console.log('Hey Ivan');
document.querySelector('.poll').addEventListener('click', greet)