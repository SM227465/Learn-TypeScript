/*
getters is a method inide a class that is used to getting the value of a property, 
setters is a method inide a class that is used to set the value of a property,
*/
class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid amount!');
    }

    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  // set balance(value: number) {
  //   if (value < 0) {
  //     throw new Error('Invalid value!');
  //   }

  //   this._balance = value;
  // }
}
