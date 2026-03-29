const yearTarget = document.getElementById("current-year");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const printButton = document.querySelector("[data-print-resume]");
if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
