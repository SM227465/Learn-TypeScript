/*
  The never type which represent values that never occure
*/
function reject(message: string): never {
  throw new Error(message);
}

reject('....');

// Anotate the return type of function with never to tell the compiler, that this function never returns
function processEvents(): never {
  while (true) {
    //
  }
}

processEvents();

// Unreachable code
console.log('Hi');
