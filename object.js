// Object = A collection of related properties and/or methods can represent Real world objects (people, peoducts,places)
// Object = {key: value,
//           function()}

const person1 = {
  firstName: "Faysal",
  lastName: "Mahmud",
  age: 28,
  isEmployed: true,
  sayHello: () => {
    console.log("Hi! I am Spongebob!");
  },
  sayBye: () => {
    console.log("Goodbye");
  },
};

const person2 = {
  firstName: "Usman",
  lastName: "Mahmud",
  age: 0,
  isEmployed: false,
  sayHello: () => {
    console.log("Hi! I am Usman!");
  },
  sayBye: () => {
    console.log("Goodbye");
  },
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.isEmployed);
person2.sayHello();
