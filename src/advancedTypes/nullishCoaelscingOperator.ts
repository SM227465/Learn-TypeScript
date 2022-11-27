// when working with null or undefined value sometime we fallback to a default value
// Lets declare a variable speed with type number or null is user does not provide a value for the speed
let speed: number | null = null;

// Falsy value in JavaScript (undefined, null, '', false, 0)

// Now lets create a ride object with property speed
let ride = {
  /* What if 0 is a valid value for speed, but in this case 0 will be ignored because JavaScript treat 0 like a falsy value and speed will be 30 */
  // speed: speed || 30

  // The accurate way to check in JavaScript
  // speed: speed !== null ? speed : 30

  // In TypeScript
  // Nullish coalescing operator, if speed not equal to null or undefined use the that value otherwise use 30
  speed: speed ?? 30,
};
