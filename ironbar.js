$(window).on("keydown", function(evt) {
  switch (evt.which) {
    case 83:
      movePlayer("left");
      break;

    case 69:
      movePlayer("up");
      break;
    default:
      console.log("");
  }
});

function movePlayer(direction) {
  switch (direction) {
    // LEFT LEFT LEFT LEFT
    case "left":
      if (player.x < 1) {
        console.log("out of bounds");
        break;
      }
      player.x -= 1;
      console.log("X: " + player.x + "  Y: " + player.y);
      break;
    // UP UP UP UP
    case "up":
      if (player.y < 1) {
        console.log("out of bounds");
        break;
      }
      player.y -= 1;
      console.log("X: " + player.x + "  Y: " + player.y);
      break;
  }
}
