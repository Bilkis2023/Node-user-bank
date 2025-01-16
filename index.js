// Update a miniBank constructor function with methods and properties 👍
//Define a property named `statement`. Assign an initial value of an array containing the `balance` parameter passed to the constructor..
function miniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  //add a `setBalance` function. This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`
  this.getBalance = () => {
    return this.balance;
  };

  this.setBalance = (value) => {
    this.balance = value;
  };

  //Write an update Statement function that takes an number and push() it to the statement array

  this.updateStatement = (value) => {
    this.statement.push(value);
  };
  //Write an getStatement function that return a `statement` property
  this.getStatement = () => {
    return this.statement.slice(0);
  };

  //Write a `printStatement` function that prints each element in the `statement` array on it own line.
  this.printStatement = () => {
    const statement = this.getStatement();
    for (let i = 0; i < statement.length; i++) {
      console.log(`${i + 1}.${statement[i]}`);
    }
  };
  //Write a deposit function that takes a value and performs the followin:
  // - Calls a updateStatement to record the deposite transaction.
  // - Calls a setBalance to update the balance property
  this.deposit = (value) => {
    if (typeof value !== number || value <= 0) {
      throw new Error("`value` must be a positive number!");
    }

    const newBalance = this.getBalance() + value;

    this.updateStatement(newBalance);
    this.setBalance(newBalance);
    console.log(`deposited ${value}!`);
  };
}
