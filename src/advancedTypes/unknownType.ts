/* Any type represent any kind of value, we should avoid it as mush as possible.
  lets say we are converting some JavaScript code to TypeScript and we have a situation where we really have to use any type
*/

// Lets define a function
function render(document: unknown) {
  // Narrowing
  if (typeof document === 'string') {
    document.toUpperCase();
  }
  // document.move();
  // document.fly();
  // document.whatEverWeWant();
}

// Using the unknown type is preffred to using the any type
