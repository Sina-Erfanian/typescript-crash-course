// Basic Types

let id: number = 5;

let myName: string = "Sina Erfanian";

let isLogin: boolean = false;

let x: any = "Heelo";

x = true;

let age: number;

age = 20;

// an array that just contain number
let ids: number[] = [1, 2, 3, 4, 5];

// ids.push("sina") => error

let arr: any[] = [1, true, "job"];

// Tuple
let person: [string, number, boolean, number] = ["sina", 20, true, 21];

//Tuple Array (an array of tuples)
let employee: [string, number, boolean][];

employee = [
  ["mmd", 21, false],
  ["ahmad", 22, true],
];

// Union

// it could be number and string (both of them valid)

let pId: number | string = 106;

// Enum

enum numberCount {
  one = 1,
  two,
  three,
  four,
}

// console.log(numberCount.four);

enum direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(direction.Down);

// Object

type User = {
  id: number | string;
  name: string;
  isLogin: boolean;
};

const user: User = {
  id: 1,
  name: "sina",
  isLogin: true,
};

// Type Assertion

let cid: any = "sina";

//first way
// let customer = <number>cid;

//second way
let customer = cid as number;

customer = 2;

// Functions

// we can give a type to the functions return value

function addSum(x: number, y: number): number {
  return x + y;
}

console.log(addSum(1, 4));

// Void (nothing return)

function log(message: number | string): void {
  console.log(message);
}

log(666);

// Interfaces

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // optional (?)
}

// we can use readonly and when we use it we don't able to change that property

const user1: UserInterface = {
  id: 2,
  name: "mmd",
};

// user1.id = 2 => error (readonly)

// a type can be used with primitives and unions
// for example :
type point = number | string;

const p1: point = 2;

// note : you can't use interface with primitives and union

// Interface with functions

interface MathFunc {
  (x: number, y: number): number;
}

const addNum: MathFunc = (x: number, y: number): number => x + y;

// give us error because we define in interface that x should be number and here we set it to string so it give error

// const subNum: MathFunc = (x: string, y: number): number => x - y;

// we can make an interface and use it for multiple item

// Classes

interface PersonInterface {
  id: number;
  username: string;
  registered(): string; // return string
}

// set interface to class with implements
class Person implements PersonInterface {
  // private : only access inside class
  // protected is like private but only difference is we access it when we extends this class
  id: number;
  username: string;

  constructor(id: number, username: string) {
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
  position: string;

  constructor(id: number, username: string, position: string) {
    super(id, username);
    this.position = position;
  }
}

const emp = new Employee(1, "shawn", "developer");

console.log(emp);

// Generics

// create reusable component

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
// i think replace everything between <> instead of capital T
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["sina", "mmd", "hasan"]);


