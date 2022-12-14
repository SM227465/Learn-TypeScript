// Sometime we need to pass arguments to our decorators, So lets see how we can create parameterized decorators

type ComponentOptions = {
  selector: string;
};

// Decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called!');
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the dom.');
    };
  };
}

@Component({ selector: '#my-profile' })
class ProfileComponent {}
