'use strict';

function Account(id) {
  var name = id; //declaring name & balance within local scope
  var balance = 0;

  this.checkBalance = function() { //getter to display balance
    return balance.toFixed(2);
  }

  this.credit = function(amount, salt) { //setter with simple security to credit balance
    if ( database.getPepper() * amount === salt ) { //check amount & salt values match security key stored in "secure database"
      balance += amount;
    }
  }

  this.debit = function(amount, salt) { //setter with simple security to debit balance
    if (balance - amount >= database.getOverdraftLimit().toFixed(2) && //check overdraft limit
       ( database.getPepper() * amount === salt ))  { //check amount & salt values match security key stored in "secure database"
      balance -= amount;
    }
  }

  this.name = function () { //getter to display name
    return name;
  }

}
