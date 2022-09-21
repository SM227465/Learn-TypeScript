/* TypeScript has another built-in type call enum which represent a list of related constant,
lets imagine we wanna represent size of T-shirt as constant */

// one way to define
/*
const small = 1
const medium = 2
const large = 3
*/

// another way to represent
enum Size {
  Small,
  Medium,
  large,
}

let mySize: Size = Size.Medium;

console.log(mySize);

// by default TypeScript compiler will assign 0 to the first member and others value will be increased by 1 in order and it should look like -

/*
enum Size {
  Small = 0,
  Medium = 1,
  large = 2,
}
*/

// If we dont want thease values we can explicitly set values like what ever we want in order like here we want start from 1 and next 2 and so on

/*
enum Size {
  Small = 1,
  Medium = 2,
  large = 3,
}
*/

// we can also use string value like this
// if we do this we have to explicitly set the value for each member
/*
enum Size {
  Small = 's',
  Medium = 'm',
  large = 'l',
}
*/
