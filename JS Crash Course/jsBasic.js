/*
// string, number, boolean, null, undefined, symbol

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x); // gives an object which is actually an error

// string concatenation
console.log('My name is ' + name + ' and my age is ' + age);
// template string
const hello = `My name is ${name} and my age is ${age}`;
console.log(typeof hello);

s = "computers, software, case, code";
console.log(s);
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(2, 8).toUpperCase());
console.log(s.split(', '));


// arrays

const fruit = ['apples', 10, true];
fruit[3] = 'grapes';
console.log(fruit);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2, arr2);
console.log(children);


const person = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['music', 'movies', 'sports'],
    address: {
        city: 'Boston',
        state: 'MA'
    }
}
person.email = 'johndoe@gmail.com';

console.log(person);



// Array of objects

const todos = [{
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Dentist Appointment',
        isCompleted: true
    },
    {
        id: 3,
        text: 'groceries',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

for (let i = 1; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// iterating through an array
// for of loop 
for (let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);


// switch statement
const x = 4;
const color = x > 5 ? 'red' : 'blue';
switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is neither red or blue');
        break;
}


// functions
function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
};

const addNums = (num1 = 1, num2 = 2) => num1 + num2;

console.log(addNums(10, 20));
*/

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
};

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe', '4-4-1980');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());