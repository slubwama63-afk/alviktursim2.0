const fakeWeather = [
  { place: "Alvik", temp: "22°C", condition: "☀️ Soligt" },
  { place: "Äppelviken", temp: "19°C", condition: "🌤 Lätt molnigt" },
  { place: "Traneberg", temp: "18°C", condition: "🌧 Regn" },
  { place: "Bromma", temp: "20°C", condition: "⛅ Halvklart" }
];

function updateWeather() {
  const container = document.getElementById("weather-cards");
  container.innerHTML = "";
  fakeWeather.forEach(wx => {
    const card = document.createElement("div");
    card.className = "wx-card";
    card.innerHTML = `
      <h3>${wx.place}</h3>
      <div class="wx-temp">${wx.temp}</div>
      <p>${wx.condition}</p>
    `;
    container.appendChild(card);
  });
}

// Kör väder direkt vid start
updateWeather();
