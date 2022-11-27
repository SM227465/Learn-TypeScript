// lets define a type alias call Customer with a property birthday
type Customer = {
  birthday?: Date;
};

// Now lets define a function to get a customer from DB
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

// Now lets declare a variable and call getCustomer()
let customer = getCustomer(1);

// Now lets imagine we wanna print the customer birthday
/*
console.log(customer.birthday)

if there is no birthday we will get an error, to avoid the error we have to add if check like

if(customer !== null && customer !== undefined ){
  console.log(customer.birthday)
}
*/
// Simpler way to write the code
// (?) Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator, this is useful when dealing with arrays
// customer?.[0]

// Optional call operator
let log: any = (message: string) => console.log(message);
// If the value of log is null or undefined we can set optiona call function
log?.('a');
