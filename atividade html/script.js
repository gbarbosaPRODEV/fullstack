window.onload = function () {
    desenharCanvas1();
    desenharCanvas2();
};
function desenharCanvas1() {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    // fundo
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 300, 300);
    // quadrados coloridos nos cantos
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 40, 40);
    ctx.fillStyle = "red";
    ctx.fillRect(260, 0, 40, 40);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 260, 40, 40);
    ctx.fillStyle = "black";
    ctx.fillRect(260, 260, 40, 40);
    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 120, 20, 40);
    ctx.fillRect(280, 120, 20, 40);
    ctx.fillStyle = "red";
    ctx.fillRect(140, 140, 20, 20);
    // linhas
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.stroke();
    // linhas diagonais
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(150, 150);
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(150, 150);
    ctx.stroke();
    // círculo central
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(150, 150, 10, 0, 2 * Math.PI);
    ctx.fill();
    // arcos
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.arc(150, 150, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(150, 150, 60, Math.PI, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(150, 270, 30, Math.PI, 2 * Math.PI);
    ctx.fillStyle = "cyan";
    ctx.fill();
    // bolinhas amarelas
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(90, 190, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(210, 190, 10, 0, 2 * Math.PI);
    ctx.fill();
    // texto
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Canvas", 130, 145);
}
function desenharCanvas2() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");
    // céu
    ctx.fillStyle = "mediumaquamarine";
    ctx.fillRect(0, 0, 300, 300);
    // sol
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(230, 70, 40, 0, 2 * Math.PI);
    ctx.fill();
    // chão
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 200, 300, 100);
    // rio
    ctx.fillStyle = "dodgerblue";
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.quadraticCurveTo(100, 240, 0, 300);
    ctx.fill();
    // casa
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(120, 150, 60, 50);
    // telhado
    ctx.fillStyle = "tomato";
    ctx.beginPath();
    ctx.moveTo(120, 150);
    ctx.lineTo(150, 120);
    ctx.lineTo(180, 150);
    ctx.closePath();
    ctx.fill();
    // porta
    ctx.fillStyle = "black";
    ctx.fillRect(145, 170, 10, 30);
    // janelas
    ctx.fillStyle = "deepskyblue";
    ctx.fillRect(125, 160, 15, 15);
    ctx.fillRect(160, 160, 15, 15);
    // árvores
    desenharArvore(ctx, 60, 180);
    desenharArvore(ctx, 240, 180);
}
function desenharArvore(ctx, x, y) {
    ctx.fillStyle = "saddlebrown";
    ctx.fillRect(x - 5, y, 10, 30);
    ctx.beginPath();
    ctx.fillStyle = "forestgreen";
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fill();
}