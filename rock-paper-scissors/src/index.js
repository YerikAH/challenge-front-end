import gamelogic from "./logicGame.js";
import modalRules from "./modalRules.js";

const $score = document.getElementById("score");

gamelogic();
modalRules();

document.addEventListener("DOMContentLoaded", (e) => {
  $score.innerHTML = localStorage.getItem("count");
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../sw.js")
    .then((reg) => console.log("Registro de SW exitoso", reg))
    .catch((err) => console.warn("Error al tratar de registrar el sw", err));
}
