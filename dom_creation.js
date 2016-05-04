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

function gameSettings() {
    var settings = {
        'player1': player1,
        'player2': player2,
        'currentPlayer': currentPlayer,
        'valueArray': gameBoard.valueArray,
        'number': gameBoard.number,
        'win': gameBoard.win,
        'exists': true
    };

    // settings.exists = (confirm("Do you want to save settings"));

    var storage = JSON.stringify(settings);
    window.localStorage.setItem('settings', storage);
}

function getSettings() {
    var settings = JSON.parse(window.localStorage.getItem('settings'));
    if(settings===null){
        settings={
            exists: false
        }
    }
    return settings;
}