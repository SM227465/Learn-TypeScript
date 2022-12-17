/*
function wrapInArray<T>(value: T) {
  return [value];
}

const numbers = wrapInArray(1)


class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value];
  } 
}

let utils = new ArrayUtils()

let numbers = utils.wrapInArray(1)
*/

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers = ArrayUtils.wrapInArray(1);
