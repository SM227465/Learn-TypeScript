/* with union types we can give a variable or function parameter more than one type.
   lets define a function to convert weight kilogram to pound.
   lets assume that parameter 'weight' can be a number or a string
 */
function kgToLps(weight: number | string): number {
  // narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

kgToLps(10);
kgToLps('10');
