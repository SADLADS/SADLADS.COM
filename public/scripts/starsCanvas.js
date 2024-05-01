function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createDot(size, color, x, y) {
  context.fillStyle = color;
  context.fillRect(x, y, size, size);
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  layer1Dots.forEach(dot => {
    createDot(dot.size, dot.color, dot.x, dot.y);
  });

  layer2Dots.forEach(dot => {
    dot.y -= dot.speed;
    if (dot.y < -dot.size) {
      dot.y = canvas.height;
    }
    createDot(dot.size, dot.color, dot.x, dot.y);
  });

  layer3Dots.forEach(dot => {
    dot.y -= dot.speed;
    if (dot.y < -dot.size) {
      dot.y = canvas.height;
    }
    createDot(dot.size, dot.color, dot.x, dot.y);
  });

  requestAnimationFrame(update);
}

const canvas = document.getElementById('dotsCanvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const layer1Dots = [];
const layer2Dots = [];
const layer3Dots = [];

for (let i = 0; i < 100; i++) {
  layer1Dots.push({
    size: 3,
    color: 'white',
    x: getRandomNumber(0, canvas.width),
    y: getRandomNumber(0, canvas.height)
  });

  layer2Dots.push({
    size: 2,
    color: 'white',
    x: getRandomNumber(0, canvas.width),
    y: getRandomNumber(0, canvas.height),
    speed: getRandomNumber(0.1, 0.5)
  });

  layer3Dots.push({
    size: 1,
    color: 'white',
    x: getRandomNumber(0, canvas.width),
    y: getRandomNumber(0, canvas.height),
    speed: getRandomNumber(0.5, 1)
  });
}

update();