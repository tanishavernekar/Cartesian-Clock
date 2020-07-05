// Based on Daniel Shiffman's clock tutorial. // http://patreon.com/codingtrain  // Sketch by Tansi.
// https://thecodingtrain.com/CodingChallenges/074-clock.html

let HourScale = 30;
let MinScale = 12;

function setup() {
  createCanvas(24 * HourScale, 60 * MinScale);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(10);

  let hr = hour() * HourScale;
  let mn = minute() * MinScale;
  let sc = second();

  noStroke();
  fill(255, 100);
  rect(hr, 0, HourScale, mn);
  fill(255, 15);
  rect(0, 0, hr, height);

  //console.log(hr, mn);

  for (i = 0; i < 24; i++) {
    textAlign(CENTER, CENTER); // textAlign(horizAlign, [vertAlign]) --> horz =  LEFT, CENTER, or RIGHT and vertical = TOP, BOTTOM, CENTER, or BASELINE

    var oddOrEven = sc % 2;

    if (oddOrEven == 1) {
      textSize(9);
    } else {
      textSize(10);
    }

    fill(250);
    text(i, i * HourScale + HourScale / 2, 15);

    stroke(50);
    line(i * HourScale, 0, i * HourScale, 60 * MinScale);
  }

  for (i = 1; i < 12; i++) {
    text(i, i * HourScale + HourScale * 12 + HourScale / 2, 45);
  }

  //Horizontal Minute lines - Secondary
  for (i = 0; i < 12; i++) {
    stroke(40);
    line(0, (i * height) / 12, width, (i * height) / 12);
  }

  //Vertical 8 am Line
  stroke(155);
  line(8 * HourScale, 0, 8 * HourScale, height);

  //Horizontal Minute Lines - Primary
  line(0, height / 2, width, height / 2);
  line(0, (3 * height) / 4, width, (3 * height) / 4);
  line(0, height / 4, width, height / 4);

  //Minute Marker Text on Left
  for (i = 1; i < 12; i++) {
    text(i * 5, HourScale / 2, i * 5 * MinScale + 10);
  }
}
