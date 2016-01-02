$(document).ready(function() {
        $('#itemForm').submit(function(e) {
        e.preventDefault();
        // declared variables
        var counter = $('#displayList tbody').children().length;
        var item = $('#item').val();
        var quantity = $('#quantity').val();
        var cost = $('#cost').val();
        var tr = $('<tr id=' + counter + '>').append($('<td>').text(item)).append($('<td>').text(quantity)).append($('<td>').text(cost));
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
        // resetting input field values
        $('#item').val('');
        $('#quantity').val('');
        $('#cost').val('');
    });
});