/*
lets define a function call 'greet', it takes a name which is a string
*/

/*
function greet(name: string) {
  console.log(name.toUpperCase());
}

In vanilla javascript we can call this function and accidently giving null or undefined, which is a totaly valid javascript code

greet(null);
greet(undefined);

but when we run this program, it will be crashed
*/

function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  }

  console.log('Hola!');
}

greet(null);
