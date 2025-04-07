const map = L.map('map').setView([51.55278641, -0.05], 11);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// School data
const schools = [
  {
    name: "The Excelsior Academy",
    lat: 51.55278641,
    lng: -0.0697325450807056,
    info: "Rated Outstanding. 1000+ students."
  },
  {
    name: "Tower Hamlets High",
    lat: 51.5155,
    lng: -0.0610,
    info: "Rated Good. Specialises in STEM."
  }
];

// Add markers to map
schools.forEach(school => {
  L.marker([school.lat, school.lng])
    .addTo(map)
    .bindPopup(`<b>${school.name}</b><br>${school.info}`);
});
