"use strict"

class Account {
  constructor(name, balance) {
    this.name = name;
    this.total = balance;
  }

  get balance() {
    return this.total;
  }

  deductMontlyFee(fee){
     this.total = this.total - fee;
     return this.name + ' remaining balance is '+ this.total;
  }
}

class SavingsAccount extends Account {
  addInterest(percentage) {
    this.total += this.total * percentage;
  }
}

var monica = new Account("Monica Geller", 400);
var rachel = new SavingsAccount('Rachel Green', 1400);

console.log(rachel.deductMontlyFee(100));
console.log(monica.deductMontlyFee(100));
rachel.addInterest(.1);
console.log(rachel.balance);
