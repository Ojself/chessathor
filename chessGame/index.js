var level = 0;


var playerPiece = '<div class="player"><img src="/pics/bk.png" alt="" height="60px" ></div>';
$("#game").append(playerPiece);

var goalTile = '<div class="e8"><img src="/pics/goalTile.jpg" alt="" height="60px" ></div>';
$("#game").append(goalTile)
    
   

var level1 = [
//    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,        index
//    A , B , C , D , E , F , G , H ,        index
    [" "," "," "," "," "," "," "," "], // 8 - 0
    [" "," "," "," "," "," "," "," "], // 7 - 1
    [" "," "," "," ","P"," "," "," "], // 6 - 2 
    [" "," "," "," "," "," "," "," "], // 5 - 3
    [" "," "," "," "," "," "," "," "], // 4 - 4
    [" "," "," "," "," "," "," "," "], // 3 - 5
    [" "," "," "," "," "," "," "," "], // 2 - 6
    [" "," "," "," "," "," "," "," "], // 1 - 7
    
] 






var player = { 
    x: 4,
    y: 6, 
}

var playerCss = {
    left: player.x*80,
    top: player.y*80,
}

const X_MAX = 7;
const Y_MAX = 7;

var directions = { 'U': 'Up', 'L': 'Left', 'D': 'Down', 'R': 'Right'};
var pieces = {'P': 'Pawn', 'N': 'Knight', 'B': 'Bishop', 'R': 'Rook'};
var obstacles = {'P': 'Pawn'};

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
            if (player.x < 1) {
                console.log("out of bounds");
                break;
            }
            var obstacle = level1[player.y][player.x - 1];
            if (obstacle == 'X'){
                console.log("CHECK: " + obstacles[obstacle])
            break;
            }
            player.x -=1;
            console.log("X: " + player.x + "  Y: " + player.y)
            break;
        case 'up':
            if (player.y < 1) {
                console.log("out of bounds");
                break;
            }
            var obstacle = level1[player.y - 2][player.x + 1];
            if (obstacle == 'P'){
                console.log("CHECK: " + obstacles[obstacle]+ " is occuping this place")
            break;
            
        }
           var test = level1[player.y - 2][player.x - 1];
            if (test == 'P'){
                console.log("CHECK: " + obstacles[test]+ " is occuping this place")
            break;
        }
            var piece = level1[player.y - 1][player.x];
            if (piece != ' '){
                console.log("PIECE CAPTURED: " + pieces[piece]);
                var indexX = player.x;
                var indexY = player.y;
                    level1[player.y - 1].splice(player.x, 1, " ")
                    
                    
            }
            
        player.y -=1;
        console.log("X: " + player.x + "  Y: " + player.y)
        break;
        case 'right':
            if (player.x == X_MAX) {
                console.log("out of bounds");
                break;
            }
            var obstacle = level1[player.y][player.x + 1];
            if (obstacle == 'X'){
                console.log("CHECK: " + obstacles[obstacle])
            break;
            }
        player.x +=1;
        console.log("X: " + player.x + "  Y: " + player.y)
        break;
        case 'down':
            if (player.y == Y_MAX) {
                console.log("out of bounds");
                break;
            }
            var obstacle = level1[player.y + 1][player.x];
            if (obstacle == 'X'){
                console.log("CHECK: " + obstacles[obstacle])
            break;
            }
        player.y +=1;
        console.log("X: " + player.x + "  Y: " + player.y)
        break;
        case 'diagl':
            if (player.x < 1) {
                console.log("out of bounds");
                break;
            }
            var obstacle = level1[player.y - 1][player.x - 1];
            if (obstacle == 'X'){
                console.log("CHECK: " + obstacles[obstacle])
            break;
            }
        player.x -=1;
        player.y -=1;
        console.log("X: " + player.x + "  Y: " + player.y)
        break;
        case 'diagr':
            if (player.x == X_MAX) {
                console.log("out of bounds");
                break;
            }
            var obstacle = level1[player.y - 1][player.x + 1];
            if (obstacle == 'X'){
                console.log("CHECK: " + obstacles[obstacle])
            break;
            }
        player.x +=1;
        player.y -=1
        console.log("X: " + player.x + "  Y: " + player.y)
    }
    $('.player').css({
        "top": player.y * 80 + 'px',
        "left": player.x * 80 + 'px',
    });
}

function initialPosition(){
    player.x = 4;
    player.y = 6;
}

// If you walk into goal, you go to next level //
/* if (player.x == 4 && player.y == 0) {
    initialPosition()
    nextLevel()
}; */

