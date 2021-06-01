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
//void types
//voids indicate that there is no return to be expected
var doSomething = function () {
    console.log('doSomething');
};
//any type 
//'turns off' typsecript - avoid using it because it fixes nothing
var foo = 'foo';
console.log(foo.bar());
//never type
//code cant be executed to the end - function has no end point
//no real use case
var doSomething2 = function () {
    throw 'never';
};
//unknown type and as 
//ts3 never alternative
//prevents type assigning when the expected data type is unknown
//as is used for type assertion
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown; //as allows you to change unknown to the needed data type
//type assertion
var pageNumber = '1';
//you must use as to change a data type to unknown before you can change it to a new data type
var numericPageNumber = pageNumber;
//working with DOM elements
//TS has no access to mark-up so you use as to assign data types to elements
var someElement = document.querySelector('.foo');
console.log('someElement', someElement.value);
//event listener
var someElement2 = document.querySelector('.foo');
someElement2.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', event.target);
});
//classes
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullname = function () {
        return this.firstName + '' + this.lastnae;
    };
    return User;
}());
var newUser = new User('Juan', 'Ruiz');
console.log(user.);
