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

this.updateStatement = (value)=>{
    this.statement.push(value);
}









}
