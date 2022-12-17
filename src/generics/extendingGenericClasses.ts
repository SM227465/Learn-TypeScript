interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _object: T[] = [];

  add(obj: T): void {
    this._object.push(obj);
  }
}

let store1 = new Store<Product>();

// 1st Cenerio => Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store2 = new CompressibleStore<Product>();

// 2nd Cenerio => Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._object.find((obj) => obj.name === name);
  }
}

// 3rd Cenerio => Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
