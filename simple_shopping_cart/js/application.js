// calculate cost per item
$(document).ready(function () {
  $('tbody tr').each(function (i, ele) {
    var itemPrice = parseFloat($(ele).children('.price').text());
    var itemQty = parseFloat($(ele).children('.qty').text());

    // total cost is price times  qty per item
    var totalCost = itemPrice * itemQty;
    $(ele).children('.cost').html(totalCost);
  });
});

    



//remove item from cart


//add item to cart


//update cart when qty changes






