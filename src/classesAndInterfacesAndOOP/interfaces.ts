/*
In Object-Oriebted Programming we also have interface - to define shape of objects.
*/

// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// interface also can inherit
interface CloudeCalender extends Calendar {
  sync(): void;
}

class GoogleCalender implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}

/*
What should we use? abstract class or interface?
=> it depends, if abstract class has no logic or any alogorithm that derived/child class have to use then its better to use an interface
*/
