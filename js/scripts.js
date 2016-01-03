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
    $('#done').change(function() {
        if (this.checked) {
            $('tfoot').append($(this).parent().parent());
        } else {
            $('tbody').append($(this).parent().parent());
        }
    });
});
    