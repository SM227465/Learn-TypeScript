/*
when we few objects from a module so importing them one by one can be a bit long.
Import statement will be long.
 */

// So we use wildcard import 
import * as Shapes from './shapes';

// Insted of one by one import like
import { Circle, Square } from './shapes'

let circle = new Shapes.Circle(1)
let square = new Shapes.Square(2)

console.log(circle.radius)
console.log(square.width)