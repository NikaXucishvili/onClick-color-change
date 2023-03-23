var ball = document.getElementById("ball");
var body = document.getElementById("body");

ball.addEventListener("click", function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const j = Math.floor(Math.random() * 240);
    const k = Math.floor(Math.random() * 240);
    const l = Math.floor(Math.random() * 240);

    body.style.backgroundColor = `rgb(${j}, ${k}, ${l})`;

    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});