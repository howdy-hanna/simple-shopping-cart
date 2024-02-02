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

    $('.cart-total span').html(cartTotal.toFixed(2));
  }

  //add item to cart
  $('#addItem').on('submit', function (event) {
    event.preventDefault();
    var name = $(this).find('[name=name]').val();
    var cost = parseFloat($(this).find('[name=price]').val());
    var qty = parseFloat($(this).find('[name=qty]').val());

    var subtotal = qty * cost;
    
    $('tbody').append('<tr>' +
      '<td class="item">' + name + '</td>' +
      '<td class="price"><input type="number" value="' + cost + '" /></td>' +
      '<td class="qty"><input type="number" value="' + qty + '" /></td>' +
      '<td class="cost">' + subtotal.toFixed(2) + '</td>' +
      '<td><button class="btn btn-light btn remove">Remove</button></td>' +
      '</tr>');
    
    updateCartTotal(); 
    
      $(this).find('[name=name]').val('');
      $(this).find('[name=price]').val('');
      $(this).find('[name=qty]').val('');
  });


  //remove item from cart
   $(document).on('click', '.btn.remove', function(event) {
    $(this).closest('tr').remove();
    //add part to update total cost 
    updateCartTotal();
  });

    var timeout;
    $(document).on('input', 'tr input', function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        updateCartTotal();
      }, 1000);
  });

});
