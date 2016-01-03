$(document).ready(function() {
    $('#item').focus();
    $('#itemForm').submit(function(e) {
        e.preventDefault();
        // declared variables
        var counter = $('#displayList tbody').children().length;
        var item = $('#item').val();
        var quantity = $('#quantity').val();
        var cost = $('#cost').val();
        var done = $('<td><input type=\"checkbox\" id=\"done\" name=\"done\" value=\"Done\"></td>');
        var remove = $('<td><input type=\"checkbox\" id=\"delete\" name=\"delete\" value=\"Delete\"></td>');
        var tr = $('<tr id=' + counter + '>').append($('<td>').text(item)).append($('<td>').text(quantity)).append($('<td>').text(cost)).append(done).append(remove);
        var fixHelper = function(e, ui) {
            ui.children().each(function() {
                $(this).width($(this).width());
            });
            return ui;
        };
        $('#displayList tbody').append(tr);
        $('tbody').sortable({
            helper: fixHelper,
            axis: 'y',
            cursor: 'move',
        }).droppable({
            drop: function(event, ui) {
                ui.draggable;
            }
        });
        // clearing input field values
        $('#item').val('').focus();
        $('#quantity').val('');
        $('#cost').val('');
    });
    $('#reset').click(function(e) {
        e.preventDefault();
        // clearing input field values
        $('#item').val('').focus();
        $('#quantity').val('');
        $('#cost').val('');
    });
    // moves item to <tfoot> when marked as done, returns to main list when unchecked
    $('#markDone').click(function(e) {
        $('#done').change(function() {
            if (this.checked) {
                $('tfoot').append($(this).parent()); // so far, this is doing something, but not what I want.  it is creating a new row, but it doesn't seem to be in <tfoot> and is empty of values.  the original stays the same in <tbody>
            }
        });
    });
    // trying to delete item from list completely, so far something is happening, but it is the same as markDone above
    $('#remove').click(function(e) {
        if (this.checked) {
            $(this).parentsUntil('td', 'tr').remove();
        }
    });
});
    