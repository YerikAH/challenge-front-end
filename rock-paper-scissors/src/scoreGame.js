let score;
if (!localStorage.getItem("count")) {
  score = 0;
} else {
  score = parseInt(localStorage.getItem("count"));
}
const scoreGame = () => {
  const $score = document.getElementById("score");
  score = score + 1;
  $score.innerHTML = `${score}`;
  localStorage.setItem("count", `${score}`);
};
export default scoreGame;
