$(document).ready(function() {

  var account;
  var balanceStatement = "Your Current Balance is £"

  $("#Create").click(function() {
    account = new Account($('#firstName').val());
    $("#openAccount").remove();
    $(".instructions").text("Now you can credit your account");
    $("#depositContainer").css("display", "block");
  });

  $("#inputs").on("click", "#deposit", (function() {
    var amount = parseFloat($('#depositAmount').val());
    $("#depositContainer").remove();
    creditAccount(account, amount);
    $("#accountContainer").css("display", "block");
    $("#balance").text(balanceStatement + account.checkBalance());
    $(".instructions").text("Your Account:");
  }));

  $("#inputs").on("click", "#credit", (function() {
    var amount = parseFloat($('#creditAmount').val());
    creditAccount(account, amount);
    $("#creditAmount").val('');
    $("#balance").text(balanceStatement + account.checkBalance());
  }));

  $("#inputs").on("click", "#debit", (function() {
    var amount = parseFloat($('#debitAmount').val());
    debitAccount(account, amount);
    $("#debitAmount").val('');
    $("#balance").text(balanceStatement + account.checkBalance());
  }));

});
