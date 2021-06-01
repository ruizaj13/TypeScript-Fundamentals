//variables
//explicitly stating data type (ex. string)
var hello = 'world';
//single pipe is the 'Union' operator and allows you to declare multiple datatypes for a single variable
var pageName = '1';
//useCase for union
var errorMessage = null;
//functions
//state data types in parameters V                   V state data type for whats being returned
var getFullName = function (name, surname) {
    return name + '' + surname;
};
console.log(getFullName('Billy', 'Bob'));
//specifying its an object and its types
//will also notify if type is missing from object
//objects with resuable interface
var user = {
    name: 'Juan',
    age: 23,
    getMessage: function () {
        return 'Hello' + name;
    }
};
var user2 = {
    name: 'John',
    getMessage: function () {
        return 'Hello' + name;
    }
};
//TS provides efficient autocomplete and typo detection
console.log(user.age);
// console.log(user.agee)
//object examples without reusable interface
// const user: {name: string, age: number} = {
//     name: 'Juan',
//     age: 23
// }
// const user2: {name: string, age: number} = {
//     name: 'John',
//     age: 30
// }
