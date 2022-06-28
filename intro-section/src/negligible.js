const negligible = () => {
  const arrowChild = document.querySelector(".Features a");
  const arrow = document.querySelector(".Features");
  const arrowTwoChild = document.querySelector(".Company a");
  const arrowTwo = document.querySelector(".Company");
  const rotateFeatures = document.querySelector(".features-selector");
  const rotateCompany = document.querySelector(".company-selector");
  arrowChild.addEventListener("click", (e) => {
    e.preventDefault();
    arrow.classList.toggle("FeaturesJS");
    rotateFeatures.classList.toggle("features-arrow-down");
  });

  arrowTwoChild.addEventListener("click", (e) => {
    e.preventDefault();
    arrowTwo.classList.toggle("CompanyJS");
    rotateCompany.classList.toggle("company-arrow-down");
  });
};
export default negligible;
