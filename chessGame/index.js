var topPos = 480
var leftPos = 320
var level = 0;

$(window).on('keydown', function(evt) {
    console.log(evt.which)
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

    levelOneObstacles.forEach(function(el) {
        console.log('LEFT', el.css('left'))
        console.log('TOP', el.css('top'))
        console.log('')
    })

    if (leftPos < 0) leftPos = 0;
    if (leftPos > 560) leftPos = 560;
    if (topPos < 0) topPos = 0;
    if (topPos > 560) topPos = 560;

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
        level++;
        if (level == 1){
            levelOneObstacles.forEach(function(el) {
                $('#game').append(el);
            })
        }
        if (level == 2){
        $('#game').empty()
            levelTwoObstacles.forEach(function(el) {
                $('#game').append(el);
            })
        }
        if (level == 3){
            $('#game').empty()
                levelThreeObstacles.forEach(function(el) {
                    $('#game').append(el);
                })
            }

    }
    

    $('#player').css({
        "top": topPos + 'px',
        "left": leftPos + 'px',
    });
}

// probably make seperate folder for the levels

var levelOneObstacles = [
    $('<div class="c6"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="f6"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="d5"><img src="/pics/redTile.gif" alt="" height="60px" ></div>'),
    $('<div class="b5"><img src="/pics/redTile.gif" alt="" height="60px" ></div>'),
    $('<div class="e5"><img src="/pics/redTile.gif" alt="" height="60px" ></div>'),
    $('<div class="g5"><img src="/pics/redTile.gif" alt="" height="60px" ></div>'),
]

var levelTwoObstacles = [    
    $('<div class="c5"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="d5"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="e5"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="f5"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="g5"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="c4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="d4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="e4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="f4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="g4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div id="player"><img src="/pics/bk.png" alt="" height="60px" ></div>'),
    $('<div class="e8"><img src="/pics/goalTile.jpg" alt="" height="60px" ></div>'),
]

var levelThreeObstacles = [
    $('<div class="h4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="g4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="f4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="e4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="d4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="c4"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="a6"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="b7"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="c7"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="d7"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="e7"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div class="f7"><img src="/pics/wp.png" alt="" height="60px" ></div>'),
    $('<div id="player"><img src="/pics/bk.png" alt="" height="60px" ></div>'),
    $('<div class="e8"><img src="/pics/goalTile.jpg" alt="" height="60px" ></div>'),
]