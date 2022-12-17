function echo<T extends number | string>(value: T): T {
  return value;
}

echo(1);
echo('1');
/*-------------------------------------------------------*/
function echo2<T extends { name: string }>(value: T): T {
  return value;
}

echo2({ name: 'a' });
/*---------------------------------------------------------*/
interface Person {
  name: string;
}

function echo3<T extends Person>(value: T): T {
  return value;
}

echo3({ name: 'a' });
/*---------------------------------------------------*/
class Person3 {
  constructor(public name: string) {}
}

class Customer1 extends Person3 {}

function echo4<T extends Person3>(value: T): T {
  return value;
}

echo4(new Customer1('a'));
