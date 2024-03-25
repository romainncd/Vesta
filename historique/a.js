document.addEventListener("DOMContentLoaded", function() {
    const serviceRenduContainer = document.getElementById("serviceRendu");
    const annonceCompleteeContainer = document.getElementById("annonceComplete");

    // Données fictives pour les annonces
    const annoncesServiceRendu = [
        { titre: "Service 1", date: "2024-03-20", prix: 50, prestataire: "John Doe" },
        { titre: "Service 2", date: "2024-03-19", prix: 30, prestataire: "Jane Smith" }
    ];

    const annoncesCompletees = [
        { titre: "Service 3", date: "2024-03-18", prix: 40, prestataire: "Alice Johnson" },
        { titre: "Service 4", date: "2024-03-17", prix: 60, prestataire: "Bob Williams" }
    ];

    // Fonction pour ajouter une annonce à la liste
    function ajouterAnnonce(container, annonce) {
        const annonceElement = document.createElement("div");
        annonceElement.classList.add("annonce");

        annonceElement.innerHTML = `
            <div class="annonce-info">
                <h4>${annonce.titre}</h4>
                <p>Date de Réalisation: ${annonce.date}</p>
                <p>Prix: ${annonce.prix} €</p>
                <p>Nom du Prestataire: ${annonce.prestataire}</p>
            </div>
            <button>Voir Détails</button>
        `;

        annonceElement.querySelector("button").addEventListener("click", function() {
            // Ici, vous pouvez ajouter votre propre logique pour rediriger vers la page de détails de l'annonce
            alert("Rediriger vers la page de détails de l'annonce: " + annonce.titre);
        });

        container.appendChild(annonceElement);
    }

    // Ajouter les annonces de service rendu
    annoncesServiceRendu.forEach(function(annonce) {
        ajouterAnnonce(serviceRenduContainer, annonce);
    });

    // Ajouter les annonces complétées
    annoncesCompletees.forEach(function(annonce) {
        ajouterAnnonce(annonceCompleteeContainer, annonce);
    });
});
