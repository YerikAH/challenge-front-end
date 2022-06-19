import gamelogic from "./logicGame.js";
import modalRules from "./modalRules.js";

const $score = document.getElementById("score");

gamelogic();
modalRules();

document.addEventListener("DOMContentLoaded", (e) => {
  $score.innerHTML = localStorage.getItem("count");
});
