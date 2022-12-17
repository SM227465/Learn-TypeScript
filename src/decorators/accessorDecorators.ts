function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;

  descriptor.get = function () {
    const result = original?.call(this);

    if (typeof result === 'string') {
      return result.toUpperCase();
    }

    return result;
  };
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

let person = new Person('Raizo', 'Jr');
console.log(person.fullName);
