function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (message: string) {
    console.log('Before');
    original.call(this, message);
    console.log('After');
  };
}

class Person {
  @Log
  say(message: string) {
    console.log('Person says ' + message);
  }
}

const person = new Person();
person.say('Hello');
