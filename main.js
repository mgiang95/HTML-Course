////// Dropdown-Toggle-Funktion
function toggleDropdown(element) {
  const dropdown = element.parentElement;
  const content = dropdown.querySelector(".dropdown-content");

  if (dropdown.classList.contains("open")) {
    content.style.maxHeight = 0;
    content.style.opacity = 0;
    content.style.margin = 0;
    dropdown.classList.remove("open");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = 1;
    content.style.margin = "0 0 32px 0";
    dropdown.classList.add("open");
  }
}

////// Scroll to Top Button
document.addEventListener("DOMContentLoaded", function () {
  function createScrollTopButton() {
    const scrollTopButton = document.createElement("a");
    scrollTopButton.href = "#top";
    scrollTopButton.className = "scroll-top";
    scrollTopButton.textContent = "↑";
    document.body.appendChild(scrollTopButton);

    // Zeige oder verstecke den Button beim Scrollen
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        scrollTopButton.classList.add("show"); // Einblenden
      } else {
        scrollTopButton.classList.remove("show"); // Ausblenden
      }
    });

    // Smooth Scroll to Top
    scrollTopButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  createScrollTopButton();
});

////// Allgemeine Fade-In-Funktion
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in-on-scroll");

  const generalObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => generalObserver.observe(element));
});

////// Card Project Hover FX
// Wähle alle .card-project-Elemente aus
const cardProjects = document.querySelectorAll(".card-project");

// Durchlaufe jedes Element und füge die Events hinzu
cardProjects.forEach((cardProject) => {
  const tapestry = cardProject.closest(".tapestry");

  cardProject.addEventListener("mouseover", () => {
    tapestry.classList.add("hovered");
  });

  cardProject.addEventListener("mouseleave", () => {
    tapestry.classList.remove("hovered");
  });
});
