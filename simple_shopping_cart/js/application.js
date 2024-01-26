$(document).ready(function () {
  $('tbody tr').each(function (i, ele) {
    var itemPrice = parseFloat($(ele).children('.price').text());
    var itemQty = parseFloat($(ele).children('.qty').text());

    var totalCost = itemPrice * itemQty;
    $(ele).children('.cost').html(totalCost);
  });
});
