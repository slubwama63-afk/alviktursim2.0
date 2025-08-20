const ICONS = {
  Sol: "☀️",
  Moln: "⛅",
  Regn: "🌧️",
  Åska: "⛈️",
  Snö: "❄️",
  Dimma: "🌫️",
  Blåsigt: "💨",
};

const PLATSER = [
  "Alvik",
  "Björkviken",
  "Sjöstrand",
  "Höjdhagen",
  "Lillängen",
];

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function skapaVader(plats) {
  const typer = Object.keys(ICONS);
  const typ = typer[rnd(0, typer.length - 1)];
  let temp = rnd(0, 25);
  return { plats, typ, temp, vind: rnd(1, 10), fukt: rnd(30, 90) };
}

function renderKort(data) {
  const card = document.createElement("div");
  card.className = "wx-card";
  card.innerHTML = `
    <div><span class="wx-temp">${data.temp}°</span> ${ICONS[data.typ]} ${data.typ}</div>
    <div><small>${data.plats}</small></div>
    <div>Vind: ${data.vind} m/s · Fukt: ${data.fukt}%</div>
  `;
  return card;
}

function uppdatera() {
  const readout = document.getElementById("readout");
  readout.innerHTML = "";
  const val = document.getElementById("place").value;
  const platser = val === "Alla" ? PLATSER : [val];
  platser.forEach((p) => readout.appendChild(renderKort(skapaVader(p))));
}

function init() {
  document.getElementById("year").textContent = new Date().getFullYear();
  const sel = document.getElementById("place");
  sel.innerHTML = `<option>Alla</option>` + PLATSER.map(p => `<option>${p}</option>`).join("");
  document.getElementById("refresh").addEventListener("click", uppdatera);
  sel.addEventListener("change", uppdatera);
  uppdatera();
}

document.addEventListener("DOMContentLoaded", init);
