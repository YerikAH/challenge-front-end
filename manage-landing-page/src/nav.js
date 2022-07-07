function Nav() {
  const d = document;
  const hOpen = d.getElementById("hm-o");
  const hClose = d.getElementById("hm-c");
  const menu = d.getElementById("nav-mobile");
  const bodH = d.querySelector("html");
  const bgham = d.getElementById("ham-sty-bg");
  hOpen.addEventListener("click", (e) => {
    bodH.style.overflowY = "hidden";
    bgham.style.display = "block";
    menu.style.display = "block";
    hOpen.style.display = "none";
    hClose.style.display = "block";
  });

  hClose.addEventListener("click", (e) => {
    menu.style.display = "none";
    bodH.style.overflowY = "visible";
    hOpen.style.display = "block";
    hClose.style.display = "none";
    bgham.style.display = "none";
  });
}

export default Nav;
