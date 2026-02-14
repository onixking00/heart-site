const heart = document.getElementById("heart");

/* outline heart particles */
const points = 2200;
const scale = 12;

const box = heart.getBoundingClientRect();
const cx = box.width / 2;
const cy = box.height / 2;

for (let i = 0; i < points; i++) {
  const t = (Math.PI * 2 * i) / points;

  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = cx + x * scale + "px";
  dot.style.top = cy - y * scale + "px";

  heart.appendChild(dot);
}

/* petals */
function createPetal() {
  const p = document.createElement("div");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 8000);
}

setInterval(createPetal, 120);

const starCount = 100;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.className = "star";

  // random start position
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  star.style.top = startY + "vh";
  star.style.left = startX + "vw";

  // random speed
  const duration = 10 + Math.random() * 20; // seconds
  star.style.animationDuration = `${duration}s, ${2 + Math.random() * 2}s`;

  document.body.appendChild(star);
}
