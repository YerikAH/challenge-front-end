const modalRules = () => {
  const $btnModal = document.getElementById("modalRules");
  const $closeModal = document.getElementById("closeModal");
  const $theModal = document.getElementById("onOrOffModal");
  const $bodyModal = document.getElementById("bodyModal");
  const $noScroll = document.querySelector("body");
  function onModal() {
    $theModal.style.setProperty("display", "block");
    $noScroll.style.setProperty("overflow", "hidden");
  }
  function offModal() {
    $theModal.style.setProperty("display", "none");
    if (window.screen.width <= 1400) {
      $noScroll.style.setProperty("overflow", "visible");
    } else {
      $noScroll.style.setProperty("overflow", "hidden");
    }
  }
  $btnModal.addEventListener("click", (e) => {
    onModal();
  });
  $bodyModal.addEventListener("click", (e) => {
    e.stopPropagation();
    onModal();
  });
  $closeModal.addEventListener("click", (e) => {
    e.stopPropagation();
    offModal();
  });
  $theModal.addEventListener("click", (e) => {
    offModal();
  });
};
export default modalRules;
