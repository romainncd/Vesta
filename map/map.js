document.addEventListener('DOMContentLoaded', function() {
    window.map = L.map('map').setView([48.8566, 2.3522], 12); // Défini comme variable globale pour y accéder depuis geocode()

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
});

function geocode() {
    var street = document.getElementById('street-input').value;
    var number = document.getElementById('number-input').value;
    var city = document.getElementById('city-input').value;
    var address = `${number} ${street}, ${city}`;
    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
    .then(response => response.json())
    .then(data => {
        if(data.length > 0) {
            var latlng = [data[0].lat, data[0].lon];
            L.marker(latlng).addTo(window.map)
                .bindPopup(address)
                .openPopup();
            window.map.setView(latlng, 13);
        } else {
            alert("Adresse non trouvée");
        }
    })
    .catch(error => {
        console.error('Erreur lors du géocodage:', error);
        alert("Erreur lors de la recherche de l'adresse");
    });
}



