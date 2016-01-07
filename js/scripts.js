$(document).ready(function() {
    $('#item').focus();
    $('#itemForm').submit(function(e) {
        e.preventDefault();
        // declared variables
        var counter = $('tbody').children().length;
        var item = $('#item').val();
        var quantity = $('#quantity').val();
        var cost = $('#cost').val();
        var done = $('<td><input type="checkbox" class="done" name="done" value="Done"></td>');
        var remove = $('<td><input type="checkbox" class="delete" name="delete" value="Delete"></td>');
        var tr = $('<tr id=tr' + counter + '>').append($('<td>').text(item)).append($('<td>').text(quantity)).append($('<td>').text(cost)).append(done).append(remove);
        var fixHelper = function(e, ui) {
            ui.children().each(function() {
                $(this).width($(this).width());
            });
            return ui;
        };
        $('tbody').append(tr);
        $('tbody').sortable({
            helper: fixHelper,
            axis: 'y',
            cursor: 'move',
        }).droppable({
            drop: function(event, ui) {
                ui.draggable;
            }
        });
        resetInputs();
        updateSubtotal();
    });
    $('#resetButton').click(function(e) {
        e.preventDefault();
        resetInputs();
    });
    // moves item to <tfoot> when marked as done, returns to main list when unchecked
    $('#markDoneButton').on('click', function() {
        $('.done').each(function() {
            if ($(this).prop('checked')) {
                $(this).closest('tr').addClass('move').detach().appendTo('tfoot');
            }
        });
    });
    // delete item from list completely
    $('#removeButton').on('click', function() {
        $('.delete').each(function() {
            if ($(this).prop('checked')){
                $(this).closest('tr').remove();
            }
        });
        updateSubtotal();
    });
});
function resetInputs() {
    // clearing input field values
    $('#item').val('').focus();
    $('#quantity').val('');
    $('#cost').val('');
    
}
function updateSubtotal() {
    // keeps track of total cost from the list
    var subtotal = 0;
    $('tbody tr').each(function() {
        var item = $(this);
        var price = parseFloat(item.children()[2].innerHTML);
        subtotal += price;
    });
    $('#subTotal').html('<p>Total: $' + subtotal.toFixed(2) + '</p>');
}
