var levelCounter = 0;
var moveCounter = 0;
var piecesCaptured = 0;

var subTotal = (levelCounter * 20) + (piecesCaptured * 5) - (moveCounter * 2);
var scoreTotal = subTotal;

var playerPiece = '<span class="player"><img src="/pics/bk.png" alt="" height="60px" ></span>';
$(".game").append(playerPiece);


var player = { 
    x: 4,
    y: 7, 
}

const X_MAX = 7;
const Y_MAX = 7;

var pieces = {'P': 'Pawn', 'N': 'Knight', 'B': 'Bishop', 'R': 'Rook'};
var obstacles = {'P': 'Pawn'};


// LEVELS

var level = [

// MAP

// K  - PLAYER
// G  - GOAL
// P  - PAWN
// "" - EMPTY SPACE

//  LEVEL 0
//    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,        index
//    A , B , C , D , E , F , G , H ,        index
    [
    [" "," "," "," ","G"," "," "," "], // 8 - 0
    [" "," "," "," "," "," "," "," "], // 7 - 1
    [" "," "," "," "," "," "," "," "], // 6 - 2 
    [" "," "," "," "," "," "," "," "], // 5 - 3
    [" "," "," "," "," "," "," "," "], // 4 - 4
    [" "," "," "," "," "," "," "," "], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 
    
//  LEVEL 1
//    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,        index
//    A , B , C , D , E , F , G , H ,        index
    [
    [" "," "," "," ","G"," "," "," "], // 8 - 0
    [" "," "," "," "," "," "," "," "], // 7 - 1
    [" "," ","P"," "," ","P"," "," "], // 6 - 2 
    [" "," "," "," "," "," "," "," "], // 5 - 3
    [" "," "," "," "," "," "," "," "], // 4 - 4
    [" "," "," "," "," "," "," "," "], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ],


// LEVEL 2
//    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,        index
//    A , B , C , D , E , F , G , H ,        index
    [
    [" "," "," "," ","G"," "," "," "], // 8 - 0
    [" "," "," "," "," "," "," "," "], // 7 - 1
    [" "," ","P"," "," "," ","P"," "], // 6 - 2 
    [" "," "," ","P"," ","P"," "," "], // 5 - 3
    [" "," "," "," "," "," "," "," "], // 4 - 4
    [" "," "," "," "," "," "," "," "], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 

//    LEVEL 3
//    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,        index
//    A , B , C , D , E , F , G , H ,        index
    [
    ["P"," "," "," ","G"," "," "," "], // 8 - 0
    [" ","P"," "," "," "," "," ","P"], // 7 - 1
    [" "," ","P"," "," "," ","P"," "], // 6 - 2 
    [" "," "," ","P"," ","P"," "," "], // 5 - 3
    [" "," "," "," ","P"," "," "," "], // 4 - 4
    [" "," "," "," "," "," "," "," "], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 

// LEVEL 4
//    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,        index
//    A , B , C , D , E , F , G , H ,        index
    [
    [" "," "," "," "," "," "," "," "], // 8 - 0
    [" ","P"," "," "," "," "," "," "], // 7 - 1
    [" "," ","P"," "," "," "," ","G"], // 6 - 2 
    [" "," ","P"," "," "," "," "," "], // 5 - 3
    [" "," ","P","P","P","P","P","P"], // 4 - 4
    [" "," "," "," "," "," "," "," "], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 
// LEVEL 4 TEXT: You're doing good! Let's introduce some time pressure!
// The red border(?) will kill your king    

// LEVEL 5

    [
    [" ","G"," "," "," "," "," "," "], // 8 - 0
    [" "," ","P","P","P","P","P","P"], // 7 - 1
    [" "," "," "," "," "," "," "," "], // 6 - 2 
    ["P","P","P","P","P","P"," "," "], // 5 - 3
    [" "," "," "," "," "," "," "," "], // 4 - 4
    [" "," ","P","P","P","P","P","P"], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 
    
// LEVEL 5 TEXT: Well done!

    [
    [" ","G"," "," "," "," "," "," "], // 8 - 0
    [" "," "," "," "," "," "," "," "], // 7 - 1
    ["P","P","P"," ","P"," "," ","P"], // 6 - 2 
    [" ","P"," ","P"," ","P"," ","P"], // 5 - 3
    [" ","P"," ","P"," ","P","P","P"], // 4 - 4
    [" ","P"," "," ","P"," "," ","P"], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 


// LEVEL 6
    [
    [" "," "," "," ","G"," "," "," "], // 8 - 0
    [" "," ","P"," "," "," "," "," "], // 7 - 1
    [" "," "," "," ","P"," "," "," "], // 6 - 2 
    [" ","P"," "," ","P","P","P"," "], // 5 - 3
    [" "," "," "," "," "," "," ","P"], // 4 - 4
    [" "," ","P","P","P"," ","P"," "], // 3 - 5
    ["P","P","P","P"," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 


// LEVEL 7

    [
    [" "," "," "," ","G"," "," "," "], // 8 - 0
    [" "," "," ","P","P"," ","P","P"], // 7 - 1
    [" "," ","P"," ","P"," ","P"," "], // 6 - 2 
    ["P","P"," "," "," "," ","P"," "], // 5 - 3
    [" "," ","P","P"," "," ","P"," "], // 4 - 4
    [" "," "," "," "," ","P"," "," "], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 

// LEVEL 8 FINAL LEVEL

    [
    [" "," "," "," ","G"," "," "," "], // 8 - 0
    [" "," "," "," "," "," "," "," "], // 7 - 1
    [" "," "," "," "," "," "," "," "], // 6 - 2 
    [" "," "," "," "," "," "," "," "], // 5 - 3
    [" "," "," "," "," "," "," "," "], // 4 - 4
    [" "," "," "," "," "," "," "," "], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7  
    ], 

]



 function refreshBoard(){
    
    $(".game div").remove();
    $('.player').css({
        "top": player.y * 80 + 'px',
        "left": player.x * 80 + 'px',
    
    });
    for (var i = 0; i < 8; i++){
        for (var j = 0; j < 8; j++){
            // ADDS TILES TO THE GAME BOARD 
            
            if (level[levelCounter][i][j] != "X"){
                var tiles = '<div id="t' + i + j + '"></div>';
                
                $(".game").append(tiles);
                

            }
            
            if (level[levelCounter][i][j] == "P"){
                $( "#t" + i + j ).addClass( "wp" );
                }
            
            if (level[levelCounter][i][j] == "G"){
                $( "#t" + i + j ).addClass( "gt" );
                if (i == player.y && j == player.x){
                    
                    $("#nextLevel").get(0).load();
                    $("#nextLevel").get(0).play();
                    levelCounter+=1;
                    initialPosition ();
                    refreshBoard();
                    bubbleText();
                }
        }
                
        }
    }
    
}
refreshBoard()
bubbleText();

//KEY FUNCTIONS
$(window).on('keydown', function(evt) {
    switch (evt.which) {
        case 65:
            movePlayer("left");
            moveCounter++;
            break;

        case 87:
            movePlayer("up");
            moveCounter++;
            break;

        case 68:
            movePlayer("right");
            moveCounter++;
            break;

        case 83:
            movePlayer("down");
            moveCounter++;
            break;

        case 81:
            movePlayer("diagl");
            moveCounter++;
            break;
        
        case 69:
            movePlayer("diagr");
            moveCounter++;
            break;

        default:
            console.log("");
    }
});

// MOVE THE PLAYER AROUND FUNCTIONS
function movePlayer(direction) {
    switch (direction) {

        // LEFT LEFT LEFT LEFT 

        case 'left':
            if (player.x < 1) {
                console.log("out of bounds");
                break;
            }
            if (player.y > 1){
            var obstacle = level[levelCounter][player.y - 1][player.x - 2];      
            if (obstacle == 'P'){
                console.log("CHECK: " + obstacles[obstacle]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y) + (player.x - 1)).addClass('puff-in-hor')
            break;
        }
            var obstacle2 = level[levelCounter][player.y - 1][player.x];
            if (obstacle2 == 'P'){
                console.log("CHECK: " + obstacles[obstacle2]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y) + (player.x - 1)).addClass('puff-in-hor')
            break;
        }
    }
            var piece = level[levelCounter][player.y][player.x - 1];
            if (piece == 'P'){
                console.log("PIECE CAPTURED: " + pieces[piece]);
                piecesCaptured+=1;
                $("#pawnGrab").get(0).load();
                $("#pawnGrab").get(0).play();
                level[levelCounter][player.y].splice(player.x-1, 1, " ");
            }
            
            player.x -=1;
            refreshBoard()
            console.log("X: " + player.x + "  Y: " + player.y)
            break;

            // UP UP UP UP

        case 'up':
        
            if (player.y < 1) {
                console.log("out of bounds");
                break;
            }
            if (player.y > 1){
                var obstacle = level[levelCounter][player.y - 2][player.x + 1];
                if (obstacle === 'P'){
                    console.log("CHECK: " + obstacles[obstacle]+ " is occuping this place");
                    $("#check").get(0).load();
                    $("#check").get(0).play();
                    $("#t" + (player.y-1) + player.x).addClass('puff-in-hor')
                     
                break;
            }

            var obstacle2 = level[levelCounter][player.y - 2][player.x - 1];
            if (obstacle2 == 'P'){
                console.log("CHECK: " + obstacles[obstacle2]+ " is occuping this place");
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y-1) + player.x).addClass('puff-in-hor')
                break;
            }
        }
            var piece = level[levelCounter][player.y - 1][player.x];
            if (piece == 'P'){
                console.log("PIECE CAPTURED: " + pieces[piece]);
                piecesCaptured+=1;
                $("#pawnGrab").get(0).load();
                $("#pawnGrab").get(0).play();
                level[levelCounter][player.y - 1].splice(player.x, 1, " ")
            }
            
            player.y -=1;
            refreshBoard()
            console.log("X: " + player.x + "  Y: " + player.y)
            break;

            // RIGHT RIGHT RIGHT RIGHT 

        case 'right':
            if (player.x == X_MAX) {
                console.log("out of bounds");
                break;
            }
            if (player.y > 1){
            var obstacle = level[levelCounter][player.y - 1][player.x];
            if (obstacle == 'P'){
                console.log("CHECK: " + obstacles[obstacle]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y) + (player.x+1)).addClass('puff-in-hor')
            break;
        }
            var obstacle2 = level[levelCounter][player.y - 1][player.x + 2];
            if (obstacle2 == 'P'){
                console.log("CHECK: " + obstacles[obstacle2]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y) + (player.x+1)).addClass('puff-in-hor')
            break;
        }
    }
            var piece = level[levelCounter][player.y][player.x + 1];
            if (piece == 'P'){
                console.log("PIECE CAPTURED: " + pieces[piece]);
                piecesCaptured+=1;
                $("#pawnGrab").get(0).load();
                $("#pawnGrab").get(0).play();
                level[levelCounter][player.y].splice(player.x + 1, 1, " ")
            }
        player.x +=1;
        refreshBoard()
        console.log("X: " + player.x + "  Y: " + player.y)
        break;

        // DOWN DOWN DOWN DOWN 

        case 'down':
            if (player.y == Y_MAX) {
                console.log("out of bounds");
                break;
            }
            var obstacle = level[levelCounter][player.y][player.x - 1];
            if (obstacle == 'P'){
                console.log("CHECK: " + obstacles[obstacle]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y + 1) + player.x).addClass('puff-in-hor')
            break;
            }
            var obstacle2 = level[levelCounter][player.y][player.x + 1];
            if (obstacle2 == 'P'){
                console.log("CHECK: " + obstacles[obstacle2]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y + 1) + player.x).addClass('puff-in-hor')
            break;
            }
            var piece = level[levelCounter][player.y + 1][player.x];
            if (piece == 'P'){
                console.log("PIECE CAPTURED: " + pieces[piece]);
                piecesCaptured+=1;
                $("#pawnGrab").get(0).load();
                $("#pawnGrab").get(0).play();
                level[levelCounter][player.y + 1].splice(player.x, 1, " ")
                    
            }
        player.y +=1;
        refreshBoard()
        console.log("X: " + player.x + "  Y: " + player.y)
        break;

        // DIAGONAL RIGHT DIAGONAL RIGHT 

        case 'diagr':
            if (player.x == X_MAX) {
                console.log("out of bounds");
                break;
            }
            if (player.y < 1) {
                console.log("out of bounds");
                break;
            }
            if (player.y > 1){
            var obstacle = level[levelCounter][player.y - 2][player.x + 2];
            if (obstacle == 'P'){
                console.log("CHECK: " + obstacles[obstacle]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y - 1) + (player.x + 1)).addClass('puff-in-hor')
            break;
        }
            var obstacle2 = level[levelCounter][player.y - 2][player.x];
            if (obstacle2 == 'P'){
                console.log("CHECK: " + obstacles[obstacle2]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y - 1) + (player.x + 1)).addClass('puff-in-hor')
            break;
        }
    }
        player.y -=1;
        player.x +=1;
        refreshBoard()
        console.log("X: " + player.x + "  Y: " + player.y)
        break;

        // DIAGONAL LEFT DIAGONAL LEFT 

        case 'diagl':
            if (player.x < 1) {
                console.log("out of bounds");
                break;
            }
            if (player.y < 1) {
                console.log("out of bounds");
                break;
            }
            if (player.y > 1){
            var obstacle = level[levelCounter][player.y - 2][player.x - 2];
            if (obstacle == 'P'){
                console.log("CHECK: " + obstacles[obstacle]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y - 1) + (player.x - 1)).addClass('puff-in-hor')
            break;
        }
            var obstacle2 = level[levelCounter][player.y - 2][player.x];
            if (obstacle2 == 'P'){
                console.log("CHECK: " + obstacles[obstacle2]+ " is occuping this place")
                $("#check").get(0).load();
                $("#check").get(0).play();
                $("#t" + (player.y - 1) + (player.x - 1)).addClass('puff-in-hor')
            break;
        }
    }
        player.y -=1;
        player.x -=1;
        refreshBoard()
        console.log("X: " + player.x + "  Y: " + player.y)
        break;
        }
    
}

function initialPosition(){
    player.x = 4;
    player.y = 7;
}

    $(document).ready(function() {
        $(document).cheatCodeVi();
        $(document).cheatCodeMa();
        $(document).cheatCodeLu();
        $(document).cheatCodeMi();
        $(document).cheatCodeLa();
        $(document).cheatCodeSi();
        $(document).cheatCodeNo();
        $(document).cheatCodeMr();
        $(document).cheatCodeVe();
        $(document).cheatCodeDa();
        $(document).cheatCodeFi();
    });


function bubbleText(){
    switch(levelCounter) {
        case 0:
        $("#bubble").text("This is a typical chess board. Although, in this game, your goal is to navigate through the map in order to get to the next level. Try using W-A-S-D to move");
            break;
        case 1:
        $("#bubble").text("The pawns occupy one tile on each of their forward-diagonal. Try capture them or navigate around them in order to get to goal. oh, and don't worry, they won't move.....for now..");
            break;
        case 2:
        $("#bubble").text("sometimes pawns are protected by other pawns. Try capturing the ones behind in order to capture the one in front.");
            break;
        case 3:
            $("#bubble").text("Try using the diagonal keys Q and E to navigate through this chain of pawns");
            break;
        case 4:
            $("#bubble").text("Text here");
            break;
        case 5:
            $("#bubble").text("Text here");
            break;
        case 6:
            $("#bubble").text("Text here");
            break;
        case 7:
            $("#bubble").text("Text here");
            break;
        case 8:
            $("#bubble").text("Text here");
            break;
        case 9:
            $("#bubble").text("Text here");
            break;
        
        
        default:
            console.log("hello world!")
    }
}
    