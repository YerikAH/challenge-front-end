const d = document;
const $one = d.getElementById("one-static");
const $two = d.getElementById("two-static");
const $three = d.getElementById("three-static");
const $four = d.getElementById("four-static");
const $five = d.getElementById("five-static");
const $six = d.getElementById("six-static");
const $seven = d.getElementById("seven-static");

const $one_box = d.getElementById("box-one");
const $two_box = d.getElementById("box-two");
const $three_box = d.getElementById("box-three");
const $four_box = d.getElementById("box-four");
const $five_box = d.getElementById("box-five");
const $six_box = d.getElementById("box-six");
const $seven_box = d.getElementById("box-seven");

document.addEventListener("mouseover", (e) => {
  switch (e.target) {
    case $one:
      $one_box.style.setProperty("display", "block");
      break;
    case $two:
      $two_box.style.setProperty("display", "block");
      break;
    case $three:
      $three_box.style.setProperty("display", "block");
      break;
    case $four:
      $four_box.style.setProperty("display", "block");
      break;
    case $five:
      $five_box.style.setProperty("display", "block");
      break;
    case $six:
      $six_box.style.setProperty("display", "block");
      break;
    case $seven:
      $seven_box.style.setProperty("display", "block");
      break;
    default:
      break;
  }
});
document.addEventListener("mouseout", (e) => {
  switch (e.target) {
    case $one:
      $one_box.style.setProperty("display", "none");
      break;
    case $two:
      $two_box.style.setProperty("display", "none");
      break;
    case $three:
      $three_box.style.setProperty("display", "none");
      break;
    case $four:
      $four_box.style.setProperty("display", "none");
      break;
    case $five:
      $five_box.style.setProperty("display", "none");
      break;
    case $six:
      $six_box.style.setProperty("display", "none");
      break;
    case $seven:
      $seven_box.style.setProperty("display", "none");
      break;
    default:
      break;
  }
});
document.addEventListener("touchstart", (e) => {
  switch (e.target) {
    case $one:
      $one_box.style.setProperty("display", "block");
      e.target.style.setProperty("opacity", "0.6");
      break;
    case $two:
      $two_box.style.setProperty("display", "block");
      e.target.style.setProperty("opacity", "0.6");
      break;
    case $three:
      $three_box.style.setProperty("display", "block");
      e.target.style.setProperty("opacity", "0.6");
      break;
    case $four:
      $four_box.style.setProperty("display", "block");
      e.target.style.setProperty("opacity", "0.6");
      break;
    case $five:
      $five_box.style.setProperty("display", "block");
      e.target.style.setProperty("opacity", "0.6");
      break;
    case $six:
      $six_box.style.setProperty("display", "block");
      e.target.style.setProperty("opacity", "0.6");
      break;
    case $seven:
      $seven_box.style.setProperty("display", "block");
      e.target.style.setProperty("opacity", "0.6");
      break;
    default:
      break;
  }
});
document.addEventListener("touchend", (e) => {
  switch (e.target) {
    case $one:
      $one_box.style.setProperty("display", "none");
      e.target.style.setProperty("opacity", "1");
      break;
    case $two:
      $two_box.style.setProperty("display", "none");
      e.target.style.setProperty("opacity", "1");
      break;
    case $three:
      $three_box.style.setProperty("display", "none");
      e.target.style.setProperty("opacity", "1");
      break;
    case $four:
      $four_box.style.setProperty("display", "none");
      e.target.style.setProperty("opacity", "1");
      break;
    case $five:
      $five_box.style.setProperty("display", "none");
      e.target.style.setProperty("opacity", "1");
      break;
    case $six:
      $six_box.style.setProperty("display", "none");
      e.target.style.setProperty("opacity", "1");
      break;
    case $seven:
      $seven_box.style.setProperty("display", "none");
      e.target.style.setProperty("opacity", "1");
      break;
    default:
      break;
  }
});
