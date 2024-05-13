class BankAccount {
  constructor(name, currBal) {
    this.name = name;
    this.currBal = currBal;
  }

  deposit(depAmt) {
    if (depAmt > 0) {
      this.currBal += depAmt;
      console.log(`Deposited Rs.${depAmt}. New Balance is Rs.${this.currBal}`);
    } else {
      console.log("Invalid deposit amount. Please enter a positve number");
    }
  }

  withdraw(wdhAmt) {
    let balance = this.currBal;
    if (wdhAmt <= 0) {
      console.log("Invalid withdraw amount. Please enter a positve number");
      return;
    }
    if (balance < wdhAmt) {
      console.log("Insuffiecient funds for withdrawal");
      return;
    }

    this.currBal -= wdhAmt;
    console.log(`Withdrew Rs.${wdhAmt}. New Balance is Rs.${this.currBal}`);
  }

  checkBalance() {
    console.log(`Account balance for ${this.name}: ${this.currBal}`);
  }
}

const validAccount = new BankAccount('John Doe', 1000);
console.log(validAccount.name); // Expected output: 'John Doe'
console.log(validAccount.currBal); // Expected output: 1000

// Test case 2: Deposit a valid amount
validAccount.deposit(500);
// Expected output: 'Deposited Rs.500. New Balance is Rs.1500'
console.log(validAccount.currBal); // Expected output: 1500

// Test case 3: Deposit an invalid amount (zero or negative)
validAccount.deposit(0);
// Expected output: 'Invalid deposit amount. Please enter a positive number'
validAccount.deposit(-100);
// Expected output: 'Invalid deposit amount. Please enter a positive number'
console.log(validAccount.currBal); // Expected output: 1500 (balance should not change)

// Test case 4: Withdraw a valid amount
validAccount.withdraw(300);
// Expected output: 'Withdrew Rs.300. New Balance is Rs.1200'
console.log(validAccount.currBal); // Expected output: 1200

// Test case 5: Withdraw an invalid amount (zero or negative)
validAccount.withdraw(0);
// Expected output: 'Invalid withdraw amount. Please enter a positive number'
validAccount.withdraw(-200);
// Expected output: 'Invalid withdraw amount. Please enter a positive number'
console.log(validAccount.currBal); // Expected output: 1200 (balance should not change)

// Test case 6: Withdraw an amount greater than the balance
validAccount.withdraw(1500);
// Expected output: 'Insufficient funds for withdrawal'
console.log(validAccount.currBal); // Expected output: 1200 (balance should not change)

// Test case 7: Check balance
validAccount.checkBalance();
