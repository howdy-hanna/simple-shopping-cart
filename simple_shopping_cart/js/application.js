// calculate cost per item
$(document).ready(function () {

//find cart cost
$('tbody').on('change', 'input.qty', function () {
  // calculat subtotal and updat the corresponding .cost <td> with the new number.
  $('tbody tr').each(function (i, ele) {
    var itemPrice = parseFloat($(ele).children('.price').text());
    var itemQty = parseFloat($(ele).find('.qty input').val());

    // total cost is price times  qty per item
    var totalCost = itemPrice * itemQty;
    $(ele).children('.cost').html(totalCost);

    return totalCost;
  });
})


  //remove item from cart
$('.btn.remove').on('click', function (event) {
  $(this).closest('tr').remove();
  //add part to update total cost 
});

});

    
//find cart cost
var sum = function (acc, x) { return acc + x; };

var totalCost = [];




//add item to cart


//update cart when qty changes






