const id = document.getElementById("id");
const advice = document.getElementById("advice");
const btn = document.getElementById("btn-random-click");

async function getData() {
  try {
    let res = await fetch("https://api.adviceslip.com/advice");
    let json = await res.json();
    let data = json.slip;
    localStorage.setItem("id", `${data.id}`);
    localStorage.setItem("advice", `${data.advice}`);
    location.reload();
  } catch (err) {
    advice.innerHTML = `Ocurrio un error, Vuelve a intentarlo`;
  }
}
btn.addEventListener("click", (e) => {
  getData();
});
const theId = localStorage.getItem("id");
const theAdvice = localStorage.getItem("advice");
document.addEventListener("DOMContentLoaded", (e) => {
  if (theId == null || theAdvice == null) {
    advice.textContent = "Click below, and good luck!!";
    id.textContent = "#404";
  } else {
    id.innerHTML = `ADVICE <i>#${theId}</i>`;
    advice.innerHTML = `${theAdvice}`;
  }
});
