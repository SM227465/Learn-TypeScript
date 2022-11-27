// Sometime we know more about the type of object than TypeScript

/* In JavaScript we have document object that represent a document of HTML page when loaded in browser,
In this object we have a method getElementById() to get a reference of an element on this page

lets imagine we wanna get value of a HTMLInputElement by this method. So we have to tell the TypeScript that we know more about the type of HTML element
 */

let phone = document.getElementById('phone') as HTMLInputElement;

// Another syntex
// let phone = <HTMLInputElement>document.getElementById('phone');

console.log(phone.value);
