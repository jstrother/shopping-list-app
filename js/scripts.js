$(document).ready(function() {
        $('#itemForm').submit(function(e) {
        e.preventDefault();
        // declared variables
        var counter = $('#displayList tbody').children().length;
        var item = $('#item').val();
        var quantity = $('#quantity').val();
        var cost = $('#cost').val();
        var done = $('<td><input type=\"checkbox\" id=\"done\" name=\"done\" value=\"Done\"></td>');
        var tr = $('<tr id=' + counter + '>').append($('<td>').text(item)).append($('<td>').text(quantity)).append($('<td>').text(cost)).append(done);
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
    // so, this doesn't work.  try again
    $('#itemForm').reset(function(e) {
        e.preventDefault();
        // resetting input field values
        $('#item').val('');
        $('#quantity').val('');
        $('#cost').val('');       
    });
    checkDone();
});
// I think I'm on the right track with this.  Trying to filter the <tr> to the <tfooter> to get it out of the main list. If unchecked, it will go back to <tbody>.
function checkDone() {
    if ($('#done').checked) {
        console.log('checked!');
    }
}