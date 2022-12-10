/* 
inheritance is great but sometime we wanna change something in the inheritaed code.

lets imagine we want inherit fullName getter in Teacher class but also want prefix Professor word.

so in the Teacher class we will change the implementation of the fullName getter. This is call method overriding. So overriding a method means changing it implementation
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

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test...');
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}

let teacher = new Teacher('Mosh', 'Hamedani');
