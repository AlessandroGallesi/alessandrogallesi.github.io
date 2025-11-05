const backgrounds = [
  'url("foto/naPizza 1.png")',
  'url("foto/Alma de Jana 1.png")',
  'url("foto/LiiT Packaging 1.png")',
  'url("foto/Decameron 1.png")',
  'url("foto/Cartaria 1.png")',
  'url("foto/LiiT Catalogo 1.png")'
];

// 🔗 Elenco delle pagine da aprire (stesso ordine delle foto)
const pages = [
  "documenti/Alessandro Gallesi - Portfolio 2025.pdf",
  "documenti/Alessandro Gallesi - Portfolio 2025.pdf",
  "documenti/Alessandro Gallesi - Portfolio 2025.pdf",
  "documenti/Alessandro Gallesi - Portfolio 2025.pdf",
  "documenti/Alessandro Gallesi - Portfolio 2025.pdf",
  "documenti/Alessandro Gallesi - Portfolio 2025.pdf"
];

let index = 0;
const links = document.querySelectorAll("#lista-foto a");
let interval;

// Cambia sfondo
function cambiaSfondo(i) {
  index = i;
  document.body.style.backgroundImage = backgrounds[index];
  aggiornaEvidenziazione();
}

// Aggiorna evidenziazione
function aggiornaEvidenziazione() {
  links.forEach((link, i) => {
    link.classList.toggle("active", i === index);
  });
}

// Cambio automatico ogni 10s
function startAutoChange() {
  interval = setInterval(() => {
    index = (index + 1) % backgrounds.length;
    cambiaSfondo(index);
  }, 10000);
}

// Hover → cambia sfondo
links.forEach((link, i) => {
  link.addEventListener("mouseenter", () => {
    clearInterval(interval);
    cambiaSfondo(i);
  });

  link.addEventListener("mouseleave", () => {
    startAutoChange();
  });

  // Click → apre la pagina corrispondente
  link.addEventListener("click", (e) => {
    e.preventDefault(); // evita il comportamento predefinito
    window.open(pages[i], "_blank"); // apre in una nuova scheda
    });

});

// Avvio iniziale
cambiaSfondo(0);
startAutoChange();
