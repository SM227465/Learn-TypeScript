/*
inheritance - inheritance is a mechanism that allow us to re-use our code.

In this scenario we refer the Person class as the Parent/Base/Super class and Techer and Student class as Child/Derived/Sub class
*/
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  walk() {
    console.log('walking...');
  }
}

// extends keyword to tell the Student class inherit everything from Person class
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    // In TypeScript we have special keywprd call super that we use reference the base class. To call the constructor of base class
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test...');
  }
}

let student = new Student(1, 'Sourav', 'Mandal');
