//ignore this code
// console.log('Hello World');

let nameHere = 'Name here';
const value = 0.3;
let age = 30;
let isApproved = false;
let selectedColour = null;

let person = {
    nameHere: 'Reuben',
    age: 26
};

//dot notation
person.nameHere = 'John';

//bracket notation
let selection = 'nameHere';

person[selection] = 'Mary'

let selectedColours = ['red','blue','green'];
selectedColours[3] ='orange'; 

console.log(selectedColours[3])
console.log(value)
console.log(person.nameHere);
console.log(person.age)
console.log(isApproved);

// performing a task
function greet(name, lastName){
    console.log('Hello '+name +' '+lastName)
}

// calculating a value
function square(number){
    return number*number
}

greet('John','Smith');
let number = square(2);
console.log(number)