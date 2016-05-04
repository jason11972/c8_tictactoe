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

function win_modal(message){                //win modal function, passed one parameter
    $("#messageModal .modal-body").fadeIn().html("<h4>"+message+"</h4><br>").addClass('text');//modal showing choose game option message
    $('.modal-footer').html("<h4></h4>");        //modal footer message
    $("#messageModal").modal('show');   //showing modal
}

function choose_game_options(){
    $('.game_board').hide();        //game area is hidden until user pick game bord size
    $('#messageModal .modal-body').fadeIn().html('<h4></h4><br>').addClass('text');  //this model will comes up and user can choose game options and input there name
    $('#messageModal').modal('show');       //showing modal
    var player_message = $('<h4>').html('Choose following things ');
    var player1 =$('<input>').attr({'type':'text','name':'player1'}).addClass('player player1');
    var player2 =$('<input>').attr({'type':'text','name':'player2'}).addClass('player player2');

    var player1_label = $('<label>').html('<p>player 1 name:</p>');
    var player2_label = $('<label>').html('<p>player 2 name:</p>');
    var brake = $('<br>');
    $('.modal-header').append(player_message);
    $('.modal-body').append(player1_label,brake ,player2_label);
    player1_label.append(player1);
    player2_label.append(player2);

    var game_one = $("<input>").attr({'type':'radio','name':'option'}).addClass('game1');    //game1 radio button created
    var game_two = $("<input>").attr({'type':'radio','name':'option'}).addClass('game2');    //game2 radio button created
    var game_three = $("<input>").attr({'type':'radio','name':'option'}).addClass('game3');    //game2 radio button created

    var game1_label = $('<label>').html('<p>game 1 </p><h5>(regular 9 box tic tac toe game)</h5>');        //game1 label created
    var brake = $('<br>');                                                                           //brake tag created
    var game2_label = $('<label>').html('<p>game 2 </p><h5>(16 box tic tac tow game)</h5>');        //game2 label created
    var game3_label = $('<label>').html('<p>game 3 </p><h5>(36 box tic tac tow)</h5>');        //game1 label created
    $(".modal-body").append(game1_label,brake,game2_label,brake,game3_label);         //label and brake tag append to modal body
    game1_label.append(game_one);                                   //radio button append to label 1
    game2_label.append(game_two);                                   //radio button append to label 2
    game3_label.append(game_three);                                 //radio button append to label 3


}