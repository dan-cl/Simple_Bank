'use strict';

(function(exports) {

  function Database(){
    var overdraftLimit = -150;
    var pepper = Math.random();

    this.getOverdraftLimit = function() {
      return overdraftLimit;
    }

    this.getPepper = function() {
      return pepper;
      pepper = Math.random();
    }

    this.setPepper = function(value) {
      pepper = value;
    }
  }

  var database = new Database();


exports.database = database;
})(this);
