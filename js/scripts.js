$(document).ready(function()  {
  $("form#expenses").submit(function(event) {
    event.preventDefault();

    var userDescription = $("input#description").val();
                          $("input#description").val("");
    var userAmount = parseInt($("input#amount").val());
                              $("input#amount").val("");

    var expenseDetail = {purchase: userDescription, amount: userAmount }


    $("tbody#user-input").append("<tr><td>" + expenseDetail.purchase + "</td><td>" + "$" + expenseDetail.amount + "</td></tr>");

  });
});
