//variables
   //explicitly stating data type (ex. string)
let hello: string = 'world';
//single pipe is the 'Union' operator and allows you to declare multiple datatypes for a single variable
let pageName: string | number = '1';
//useCase for union
let errorMessage: string | null = null;

//functions

//state data types in parameters V                   V state data type for whats being returned
const getFullName = (name: string, surname: string): string => {
    return name + '' + surname;
}

console.log(getFullName('Billy', 'Bob'))

//entity definitions and interfaces

//interfaces always defined with capital letter
//interfaces provide reusable data typing instead of having to copy and paste onto every object

//types can be used to create data type aliases and can be combined with unions
//type PopularTag = string;
//type MaybePopularTag = PopularTag | null; 

//best practice to add 'interface' to end of interface name
interface UserInterface {
    //by default all these properties are mandatory
    name: string;
    //question mark immedeatly after variable name makes it optional
    age?: number;
    getMessage(): string
}

//specifying its an object and its types
//will also notify if type is missing from object

//objects with resuable interface
const user: UserInterface = {
    name: 'Juan',
    age: 23,
    getMessage() {
        return 'Hello' + name;
    },
};

const user2: UserInterface = {
    name: 'John',
    getMessage() {
        return 'Hello' + name;
    }
}

//TS provides efficient autocomplete and typo detection
console.log(user.age)
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

const doSomething = (): void => {
    console.log('doSomething');
};

//any type 
//'turns off' typsecript - avoid using it because it fixes nothing

let foo: any = 'foo'
console.log(foo.bar())

//never type
//code cant be executed to the end - function has no end point
//no real use case

const doSomething2 = (): never => {
    throw 'never';
};

//unknown type and as 
//ts3 never alternative
//prevents type assigning when the expected data type is unknown
//as is used for type assertion
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string; //as allows you to change unknown to the needed data type

//type assertion
let pageNumber: string = '1';
//you must use as to change a data type to unknown before you can change it to a new data type
let numericPageNumber: number = (pageNumber as unknown) as number;

//working with DOM elements
//TS has no access to mark-up so you use as to assign data types to elements
const someElement = document.querySelector('.foo') as HTMLInputElement;
console.log('someElement', someElement.value)

//event listener
const someElement2 = document.querySelector('.foo');
someElement2.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', event.target);
});

//classes
class User {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname(): string {
        return this.firstName + '' + this.lastnae
    }
}
const newUser = new User('Juan', 'Ruiz');
console.log(user.)