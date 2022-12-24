
//data types

//primitive
//string
var name = "ayush";
var age = "25";

//number
var num = 12.12241241;
var b = num + 2; //14

//boolean
var isPersonStudying = true;
var isPersonAlive = false;

//undefined
var myCode;

//null
var nothing = null;

//non primitive data type
//**** Array ****
const array = [1, 2, 3, 4, "john", "doe", true, undefined, null];
console.log(array)
console.log(array.length);

const arr2 = ['ayush', 'danish', 'suboor', 'luv', 'apporv'];
console.log(arr2[0]);

//add an element at last index of an array
arr2.push('sunil');
console.log(arr2);

//delete an element from last index of an array
arr2.pop();
console.log(arr2);

//add an element at the 0 index of an array
arr2.unshift('Ravi');
console.log(arr2);

//delete an element fromt the 0 index of an array
arr2.shift();
console.log(arr2);

//update a value
arr2[0] = "some name"

for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
};

// **** Object ****
console.log('******************** Object ************************')
const person = {
    name: 'ayush',
    location: 'delhi',
    age: 27,
    isAlive: true,
    isSingle: false,
    skills: ['HTML', 'CSS', 'Javscript']
};

console.log(person.name);
console.log(person.skills[1]);
person.skills = ['JAVA', 'Python'];

delete person.name