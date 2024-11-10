////// Profile FX: Hover Switch
const profileContainer = document.getElementById("profile-img");
const profileImage = document.querySelector(".profile-image");
const profileMemoji = document.querySelector(".profile-memoji");

// Hover Behavior
profileContainer.addEventListener("mouseover", () => {
  profileImage.style.animation = "bounceOut 0.6s ease forwards";
  profileMemoji.style.animation = "bounceIn 0.6s ease forwards";
});

profileContainer.addEventListener("mouseout", () => {
  profileImage.style.animation = "bounceIn 0.6s ease forwards";
  profileMemoji.style.animation = "bounceOut 0.6s ease forwards";
});

////// Navbar Scroll function
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".sidebar-nav a");

  const options = {
    root: document.getElementById("outer-container"), // Make sure this targets your scrollable container
    rootMargin: "0px",
    threshold: 0.15, // Adjust as needed, 0.6 means 60% of the section must be in view to trigger
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentSection = entry.target.getAttribute("id");

        // Update the nav links
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
          }
        });
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Smooth scroll on click using scrollIntoView
document.querySelectorAll(".sidebar-nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth", // Smooth scroll behavior
      block: "start", // Scrolls to the top of the element
    });
  });
});

function copyToClipboard(element) {
  const url = element.getAttribute("data-url");

  // Kopieren der URL in die Zwischenablage
  navigator.clipboard
    .writeText(url)
    .then(() => {
      const banner = document.getElementById("copy-banner");
      banner.style.display = "block"; // Banner anzeigen
      banner.style.opacity = "1"; // Banner sichtbar machen

      // Banner nach 2 Sekunden ausblenden
      setTimeout(() => {
        banner.style.opacity = "0"; // Banner ausblenden
        setTimeout(() => {
          banner.style.display = "none"; // Banner nicht mehr anzeigen
        }, 300); // Warte auf den Übergang
      }, 2000);
    })
    .catch((err) => {
      console.error("Fehler beim Kopieren: ", err);
    });
}

////// Cursor FX
// Zugriff auf das Kreiselement
const cursorCircle = document.getElementById("cursorCircle");

// Funktion, um die Position des Kreises bei jeder Mausbewegung anzupassen
document.addEventListener("mousemove", (e) => {
  // Platziere den Kreis zentriert um den Mauszeiger
  cursorCircle.style.left = `${e.pageX - 50}px`;
  cursorCircle.style.top = `${e.pageY - 50}px`;
});
