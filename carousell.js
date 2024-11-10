////// Spezifische Karussell Fade-In-Funktion mit Rotation
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".card-carousell");

  const carouselObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          carousel.classList.add("fade-in"); // Startet die Einblendung
          startRotation(); // Startet die Karussell-Rotation
          carouselObserver.unobserve(carousel); // Beobachtung beenden
        }
      });
    },
    { threshold: 0.2 }
  );

  if (carousel) carouselObserver.observe(carousel);
});

const mobileQuery = window.matchMedia("(max-width: 768px)");

function updateImagesSrc(e) {
  const cruiseImage = document.getElementById("cruiseImage");
  const koreahikeImage = document.getElementById("koreahikeImage");
  const sleepoverImage = document.getElementById("sleepoverImage");
  const hanbokImage = document.getElementById("hanbokImage");

  if (e.matches) {
    cruiseImage.src = "img/assets/img-cruise-mobile.jpg";
    koreahikeImage.src = "img/assets/img-korea_hike-mobile.jpg";
    sleepoverImage.src = "img/assets/img-sleepover-mobile.jpg";
    hanbokImage.src = "img/assets/img-korea_hanbok-mobile.jpg";
    console.log("images switched into mobile");
  } else {
    cruiseImage.src = "img/assets/img-cruise.jpg";
    koreahikeImage.src = "img/assets/img-korea_hike.jpg";
    sleepoverImage.src = "img/assets/img-sleepover.jpg";
    hanbokImage.src = "img/assets/img-korea_hanbok.jpg";
    console.log("images switched into desktop");
  }
}

updateImagesSrc(mobileQuery);

// Event-Listener only for Media Query-changes
mobileQuery.addEventListener("change", updateImagesSrc);

////// Card-Img-Carousell
let currentIndex = -1;
const cardSections = document.querySelectorAll(".card-carousell-section");
const indicatorDots = document.querySelectorAll(
  ".card-carousell-indicator-dot"
);
let intervalId; // Variable zum Speichern des Intervalls

function showSection(index) {
  // Entferne die aktive Klasse von allen Indikatoren
  cardSections.forEach((cardSection, i) => {
    cardSection.style.opacity = 0; // macht die vorherige Sektion unsichtbar
    indicatorDots[i].classList.remove("active");
  });

  // Zeige die neue Sektion und hebe den neuen Punkt hervor
  cardSections[index].style.opacity = 1;
  indicatorDots[index].classList.add("active");
}

// Funktion zum Starten der Rotation mit einem kürzeren ersten Timeout
function startRotation() {
  // Erstes Bild sofort anzeigen
  showSection(0);
  currentIndex = 0;

  // Erstes Timeout mit verkürzter Wartezeit (z. B. 2 Sekunden)
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % cardSections.length;
    showSection(currentIndex);

    // Danach das reguläre Intervall für die Rotation starten
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % cardSections.length;
      showSection(currentIndex);
    }, 5000);
  }, 7000); // Kürzerer erster Wechsel (hier 7 Sekunden)
}
