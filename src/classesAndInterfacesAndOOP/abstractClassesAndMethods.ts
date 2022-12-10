/*
Abstract class is like uncoocked meal, its not ready. another class have to extend it.

Abstract method can only exists inside an abstract class.
*/

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering a circle...');
  }
}

// If you want stop us from being able to create an instance of the Shape class we mark it as abstract
