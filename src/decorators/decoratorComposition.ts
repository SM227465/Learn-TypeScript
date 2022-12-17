// We can also apply multiple decorators toa class or its members, so lets define another decoratoe call pipe
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

function Pipe(constructor: Function) {
  console.log('Pipe decorator called!');
  constructor.prototype.pipe = true;
}

@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}

/* 
Decorator call order or sequence
1st -> Pipe decorator called!
then -> Component decorator called!

decoratora are applied in reverse order
first pipe decorator called and then component

idea behind comes from the math. lets we have expression in math 
f(g(x)) here first g(x) evaluate then result is pass to f()
*/
