/**
 * Created by ashwi on 5/3/2016.
 */

/**
 * dom creation, creating 3 game board for tic tac toe game
 *
 * in html there are 3 dives for each board and inside it we are creating cells in DOM
 * */

TicTacToe.prototype.domObj = function (id) {
    var square = $("<div>").addClass('square').css({
        'width': (100 / this.number) + "%",
        'height': (100 / this.number) + "%"
    }).attr("square", id);
    $(".game_board").append(square);
};

function win_modal(winner) {                //win modal function, passed one parameter
    $('#winModal h4').html(winner);
    $("#winModal").modal("show");
}

function choose_game_options() {

    $('#settingsModal').modal('show');
}