import * as p5 from "p5";
import { setValues, isDebugMode, width, height, isProduction } from "./globals";
import { handleKeyPress } from "./keypress";

const sketch = (p: p5) => {
  setValues(p);

  // p.keyPressed = () => {
  //   handleKeyPress(p, p.keyCode);
  // };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0, 0, 1);

  };

  p.draw = () => {
    p.background(0, 0, 0);

    if (isDebugMode && !isProduction) {
      // Render FPS as text
      p.push();
      p.fill(255, 255, 255);
      p.textSize(12);
      p.text(`${p.frameRate().toFixed(2)}fps`, 20, 20);
      p.pop();
    }

    // draw a circle in the middle of the screen

    p.fill(255, 255, 255);

    p.ellipse(width / 2, height / 2, 100, 100);
  };
};

// @ts-ignore
new p5(sketch);
