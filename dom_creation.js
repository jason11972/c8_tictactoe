/**
 * Created by ashwi on 5/3/2016.
 */

/**
 * dom creation, creating 3 game board for tic tac toe game
 *
 * in html there are 3 dives for each board and inside it we are creating cells in DOM
* */
$(document).ready(function(){
   game_board(4);
});
function game_board(character) {
    for(var i =0; i< character*character; i++){
        var card = $("<div>").addClass('card').css({'width': (100/character) + "%", 'height': (100/character) + "%"});
        $(".game_board").append(card);
    }
}
