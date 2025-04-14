const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

let imagem = new Image();
imagem.src = "https://logodetimes.com/wp-content/uploads/sao-paulo.png"; // Pode substituir por qualquer URL de imagem

let posX = canvas.width / 2;
let posY = canvas.height / 2;
const metadeLargura = 20;
const metadeAltura = 20;

imagem.onload = () => {
    desenhar();
};

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imagem, posX - metadeLargura, posY - metadeAltura, 40, 40);
    requestAnimationFrame(desenhar);
}

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // Evita que a imagem ultrapasse o canvas
    posX = Math.max(metadeLargura, Math.min(canvas.width - metadeLargura, x));
    posY = Math.max(metadeAltura, Math.min(canvas.height - metadeAltura, y));
});

// Se o mouse sair do canvas, a imagem continua na borda mais próxima
canvas.addEventListener("mouseleave", () => {
    if (posX < metadeLargura) posX = metadeLargura;
    if (posX > canvas.width - metadeLargura) posX = canvas.width - metadeLargura;
    if (posY < metadeAltura) posY = metadeAltura;
    if (posY > canvas.height - metadeAltura) posY = canvas.height - metadeAltura;
});
