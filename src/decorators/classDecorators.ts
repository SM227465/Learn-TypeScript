// Lets see how we can create a decorator and apply to our classes - decorators is just a function that gets call by JavaScript runtime
/*
 Lets define a function call component, then pass a parameter and its types depending where we gonna use it, If we wanna use it in class we should have a single parameter that represent constructor function. the matter is type if type is Function the runtime assume that we are going to apply this on a class 
*/
function Component(constructor: Function) {
  // In this function we have a chance to modify or enhance our class, so we can add new properties or methods, we can change existing methods, we can even delete properties or methods.
  console.log('Component decorator called!');

  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log('Inserting the component in the dom.');
  };
}

@Component
class ProfileComponent {}

// We can also solve this probllem using inheritance, So instead of using decorator we could create a base class like

class Component2 {
  insertInDOM() {}
}
// Another way to solve
// class ProfileComponent extends Component2 {}
