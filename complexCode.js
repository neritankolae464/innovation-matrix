/* filename: complexCode.js */

// This code simulates a banking application with advanced features

// Define a BankAccount class
class BankAccount {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: 'deposit',
      amount: amount,
      date: new Date()
    });
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        type: 'withdraw',
        amount: amount,
        date: new Date()
      });
    } else {
      throw new Error('Insufficient funds');
    }
  }

  getStatement() {
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Balance: ${this.balance}`);

    console.log('Transactions:');
    this.transactions.forEach((transaction) => {
      console.log(`- Type: ${transaction.type}`);
      console.log(`  Amount: ${transaction.amount}`);
      console.log(`  Date: ${transaction.date}`);
    });
  }
}

// Create two bank accounts
const account1 = new BankAccount('1234567890', 'John Doe', 1000);
const account2 = new BankAccount('0987654321', 'Jane Smith', 5000);

// Perform transactions on the accounts
account1.deposit(500);
account1.withdraw(200);
account2.deposit(1000);
account2.withdraw(1500);

// Get statements for the accounts
console.log('Account 1 Statement:');
account1.getStatement();

console.log('Account 2 Statement:');
account2.getStatement();

// This code demonstrates advanced banking operations with multiple accounts and transaction history.