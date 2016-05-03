/**
 * Created by jar4677 on 5/3/16.
 */

//DOCUMENT READY FOR EVENT HANDLERS
$(document).ready(function () {
    var gameBoard = new TicTacToe(4, 3);
    gameBoard.buildBoard();

    player1 = new Player("Jon", "x");
    player2 = new Player("Jason", "o");

    //hard coding creating a player, make dynamic
    currentPlayer = player1;

    $("#X").click(function () {
        console.log('X clicked');
       //current player value becomes 'x'
        currentPlayer.value = 'x';
        console.log(currentPlayer);
        $(".game-area").addClass('x').removeClass('o');
    });

    $("#O").click(function () {
        //current player value becomes 'o'
        console.log('O clicked');
        currentPlayer.value = 'o';
        console.log(currentPlayer);
        $(".game-area").addClass('o').removeClass('x');
    });

    $("#game-area").on("click", "div.square", function () {
    // $(".square").on("click", function () {
        var id = $(this).attr("square");
        var value = currentPlayer.value;

        //set value to square
        $(this).text(value);

        //switch players
        if(currentPlayer == player1){
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }

        gameBoard.clicked(id, value);

    });
});



function TicTacToe(number, win) {
    this.number = number;
    this.win = win;
    this.sqArray = [];
    this.valueArray = [];
    this.squaresFilled = 0;


    //Method To Build Board
    this.buildBoard = function () {
        for (var i = 0; i < this.number; i++) {
            for (var j = 0; j < this.number; j++) {
                this.sqArray.push('' + i + j);
            }
        }

        for (var n = 0; n < this.sqArray.length; n++) {
            this.valueArray.push(null);
        }

        for (var k = 0; k < this.sqArray.length; k++){
            this.domObj(this.sqArray[k]);
        }

    };

    //Method To Call on Click
    this.clicked = function (id, value) {
        //takes the string id and set an x and y variable from it
        var x = parseInt(id[0]);
        var y = parseInt(id[1]);

        if (this.valueArray[this.sqArray.indexOf(id)] == null) {
            this.squaresFilled++;
        }

        this.valueArray[this.sqArray.indexOf(id)] = value;

        //if enough squares are filled, check for win
        if (this.squaresFilled >= this.win) {
            if (
                this.checkWin(this.rowWin(x), value) ||
                this.checkWin(this.colWin(y), value) ||
                this.checkWin(this.leftDWin(x, y), value) ||
                this.checkWin(this.rightDWin(x, y), value)
            ) {
                console.log('win');
            }
        }
    };

    //Method To Generate Row Win Condition
    this.rowWin = function (x) {
        var row = [];
        for (var r = 0; r < this.number; r++) {
            row.push('' + x + r);
        }
        return row;
    };

    //Method To Generate Column Win Condition
    this.colWin = function (y) {
        var col = [];
        for (var c = 0; c < this.number; c++) {
            col.push('' + c + y);
        }
        return col;
    };

    //Method To Generate Left Diagonal Win Condition
    this.leftDWin = function (x, y) {
        var leftWin = [];
        //find top left square
        if (x - y >= 0) {
            x = x - y;
            y = 0;
        } else {
            y = Math.abs(x - y);
            x = 0;
        }
        //staring there, loop until bottom right
        while (x < this.number && y < this.number) {
            leftWin.push('' + x + y);
            x++;
            y++;
        }
        return leftWin;
    };

    //Method To Generate Right Diagonal Win Condition
    this.rightDWin = function (x, y) {
        var rightWin = [];
        while (x - 1 >= 0 && y + 1 < this.number - 1) {
            x--;
            y++;
        }
        while (x < this.number && y >= 0) {
            rightWin.push('' + x + y);
            x++;
            y--;
        }
        return rightWin;
    };

    //Method To Check Win Conditions
    this.checkWin = function (array, value) {
        var match = 0;
        for (var i = 0; i < array.length; i++) {
            if (match != this.win) {
                if (this.valueArray[this.sqArray.indexOf(array[i])] == value) {
                    match++;
                } else {
                    match = 0;
                }
            }
        }
        return (match == this.win);
    };
}

//CONSTRUCTOR FOR PLAYER
function Player(name, value) {
    this.name = name;
    this.value = value;
}

