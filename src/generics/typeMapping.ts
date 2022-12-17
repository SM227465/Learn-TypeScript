// Sometime we need to mess a type on another type this is call type mapping.

interface Product4 {
  name: string,
  price: number
}
// Here we have product interface with two properties, what if somewhere else in our application we need a product with readonly property properties, One option is to duplicate the interface call the the 2nd one ReadOnlyProduct.

/*
interface ReadOnlyProduct{
  readonly name: string,
  readonly price: number
}
*/

// Better soluation => type mapping
type ReadOnlyProduct = {
  readonly [Property in keyof Product4]:  Product[Property]
}

let product: ReadOnlyProduct = {name: 'a', price: 1}

// Not possible because of readonly
// product.name = 'b'

// we can also use generic type
type ReadOnly<T> = {
  readonly [Property in keyof T]:  T[Property]
}

let product2: ReadOnly<Product4> = {name: 'a', price: 1}

// Using the same technic we can create a product app with optionl property
type Optional<T> = {
  [K in keyof T]?: T[K]
}

// Create nullable
type Nullable<T> = {
  [K in keyof T]?: T[K] | null
}