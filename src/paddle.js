export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;
    this.maxSpeed = 7;
    this.max = 0;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if (!deltaTime) return;
    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0;
  }
}
