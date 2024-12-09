let colors = [];
let gridSize = 100; 
let animationOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createInteractiveControls();
  initColors();
}

function draw() {
  background(0, 50);
  noStroke();

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let colorIndex = floor(noise(x * 0.01, y * 0.01 + animationOffset) * colors.length);
      fill(colors[colorIndex]);
      let shapeType = floor(noise(x * 0.01 + animationOffset, y * 0.01) * 3);

      switch (shapeType) {
        case 0:
          rect(x + gridSize * 0.1, y + gridSize * 0.1, gridSize * 0.8, gridSize * 0.8, 10);
          break;
        case 1:
          ellipse(x + gridSize / 2, y + gridSize / 2, gridSize * 0.8, gridSize * 0.8);
          break;
        case 2:
          triangle(x, y, x + gridSize, y, x + gridSize / 2, y + gridSize);
          break;
      }
    }
  }

  animationOffset += 0.02;
}

function initColors() {
  colors = [
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 255, 0),
  ];
}

function createInteractiveControls() {
  let colorDiv = createDiv('Adjust Neon Colors:').style('font-size', '16px').style('color', '#FFF');
  for (let i = 0; i < 4; i++) {
    let colorPicker = createColorPicker(colors[i]);
    colorPicker.input(() => {
      colors[i] = colorPicker.color();
    });
  }

  createDiv('').style('margin', '10px 0');

  let gridSlider = createSlider(50, 200, gridSize);
  gridSlider.input(() => {
    gridSize = gridSlider.value();
  });

  let label = createDiv('Grid Size (Slide to Adjust)').style('font-size', '14px').style('color', '#FFF');
}
