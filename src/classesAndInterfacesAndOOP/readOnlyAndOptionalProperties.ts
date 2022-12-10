/*
  By prefix the property with readonly we can only set the property value in the constructor.
  And if we try to reset or re-assign it anywhere else we will get a compilation error.
  And by postfix a property with a question mark (?) we make it optional.
*/
class Account {
  readonly id: number;
  readonly owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposite(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid amount!');
    }

    this.balance += amount;
  }
}

let account = new Account(1, 'Raizo', 0);
