// In TypeScript we have 3 access modifiers
// i) Public
// ii) Private
// iii) Protected

// class Account {
//   readonly id: number;
//   readonly owner: string;
//   private _balance: number;
//   nickname?: string;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this._balance = balance;
//   }

//   deposite(amount: number): void {
//     if (amount <= 0) {
//       throw new Error('Invalid amount!');
//     }

//     this._balance += amount;
//   }
// }

// let account = new Account(1, 'Raizo', 0);
