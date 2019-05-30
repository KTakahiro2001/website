var canvas;

window.addEventListener('DOMContentLoaded', function() {

  if (HTMLCanvasElement) {
    canvas = document.getElementById("canvas");
    canvas.width  = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    var context = canvas.getContext('2d');
    var stars = new Array();
    for (var i = 0; i < 40; i++) {
      stars.push(new Star(context, Math.random() * 1000, Math.random() * 1000, Math.random() - 0.5, Math.random() - 0.5));
    }
    setInterval(function() {
      context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
      stars.map(item => item.update());
    }, 45);

  }
}
);

window.onresize = function () {
  canvas.width  = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
};

class Star {

  constructor( context, posX, posY, velX, velY) {
        this.context = context;
        this.posX = posX;
        this.posY = posY;
        this.velX = velX;
        this.velY = velY;
  }

  update() {
    this.move();
    this.context.beginPath();
    this.context.arc(this.posX, this.posY, 4, 0, Math.PI*2, false);
    this.context.fill();
  }

  move() {
    this.posX += this.velX;
    this.posY += this.velY;
    if(this.posX < 0 || this.posX > document.documentElement.clientWidth) {
      this.velX *= -1;
    }
    if(this.posY < 0 || this.posY > document.documentElement.clientHeight) {
      this.velY *= -1;
    }
  }


}
