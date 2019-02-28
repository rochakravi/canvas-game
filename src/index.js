import Paddle from "/src/paddle";
import InputHandler from "/src/input";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle);
let lastTime = 0;
function gameLoop(timestaamp) {
  let deltaTime = timestaamp - lastTime;
  lastTime = timestaamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  requestAnimationFrame(gameLoop);
}
gameLoop();
