'use strict';

describe('account', function(){

  var account

  beforeEach(function () {
    account = new Account("Test Account");
  });


  it('starts with a balance of £0.00', function() {
    expect(account.checkBalance()).toBeCloseTo(0.00);
  });

  it('can be credited', function() {
    creditAccount(account, 10);
    expect(account.checkBalance()).toBeCloseTo(10.00);
  });

  it('can be debited', function() {
    debitAccount(account, 20)
    expect(account.checkBalance()).toBeCloseTo(-20.00);
  });

  it('has a name', function() {
    expect(account.name()).toEqual("Test Account");
  });

  it('has an overdraft limit of £150', function() {
    debitAccount(account, 200)
    expect(account.checkBalance()).toBeCloseTo(0.00);
  })
});
