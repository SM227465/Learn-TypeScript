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

/*
In the printnames for loop the person object is the type Person.
but in each iteration of the for loop the person object is taking diffrent form.
in the first iteration it takes the form of student and secont iteration it takes form of teacher object. and that is why fullName getter gives us diffrent output.
so our person object is taking many diffrent forms and acting polymorphically.

why its powerfull? => because in futur we can create a new class like Principal which re-present a school/college principal and printing name without making a single change to this function.

So we have implimented a new functionality just by writing new code and thats bring us an another principal object oriented programming call Open Closed Principal.

Open Closed Principal - Classs should be open for extension and closed for modification
*/
