/*
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Raizo',
  retire: (date: Date) => {
    console.log(date);
  },
}
*/
/*
This is the employee object that we have created at end of the previous section.

NOW there are 3 problems in this implimentation
i) if we want to create anothere employee object we have to repeat this structure/shape
   end of the we are duplicating code which is bad, we always confirm DRY (Don't Repeat Yourself)
  
ii) other employee might have other properties, in that case we dont have consistance shape, because we dont have a single place to define shape of object

iii) overall this code is bit hard to read 
*/

// This is where we use type aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Raizo',
  retire: (date: Date) => {
    console.log(date);
  },
};
