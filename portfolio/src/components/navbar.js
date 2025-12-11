// Récupère le conteneur
const app = document.getElementById("app");

// Création de la navbar
const nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.background = "#333";
nav.style.padding = "10px";
nav.style.color = "white";

// Logo
const logo = document.createElement("div");
logo.textContent = "MonSite";
logo.style.fontSize = "20px";

// Liste de liens
const ul = document.createElement("ul");
ul.style.display = "flex";
ul.style.gap = "20px";
ul.style.listStyle = "none";
ul.style.margin = "0";
ul.style.padding = "0";

// Les liens
const pages = ["Accueil", "À propos", "Contact"];

pages.forEach(text => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = "#" + text.toLowerCase().replace(" ", "");
    a.style.color = "white";
    a.style.textDecoration = "none";

    li.appendChild(a);
    ul.appendChild(li);
});

// Assemble tout
nav.appendChild(logo);
nav.appendChild(ul);
app.appendChild(nav);
