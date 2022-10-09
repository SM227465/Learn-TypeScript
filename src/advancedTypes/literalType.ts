/*
sometime we wanna limit the value we can assign to a varible, This is where we use literal type.

lets declare a variable 'quantity' and assume that quantity can either be 50 or 100 but nothing else
*/

// let quantity: 50 | 100 = 50

/*
we can make this code even better

instead of hard coding this literal values here we can create a custome type using a type aliases
*/

type Quantity = 50 | 100;

let quantity: Quantity = 100;

// literals dont have to be numbers, They can also be a string
type Metric = 'cm' | 'inch';

let metric: Metric = 'cm';
