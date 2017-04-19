'use strict';

(function(exports) {

  function creditAccount(account, amount) {
    var salt = Math.random();
    var pepper = salt / amount; //enables account to verify credit amount
    database.setPepper(pepper); //value stored in "secure database"
    account.credit(amount, salt); //call credit method on account passing amount & salt key
  }
  exports.creditAccount = creditAccount;
})(this);
