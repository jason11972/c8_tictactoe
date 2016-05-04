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


//TODO I hard coded the modals. Since they won't be changing it was simpler to style them

function win_modal(winner) {                //win modal function, passed one parameter
    // $("#messageModal .modal-body").fadeIn().html("<h4>" + message + "</h4><br>").addClass('text');//modal showing choose game option message
    // $('.modal-footer').html("<h4></h4>");        //modal footer message
    // $("#messageModal").modal('show');   //showing modal

    $('#winModal h4').html(winner + ' wins the game!');
    $("#winModal").modal("show");
}



function choose_game_options() {
    //game area is hidden until user picks game bord size
    // $('.game_board').hide();
    //this modal will come up and user can choose game options and input their name
    // $('#settingsModal .modal-body').fadeIn().html('<h4></h4><br>').addClass('text');
    //showing modal
    $('#settingsModal').modal('show');

/*

    //set modal message
    var message = $('<h4>').html('Choose from the following options');

    $('.modal-header').append(message);

    //set up player name inputs
    var playerNames = $("<div>").addClass('option');
    var player1 = $('<input>').attr({'type': 'text', 'name': 'player1', 'placeholder': 'Player 1'}).addClass('player' +
        ' player1');
    var player2 = $('<input>').attr({'type': 'text', 'name': 'player2', 'placeholder': 'Player 2'}).addClass('player' +
        ' player2');
    //player name labels
    var player1_label = $('<label>').html('<p>Player 1 name:</p>');
    var player2_label = $('<label>').html('<p>Player 2 name:</p>');

    var br = $('<br>');

    //combine player names into one div
    player1_label.append(player1);
    player2_label.append(player2);
    playerNames.append(player1_label, br, br, player2_label);

    //board size options
    var boardOptions = $('<div>').addClass('option');
    var three = $("<input>").attr({'type': 'radio', 'name': 'game-size', 'id': 'three', 'value': 3});
    var four = $("<input>").attr({'type': 'radio', 'name': 'game-size', 'id': 'four', 'value': 4});
    var five = $("<input>").attr({'type': 'radio', 'name': 'game-size', 'id': 'five', 'value': 5});
    var six = $("<input>").attr({'type': 'radio', 'name': 'game-size', 'id': 'six', 'value': 6});
    //board size labels
    var threeLabel = $('<label>').html('<p>3x3 Game</p>').attr('for', 'three').css('display', 'block');
    var fourLabel = $('<label>').html('<p>4x4 Game</p>').attr('for', 'four').css('display', 'block');
    var fiveLabel = $('<label>').html('<p>5x5 Game</p>').attr('for', 'five').css('display', 'block');
    var sixLabel = $('<label>').html('<p>6x6 Game</p>').attr('for', 'six').css('display', 'block');

    //combine all board options
    threeLabel.append(three, br);
    fourLabel.append(four, br);
    fiveLabel.append(five, br);
    sixLabel.append(six, br);
    boardOptions.append(threeLabel, fourLabel, fiveLabel, sixLabel);

    //win condition options
    var winOptions = $("<div>").addClass('option');
    var winThree = $("<input>").attr({'type': 'radio', 'name': 'to-win', 'id': 'win-three', 'value': 3});
    var winFour = $("<input>").attr({'type': 'radio', 'name': 'to-win', 'id': 'win-four', 'value': 4});
    var winFive = $("<input>").attr({'type': 'radio', 'name': 'to-win', 'id': 'win-five', 'value': 5});
    var winSix = $("<input>").attr({'type': 'radio', 'name': 'to-win', 'id': 'win-six', 'value': 6});
    //win condition labels
    var winThreeLabel = $('<label>').html('<p>Match 3 to Win</p>').attr('for', 'win-three');
    var winFourLabel = $('<label>').html('<p>Match 4 to Win</p>').attr('for', 'win-four');
    var winFiveLabel = $('<label>').html('<p>Match 5 to Win</p>').attr('for', 'win-five');
    var winSixLabel = $('<label>').html('<p>Match 6 to Win</p>').attr('for', 'win-six');

    //combine all win condition options
    winThreeLabel.append(winThree);
    winFourLabel.append(winFour);
    winFiveLabel.append(winFive);
    winSixLabel.append(winSix);
    winOptions.append(winThreeLabel, br, winFourLabel, br, winFiveLabel, br, winSixLabel);

    //button
    var button = $('<button>').attr({'type': 'button', 'id': 'new-game'});
    $('.modal-body').append(playerNames, boardOptions, winOptions, button);

*/
}