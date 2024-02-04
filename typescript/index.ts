// BankAccount
// Depositing
// Withdrawing
// Balance - hidden - Encapsulated
// bank.balance = 200

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter to get balance of the bank account

  public get balance(): number {
    return this._balance;
  }

  // Method to deposit money
  public deposit(amount: number): void {
    if (amount < 0) {
      console.log('Invalid deposit amount');

      return;
    }

    this._balance += amount;
  }

  // Method to withdraw money
  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log('Invalid withdraw amount');

      return;
    }

    const newBalance = this._balance - amount;

    if (newBalance < 0) {
      console.log('Insuffient Funds');

      return;
    }

    this._balance -= amount;
  }
}

const myBankAccount = new BankAccount(1000);

myBankAccount.deposit(500);
myBankAccount.withdraw(200);

console.log("Current balance", myBankAccount.balance);
