let userName: string = "Yuliya";
let age: number = 27;
let isStudent: boolean = true;


let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Kamilla", "Vladimir", "Yunus"];

let person: [string, number] = ["Kamilla", 32];


interface IPerson {
    name: string;
    age: number;
  }
  
  let user: IPerson = {
    name: "Kamilla",
    age: 32,
  };

  
type Person = {
    name: string;
    age: number;
  };
  
  let user2: Person = {
    name: "Yuliya",
    age: 27,
  };
  
let id: string | number;
  id = 123;   
  id = "ABC"; 

  
  interface Contact {
    email: string;
  }
  
  interface User {
    name: string;
  }
  
  type UserContact = User & Contact;
  
  let user1: UserContact = {
    name: "Yuliy",
    email: "yuliymarkov01@gmail.com",
  };

  
  function greet(name: string): string {
    return `Здравствуй, ${name}`;
  }
  
  let result: string = greet("Yunus");


  enum Color {
    Red,
    Green,
    Blue,
  }
  
  let myColor: Color = Color.Red;

let data: any = 42;
data = "Now I'm a string";

let value: unknown = 30;
if (typeof value === "number") {
  console.log(value.toFixed());
}
