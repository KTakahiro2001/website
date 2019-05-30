var canvas;

window.addEventListener('DOMContentLoaded', function() {

  if (HTMLCanvasElement) {
    canvas = document.getElementById("canvas");
    canvas.width  = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    var context = canvas.getContext('2d');
    var stars = new Array();
    var starCount = 100;
    for (var i = 0; i < starCount; i++) {
      stars.push(new Star(context, Math.random() * document.documentElement.clientWidth, Math.random() * document.documentElement.clientHeight, Math.random() - 0.5, Math.random() - 0.5));
    }
    setInterval(function() {
      context.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
      stars.map(item => item.update());
      var alpha;
      for (var i = 0; i < starCount; i++) {
        for (var j = i + 1; j < starCount; j++) {
          alpha = Math.min(((document.documentElement.clientWidth + document.documentElement.clientHeight) / 4) / (Math.pow(stars[i].posX - stars[j].posX, 2) + Math.pow(stars[i].posY - stars[j].posY, 2)), 1) * 0.6;
          context.beginPath();
          context.globalAlpha = alpha;
          context.strokeColor = '#e5dbff'
          context.moveTo(stars[i].posX, stars[i].posY);
          context.lineTo(stars[j].posX, stars[j].posY);
          context.stroke();

        }
      }
    }, 30);

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
        this.time = 0;
  }

  update() {
    this.context.globalAlpha = Math.max(Math.abs(Math.sin(this.time * Math.PI / 180)), 0.3) * 0.6;
    this.context.fillColor = '#5f3dc4'
    this.move();
    this.context.beginPath();
    this.context.arc(this.posX, this.posY, 2, 0, Math.PI*2, false);
    this.context.fill();
    this.time += 1;
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
