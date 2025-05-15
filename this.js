// this = reference to the Object where THIS is used (the object depends on the immediate context)

// person.name = this.name

const person = {
  firstName: "Faysal",
  lastName: "Mahmud",
  age: 28,
  isEmployed: true,
  sayHello: function () {
    console.log(`Hi! I am ${this.firstName}!`);
  },
  sayBye: () => {
    console.log("Goodbye");
  },
};

person.sayHello();
