function ani() {
  const d = document;
  const cirO = d.getElementById("circle1");
  const cirT = d.getElementById("circle2");
  const cirH = d.getElementById("circle3");
  const cirF = d.getElementById("circle4");
  const $animated = d.getElementById("animated");
  let rigs = 0;
  let vali = false;
  let time = 5000;
  if (window.innerWidth > 900) {
    time = time + 5000;
  } else {
    time = 5000;
  }
  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 900) {
      time = time + 5000;
      $animated.style.right = `0vw`;
    } else if (window.innerWidth <= 900) {
      time = 5000;
      $animated.style.right = `0vw`;
    }
  });

  cirO.style.backgroundColor = "hsl(12, 88%, 59%)";
  setInterval(() => {
    if (window.innerWidth <= 900) {
      if (rigs == 300 && vali == false) {
        vali = true;
        rigs = rigs - 100;
        $animated.style.right = `${rigs}vw`;
        cirO.style.backgroundColor = "transparent";
        cirT.style.backgroundColor = "transparent";
        cirH.style.backgroundColor = "hsl(12, 88%, 59%)";
        cirF.style.backgroundColor = "transparent";
      } else if (rigs == 0 && vali == false) {
        rigs = rigs + 100;
        $animated.style.right = `${rigs}vw`;
        cirO.style.backgroundColor = "transparent";
        cirT.style.backgroundColor = "hsl(12, 88%, 59%)";
        cirH.style.backgroundColor = "transparent";
        cirF.style.backgroundColor = "transparent";
      } else if (rigs == 100 && vali == false) {
        rigs = rigs + 100;
        $animated.style.right = `${rigs}vw`;
        cirO.style.backgroundColor = "transparent";
        cirT.style.backgroundColor = "transparent";
        cirH.style.backgroundColor = "hsl(12, 88%, 59%)";
        cirF.style.backgroundColor = "transparent";
      } else if (rigs == 200 && vali == false) {
        rigs = rigs + 100;
        $animated.style.right = `${rigs}vw`;
        cirO.style.backgroundColor = "transparent";
        cirT.style.backgroundColor = "transparent";
        cirH.style.backgroundColor = "transparent";
        cirF.style.backgroundColor = "hsl(12, 88%, 59%)";
      } else if (rigs == 0 && vali == true) {
        vali = false;
        rigs = rigs + 100;
        $animated.style.right = `${rigs}vw`;
        cirO.style.backgroundColor = "transparent";
        cirT.style.backgroundColor = "hsl(12, 88%, 59%)";
        cirH.style.backgroundColor = "transparent";
        cirF.style.backgroundColor = "transparent";
      } else if (rigs == 200 && vali == true) {
        rigs = rigs - 100;
        $animated.style.right = `${rigs}vw`;
        cirO.style.backgroundColor = "transparent";
        cirT.style.backgroundColor = "hsl(12, 88%, 59%)";
        cirH.style.backgroundColor = "transparent";
        cirF.style.backgroundColor = "transparent";
      } else if (rigs == 100 && vali == true) {
        rigs = rigs - 100;
        $animated.style.right = `${rigs}vw`;
        cirO.style.backgroundColor = "hsl(12, 88%, 59%)";
        cirT.style.backgroundColor = "transparent";
        cirH.style.backgroundColor = "transparent";
        cirF.style.backgroundColor = "transparent";
      }
    } else if (window.innerWidth > 900) {
      if (rigs == 0 && vali == false) {
        rigs = rigs + 100;
        $animated.style.right = `${rigs}vw`;
      } else if (rigs == 100 && vali == false) {
        rigs = rigs - 100;
        $animated.style.right = `${rigs}vw`;
      }
    }
  }, time);
}

export default ani;
