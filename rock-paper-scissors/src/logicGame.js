import scoreGame from "./scoreGame.js";

const gamelogic = () => {
  //1: rock
  //2: paper
  //3: scissors
  let num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  const deleteAg = document.getElementById("playStart");
  const deleteAgTwo = document.getElementById("finalGame");
  const $rock = document.getElementById("rock");
  const $paper = document.getElementById("paper");
  const $choiceImgUser = document.getElementById("choiceImgUser");
  const $choiceImgPlayer = document.getElementById("choiceImgPlayer");
  const $choiceColorUser = document.getElementById("choiceColorUser");
  const $choiceColorPlayer = document.getElementById("choiceColorPlayer");
  const $scissors = document.getElementById("scissors");
  const $textWinOrLose = document.getElementById("winOrLose");
  const $stop = document.querySelector(".circle-two-choice-player");
  const $tryAgain = document.getElementById("tryAgain");
  const $scaleWinOrLose = document.getElementById("scaleWinOrLose");
  const $user = document.querySelector(".user");
  const $player = document.querySelector(".player");
  const $winUser = document.getElementById("winUser");
  const $winPlayer = document.getElementById("winPlayer");

  let varOnly;
  let varOnlyPlayer;
  function shadowBoxUser() {
    $winUser.style.setProperty(
      "box-shadow",
      "rgb(31, 54, 86) 0px 0px 520px 211px"
    );
  }
  function shadowBoxPlayer() {
    $winPlayer.style.setProperty(
      "box-shadow",
      "rgb(31, 54, 86) 0px 0px 520px 211px"
    );
  }
  function animationEnd() {
    setTimeout(() => {
      $user.style.setProperty("left", "0px");
      $player.style.setProperty("right", "0px");
      $scaleWinOrLose.style.setProperty("transform", "scale(1)");
    }, 3000);
  }
  function colorAndImages() {
    setTimeout(() => {
      if (num === 1) {
        varOnlyPlayer = "rock-choice";
        $stop.style.setProperty("background-color", "var(--white)");
        $stop.style.setProperty(
          "box-shadow",
          "inset 3px 2px 2px 1px rgba(0, 0, 0, 0.37)"
        );
        $choiceColorPlayer.classList.add(varOnlyPlayer);
        $choiceImgPlayer.setAttribute("src", "../svg/icon-rock.svg");
      } else if (num === 2) {
        varOnlyPlayer = "paper-choice";
        $stop.style.setProperty("background-color", "var(--white)");
        $stop.style.setProperty(
          "box-shadow",
          "inset 3px 2px 2px 1px rgba(0, 0, 0, 0.37)"
        );
        $choiceColorPlayer.classList.add(varOnlyPlayer);
        $choiceImgPlayer.setAttribute("src", "../svg/icon-paper.svg");
      } else if (num === 3) {
        varOnlyPlayer = "scissors-choice";
        $stop.style.setProperty("background-color", "var(--white)");
        $stop.style.setProperty(
          "box-shadow",
          "inset 3px 2px 2px 1px rgba(0, 0, 0, 0.37)"
        );
        $choiceColorPlayer.classList.add(varOnlyPlayer);
        $choiceImgPlayer.setAttribute("src", "../svg/icon-scissors.svg");
      }
    }, 1500);
  }
  function tieGame(value) {
    if (value === num) {
      $textWinOrLose.innerHTML = `TIE`;
    }
  }

  $rock.addEventListener("click", (e) => {
    let rockNumber = 1;
    varOnly = "rock-choice";
    deleteAg.style.setProperty("display", "none");
    deleteAgTwo.style.setProperty("display", "block");
    $choiceColorUser.classList.add(varOnly);
    $choiceImgUser.setAttribute("src", "../svg/icon-rock.svg");

    colorAndImages();
    animationEnd();

    tieGame(rockNumber);
    if (num === 2) {
      $textWinOrLose.innerHTML = `YOU LOSE`;
      setTimeout(() => {
        shadowBoxPlayer();
      }, 3500);
    } else if (num === 3) {
      $textWinOrLose.innerHTML = `YOU WIN`;
      setTimeout(() => {
        scoreGame();
        shadowBoxUser();
      }, 3500);
    }
  });
  $paper.addEventListener("click", (e) => {
    let paperNumber = 2;
    varOnly = "paper-choice";
    deleteAg.style.setProperty("display", "none");
    deleteAgTwo.style.setProperty("display", "block");
    $choiceColorUser.classList.add(varOnly);
    $choiceImgUser.setAttribute("src", "../svg/icon-paper.svg");
    colorAndImages();
    animationEnd();
    tieGame(paperNumber);
    if (num === 3) {
      $textWinOrLose.innerHTML = `YOU LOSE`;
      setTimeout(() => {
        shadowBoxPlayer();
      }, 3500);
    } else if (num === 1) {
      $textWinOrLose.innerHTML = `YOU WIN`;
      setTimeout(() => {
        scoreGame();
        shadowBoxUser();
      }, 3500);
    }
  });
  $scissors.addEventListener("click", (e) => {
    let scissorsNumber = 3;
    varOnly = "scissors-choice";
    deleteAg.style.setProperty("display", "none");
    deleteAgTwo.style.setProperty("display", "block");
    $choiceColorUser.classList.add(varOnly);
    $choiceImgUser.setAttribute("src", "../svg/icon-scissors.svg");
    colorAndImages();
    animationEnd();
    tieGame(scissorsNumber);
    if (num === 1) {
      $textWinOrLose.innerHTML = `YOU LOSE`;
      setTimeout(() => {
        shadowBoxPlayer();
      }, 3000);
    } else if (num === 2) {
      $textWinOrLose.innerHTML = `YOU WIN`;
      setTimeout(() => {
        scoreGame();
        shadowBoxUser();
      }, 3500);
    }
  });
  $tryAgain.addEventListener("click", (e) => {
    $choiceColorUser.classList.remove(varOnly);
    deleteAg.style.setProperty("display", "block");
    deleteAgTwo.style.setProperty("display", "none");
    $stop.style.setProperty(
      "background-color",
      "hsla(238.4, 48.1%, 15.1%, 0.53)"
    );
    $stop.style.setProperty("box-shadow", "none");
    $choiceColorPlayer.classList.remove(varOnlyPlayer);
    $choiceImgPlayer.removeAttribute("src");
    $scaleWinOrLose.style.setProperty("transform", "scale(0)");
    if (window.screen.width >= 1200) {
      $user.style.setProperty("left", "200px");
      $player.style.setProperty("right", "200px");
    } else {
      $user.style.setProperty("left", "150px");
      $player.style.setProperty("right", "150px");
    }
    $winUser.style.setProperty("box-shadow", "none");
    $winPlayer.style.setProperty("box-shadow", "none");

    num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  });
};
export default gamelogic;
