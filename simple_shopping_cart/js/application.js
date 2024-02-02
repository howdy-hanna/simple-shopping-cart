// calculate cost per item
$(document).ready(function() {

  //update sub total on input change
  $('tbody').on('change', '.qty input', function() {
    // calculat subtotal and updat the corresponding .cost <td> with the new number.
    var row = $(this).closest('tr');
    var qty = parseFloat($(this).val());
    var cost = parseFloat(row.find('td.price').text());
    var subtotal = qty * cost;

    row.find('td.cost').text(subtotal);
    updateCartTotal();
  });

  var updateCartTotal = function() {
    var cartTotal = 0;
    $('tbody tr').each(function(i, ele) {
      cartTotal += parseFloat($(ele).find('td.cost').text()) || 0;
    });

    $('.cart-total span').html(cartTotal);
  }

  //add item to cart
  $('#addItem').on('submit', function(event) {
    event.preventDefault();
    var name = $(this).children('[name=name]').val();
    var price = $(this).children('[name=price]').val();
    var qty = $(this).children('[name=qty]').val();

    $('tbody').append('<tr>' +
      '<td class="item">' + name + '</td>' +
      '<td class="price"><input type="number" value="' + price + '" /></td>' +
      '<td class="qty"><input type="number" value="' + quantity + '" /></td>' +
      '<td class="cost"></td>' +
      '<td><button class="btn btn-light btn-sm remove">remove</button></td>' +
      '</tr>');
  });


  //remove item from cart
  $('.btn.remove').on('click', function(event) {
    $(this).closest('tr').remove();
    //add part to update total cost 
  });

});