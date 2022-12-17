/* 
After the class name we type angle brackets and in between the brackets we type one or more generic type parameters.
*/

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pairs = new KeyValuePair<number, string>(1, 'a');
// or
let pairs2 = new KeyValuePair(1, 'a');  // If we dont supply generic type arguments - The compiler can infer the type of key and value
