/**
 * Created by jar4677 on 5/3/16.
 */

var currentPlayer = null;
//DOCUMENT READY FOR EVENT HANDLERS
$(document).ready(function () {
    var settings = getSettings();
    
    if(settings.exists){
        $("#setting_modal").modal('show');
    } else {
        $('#settingsModal').modal('show');
    }
    
    
    $("#Yes").click(function () {
        $("#setting_modal").modal("hide");
        var size = settings.number;
        var toWin = settings.win;
        gameBoard = new TicTacToe(size, toWin);
        gameBoard.buildBoard();
        gameBoard.valueArray = settings.valueArray;
        player1 = settings.player1;
        player2 = settings.player2;
        currentPlayer = settings.currentPlayer;
        displayName(currentPlayer.name);
    
        //sets cursor type based on player value
        if(currentPlayer.value = 'x'){
            $("#game-area").addClass('x').removeClass('o');
        } else {
            $("#game-area").addClass('o').removeClass('x');
        }
    
        //sets image background for squares with a value
        for (var i = 0; i < gameBoard.valueArray.length; i++){
            var yesCls = null;
            var noCls = null;
            if (gameBoard.valueArray[i] != null){
                if (gameBoard.valueArray[i] == 'x'){
                    yesCls = 'X-square';
                    noCls = 'O-square';
                } else {
                    yesCls = 'O-square';
                    noCls = 'X-square';
                }
            
                var id = gameBoard.sqArray[i];
            
                $(".square").each(function () {
                    if ($(this).attr("square") == id){
                        $(this).addClass(yesCls);
                    }
                })
            }
        }
    });
    
    $("#No").click(function () {
        $("#setting_modal").modal("hide");
        $('#settingsModal').modal('show');
    });
 
    //saves settings when window closes
    $(window).unload(gameSettings);
    
    //click handler for new game
    $("#new-game").click(function () {
        $("#settingsModal").modal("hide");
        if($("#player-1").val() == ''){
            var p1Name = 'Player 1';
        } else {
            var p1Name = $("#player-1").val();
        }
        if($("#player-2").val() == ''){
            var p2Name = 'Player 2';
        } else {
            var p2Name = $("#player-2").val();
        }
        var size = $("input[name = game-size]:checked").val();
        var toWin = $("input[name = to-win]:checked").val();

        gameBoard = new TicTacToe(size, toWin);
        gameBoard.buildBoard();
        player1 = new Player(p1Name, "x");
        player2 = new Player(p2Name, "o");
        currentPlayer = player1;
        displayName(currentPlayer.name);
    });

    $("#play-again").click(function () {
        $("#winModal").modal("hide");
        $("#game-area").html('');
        $('#settingsModal').modal('show');
    });

    $("#reset").click(function () {
        $('#settingsModal').modal('show');
        $("#game-area").html('');
    });

    //click handlers for changing mark
    $("#X").click(function () {
       //current player value becomes 'x'
        currentPlayer.value = 'x';
        $("#game-area").addClass('x').removeClass('o');
    });

    $("#O").click(function () {
        //current player value becomes 'o'
        currentPlayer.value = 'o';
        $("#game-area").addClass('o').removeClass('x');
    });

    //handlers for game board sizes
    //TODO Anomalies when you select a larger size then go back to a smaller size
    $("#game-three").change(function () {
        $("#win-four, #win-five, #win-six").attr({'checked': false, 'disabled': true});
        $("#win-three").attr('checked', true);
    });

    $("#game-four").change(function () {
        $("#win-five, #win-six").attr({'checked': false, 'disabled': true});
        $("#win-three").attr('checked', false);
        $("#win-four").attr({'disabled': false, 'checked': true});
    });

    $("#game-five").change(function () {
        $("#win-six").attr({'checked': false, 'disabled': true});
        $("#win-four, #win-three").attr({'checked': false, 'disabled': false});
        $("#win-five").attr({'disabled': false, 'checked': true});
    });

    $("#game-six").change(function () {
        $("#win-four, #win-five, #win-three").attr({'checked': false, 'disabled': false});
        $("#win-six").attr({'disabled': false, 'checked': true});
    });

    //click handler for squares
    $("#game-area").on("click", "div.square", function () {
        var id = $(this).attr("square");
        var value = currentPlayer.value;

        //set value to square
        if (currentPlayer.value == 'x'){
            $(this).addClass('X-square').removeClass('O-square');
        } else {
            $(this).addClass('O-square').removeClass('X-square');
        }

        //call clicked method
        gameBoard.clicked(id, value);
    });
});

//CONSTRUCTOR FOR GAME
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

        //checks to see if there is a value in that position already, if not, increment squaresFilled
        if (this.valueArray[this.sqArray.indexOf(id)] == null) {
            this.squaresFilled++;
        }

        //sets the value in the value array
        this.valueArray[this.sqArray.indexOf(id)] = value;

        //if enough squares are filled, check for win
        if (this.squaresFilled >= this.win) {
            
            if (
                //calls the checkWin method for each win condition
                this.checkWin(this.rowWin(x), value) ||
                this.checkWin(this.colWin(y), value) ||
                this.checkWin(this.leftDWin(x, y), value) ||
                this.checkWin(this.rightDWin(x, y), value)
            ) {
                //calls win modal if it is a win
                win_modal(currentPlayer.name + " Wins!");
            } else if (this.valueArray.indexOf(null) == -1){
                //calls win modal if it is a draw
                win_modal('Draw!');
            }


        }
        //switch players
        if(currentPlayer == player1){
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }

        //display current player's name
        displayName(currentPlayer.name);

        //set cursor based on player value
        if(currentPlayer.value == 'x'){
            $("#game-area").addClass('x').removeClass('o');
        } else {
            $("#game-area").addClass('o').removeClass('x');
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
        //staring there, loop until bottom right while both x and y are less than the number of rows
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
        //finds the top right corner
        while (x - 1 >= 0 && y + 1 < this.number - 1) {
            x--;
            y++;
        }
        //fills the temporary array going down and to the left
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
        //loop through win condition array checking for matches
        for (var i = 0; i < array.length; i++) {
            if (match != this.win) {
                //checks value array at same position in reference array
                if (this.valueArray[this.sqArray.indexOf(array[i])] == value) {
                    match++;
                } else {
                    match = 0;
                }
            }
        }
        //returns true if the number of continuous matches equals the total to win
        return (match == this.win);
    };
}

//CONSTRUCTOR FOR PLAYER
function Player(name, value) {
    this.name = name;
    this.value = value;
}

//Function to display name
function displayName(name) {
    $("#current_player").html(name + "'s turn");
}