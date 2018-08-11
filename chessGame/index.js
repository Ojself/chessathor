var topPos = 480
var leftPos = 320
var level = 0;


var player = '<div class="player"><img src="/pics/bk.png" alt="" height="60px" ></div>';
$("#game").append(player);

var goalTile = '<div class="e8"><img src="/pics/goalTile.jpg" alt="" height="60px" ></div>';
$("#game").append(goalTile)

//key functions
$(window).on('keydown', function(evt) {
    switch (evt.which) {
        case 65:
            movePlayer("left");
            break;

        case 87:
            movePlayer("up");
            break;

        case 68:
            movePlayer("right");
            break;

        case 83:
            movePlayer("down");
            break;

        case 81:
            movePlayer("diagl");
            break;
        
        case 69:
            movePlayer("diagr");
            break;

        default:
            console.log("");
    }
});

function movePlayer(direction) {
    switch (direction) {
        case 'left':
            leftPos -= 80;
            break;

        case 'up':
            topPos -= 80;
            break;

        case 'right':
            leftPos += 80;
            break;

        case 'down':
            topPos += 80;
            break;

        case 'diagl':
            leftPos -= 80;
            topPos -= 80;
            break;
        
        case 'diagr':
            leftPos += 80;
            topPos -= 80;

            break;
    }

    if (leftPos < 0) leftPos = 0;
    if (leftPos > 560) leftPos = 560;
    if (topPos < 0) topPos = 0;
    if (topPos > 560) topPos = 560;

    $('.player').css({
        "top": topPos + 'px',
        "left": leftPos + 'px',
    });

    // If you walk into goal, you go to next level //
    if (topPos == 0 && leftPos == 320) {
        initialPosition()
        nextLevel()
    };
    
    function initialPosition(){
        topPos = 480;
        leftPos = 320;
    }

    function nextLevel() {
        level++
        $('#game').empty();
        if (level == 1){
            gameGenerator(red1, "redTile");
            gameGenerator(pawn1, "wp");
            $("#game").append(player);
            $("#game").append(goalTile);
         }

        if (level == 2){
            gameGenerator(pawn2, "wp");
            $("#game").append(player);
            $("#game").append(goalTile);
        }
        
        if (level == 3){
            gameGenerator(pawn3, "wp");
            $("#game").append(player);
            $("#game").append(goalTile);
        }
        }
    }    


function gameGenerator(arr, piece){
    for (var i = 0; i < arr.length; i++) {
        var el = '<div class="' + arr[i] + '"><img src="/pics/' + piece + '.png" alt="" height="60px" ></div>'
        $("#game").append(el);
    }
}








// MAP SETUP

// OCCUPIED TILES
// PAWNS
// KNIGHTS
// BISHOPS
// ROOKS
// QUEENS
// OTHER

// eg. pawnX = []
//     redX = []

// MAPS 

// LEVEL 1

var red1 = ["b5","d5","e5","g5"]
var pawn1 = ["c6","f6"]

// LEVEL 2

var pawn2 = ["c5","d5","e5","f5","g5","c4","d4","e4","f4","g4"]

// LEVEL 3

var pawn3 = ["h4","g4","f4","e4","d4","c4","a6","b7","c7","d7","e7","f7"]
