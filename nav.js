const mobileNav = document.querySelector(".mobile-nav");
const toggleBtn = document.querySelector(".toggle");
const h1 = document.querySelector(".hey");

toggleBtn.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute("data-visible");

  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", true);
    h1.setAttribute("data-hey", false);
  } else if (visibility === "true") {
    mobileNav.setAttribute("data-visible", false);
    h1.setAttribute("data-hey", true);
  }
});
