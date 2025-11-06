let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bola = {
  x: 0,
  y: 50,
  raio: 20,
  img: new Image(),
  desenha: function() {
    this.img.src = '1.png'; // coloque o caminho certo da sua imagem
    ctx.beginPath();
    ctx.drawImage(this.img, this.x, this.y, 2 * this.raio, 2 * this.raio);
    ctx.closePath();
  }
};

function animacao() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bola.desenha();
  requestAnimationFrame(animacao);
}

animacao();

document.addEventListener("keydown", function(evento) {
  let tecla = evento.key;
  let vel = 5;

  // Verifica os limites antes de mover
  if (tecla === "ArrowUp" && bola.y > 0) {
    bola.y -= vel;
  }
  if (tecla === "ArrowDown" && bola.y + 2 * bola.raio < canvas.height) {
    bola.y += vel;
  }
  if (tecla === "ArrowLeft" && bola.x > 0) {
    bola.x -= vel;
  }
  if (tecla === "ArrowRight" && bola.x + 2 * bola.raio < canvas.width) {
    bola.x += vel;
  }
});
