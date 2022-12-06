/*
In JavaScript we can create an object and add property to it dynamically, this is not possible in TypeScript, TS very strict about shape of objects.

But there is situation where we have to add property into object dynamically, This is where we use Index Signature
*/

// Create object property dynamically
class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats.A1 = 'Mosh';
seats.A2 = 'John';
