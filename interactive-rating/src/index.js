const modalTwo = document.getElementById("thanks");
const modalOne = document.getElementById("clickPass");
const btnModalOne = document.getElementById("submit");
const choice = document.getElementById("choice");
const err = document.getElementById("err");
const btnOne = document.getElementById("oneStar");
const btnTwo = document.getElementById("twoStar");
const btnThree = document.getElementById("threeStar");
const btnFour = document.getElementById("fourStar");
const btnFive = document.getElementById("fiveStar");

let choiceNumber;
btnOne.addEventListener("click", (e) => {
  btnOne.classList.add("active");
  btnTwo.classList.remove("active");
  btnThree.classList.remove("active");
  btnFour.classList.remove("active");
  btnFive.classList.remove("active");
  choiceNumber = 1;
});
btnTwo.addEventListener("click", (e) => {
  btnOne.classList.remove("active");
  btnTwo.classList.add("active");
  btnThree.classList.remove("active");
  btnFour.classList.remove("active");
  btnFive.classList.remove("active");
  choiceNumber = 2;
});
btnThree.addEventListener("click", (e) => {
  btnOne.classList.remove("active");
  btnTwo.classList.remove("active");
  btnThree.classList.add("active");
  btnFour.classList.remove("active");
  btnFive.classList.remove("active");
  choiceNumber = 3;
});
btnFour.addEventListener("click", (e) => {
  btnOne.classList.remove("active");
  btnTwo.classList.remove("active");
  btnThree.classList.remove("active");
  btnFour.classList.add("active");
  btnFive.classList.remove("active");
  choiceNumber = 4;
});
btnFive.addEventListener("click", (e) => {
  btnOne.classList.remove("active");
  btnTwo.classList.remove("active");
  btnThree.classList.remove("active");
  btnFour.classList.remove("active");
  btnFive.classList.add("active");
  choiceNumber = 5;
});

function error() {
  err.style.setProperty("display", "block");
  setTimeout(() => {
    err.style.setProperty("display", "none");
  }, 3000);
}

btnModalOne.addEventListener("click", (e) => {
  if (!choiceNumber) {
    setTimeout(error(), 3000);
  } else {
    modalOne.style.setProperty("display", "none");
    modalTwo.style.setProperty("display", "flex");
    choice.textContent = `${choiceNumber}`;
  }
});
