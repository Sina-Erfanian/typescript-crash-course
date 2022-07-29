"use strict";
// Basic Types
let id = 5;
let myName = "Sina Erfanian";
let isLogin = false;
let x = "Heelo";
x = true;
let age;
age = 20;
// an array that just contain number
let ids = [1, 2, 3, 4, 5];
// ids.push("sina") => error
let arr = [1, true, "job"];
// Tuple
let person = ["sina", 20, true, 21];
//Tuple Array (an array of tuples)
let employee;
employee = [
    ["mmd", 21, false],
    ["ahmad", 22, true],
];
// Union
// it could be number and string (both of them valid)
let pId = 106;
// Enum
var numberCount;
(function (numberCount) {
    numberCount[numberCount["one"] = 1] = "one";
    numberCount[numberCount["two"] = 2] = "two";
    numberCount[numberCount["three"] = 3] = "three";
    numberCount[numberCount["four"] = 4] = "four";
})(numberCount || (numberCount = {}));
// console.log(numberCount.four);
var direction;
(function (direction) {
    direction["Up"] = "Up";
    direction["Down"] = "Down";
    direction["Left"] = "Left";
    direction["Right"] = "Right";
})(direction || (direction = {}));
console.log(direction.Down);
const user = {
    id: 1,
    name: "sina",
    isLogin: true,
};
// Type Assertion
let cid = "sina";
//first way
// let customer = <number>cid;
//second way
let customer = cid;
customer = 2;
// Functions
// we can give a type to the functions return value
function addSum(x, y) {
    return x + y;
}
console.log(addSum(1, 4));
// Void (nothing return)
function log(message) {
    console.log(message);
}
log(666);
// we can use readonly and when we use it we don't able to change that property
const user1 = {
    id: 2,
    name: "mmd",
};
const p1 = 2;
const addNum = (x, y) => x + y;
// set interface to class with implements
class Person {
    // private : only access inside class
    // protected is like private but only difference is we access it when we extends this class
    id;
    username;
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
    registered() {
        return `${this.username} is now registered`;
    }
}
let person1 = new Person(1, "amir");
let person2 = new Person(2, "ali");
console.log(person2.registered());
// console.log(person1.id); error (private)
console.log(person1, person2);
class Employee extends Person {
    position;
    constructor(id, username, position) {
        super(id, username);
        this.position = position;
    }
}
const emp = new Employee(1, "shawn", "developer");
console.log(emp);
// Generics
// create reusable component
function getArray(items) {
    return new Array().concat(items);
}
// i think replace everything between <> instead of capital T
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["sina", "mmd", "hasan"]);
