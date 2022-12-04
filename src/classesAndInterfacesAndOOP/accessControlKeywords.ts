/* In TypeScript we have 3 access modifiers
i) Public
ii) Private
iii) Protected

when we declare properties all are public by default so we dont have to use public keyword, its optional.

If we use the private keyword we can not access the property from outside of class, Only accessable within class
*/

class Account {
  readonly id: number;
  readonly owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid amount!');
    }

    this._balance += amount;
  }

  // private calculateTax() {}

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, 'Raizo', 0);

console.log(account.getBalance());
