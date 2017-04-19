'use strict';

(function(exports) {

  function debitAccount(account, amount) {
    var salt = Math.random();
    var pepper = salt / amount; //enables account to verify debit amount
    database.setPepper(pepper); //value stored in "secure database"
    account.debit(amount, salt); //call debit method on account passing amount & salt key
  }
  
  exports.debitAccount = debitAccount;
})(this);
