/*
The diffrence between Private and Protected is Protected members are inherited but Private not.

If there is a Private member in base class it can not inherit to derived class, Only available in base class

If there is a protected member in base calss it inherit to drived class

Note: Dont use Protected access modifier unless you know what you are doing. Stick to Public and Private access modifier.
*/
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  private walk() {
    console.log('walking...');
  }

  protected walk2() {
    console.log('walking...');
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    // we can not do this
    // this.walk()
    // but can do this
    // this.walk2()
    console.log('Taking a test...');
  }
}

class Teacher extends Person {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return 'Principal ' + super.fullName;
  }
}

printnames([
  new Student(1, 'Raizo', 'Jr'),
  new Teacher('Mosh', 'Hamedani'),
  new Principal('John', 'Smith'),
]);

function printnames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
