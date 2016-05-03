/**
 * Created by ashwi on 5/3/2016.
 */

/**
 * dom creation, creating 3 game board for tic tac toe game
 *
 * in html there are 3 dives for each board and inside it we are creating cells in DOM
* */

var first_row =$("<div>").addClass('row col-xs-12 first_row');
var second_row =$("<div>").addClass('row col-xs-12 second_row');
var third_row =$("<div>").addClass('row col-xs-12 third_row');
$('.box3').append(first_row,second_row,third_row);

gameBoard.prototype.createDOMobject = function(numberBox){

}


var game_cell_1_div = $("<div>",{           //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '0',
    attr:'square'
});
var game_cell_2_div = $("<div>",{           //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '1',
    attr:'square'
});
var game_cell_3_div = $("<div>",{       //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '2',
    attr:'square'
});
var game_cell_4_div = $("<div>",{       //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '3',
    attr:'square'
});
var game_cell_5_div = $("<div>",{       //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '4',
    attr:'square'
});
var game_cell_6_div = $("<div>",{           //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '5',
    attr:'square'
});
var game_cell_7_div = $("<div>",{           //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '6',
    attr:'square'
});
var game_cell_8_div = $("<div>",{           //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '7',
    attr:'square'
});
var game_cell_9_div = $("<div>",{           //created game cell 1 div
    class:'game-cell col-xs-4',
    id: '8',
    attr:'square'
});
first_row.append(game_cell_1_div,game_cell_2_div,game_cell_3_div);
second_row.append(game_cell_4_div,game_cell_5_div,game_cell_6_div);
third_row.append(game_cell_7_div,game_cell_8_div,game_cell_9_div);