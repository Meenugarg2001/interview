document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".sec-04");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function onScroll() {
    if (isInViewport(section)) {
      section.classList.add("show-section");
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});
