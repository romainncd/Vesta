// Simuler des données d'annonce
let annoncesData = [];

// Fonction pour gérer le clic sur une annonce
function handleAnnonceClick(annonce) {
    // Encodage des valeurs des paramètres de l'URL
    const titreEncoded = encodeURIComponent(annonce.titre);
    const prixEncoded = encodeURIComponent(annonce.prix);
    const imageEncoded = encodeURIComponent(annonce.image);

    // Construction de l'URL avec les paramètres
    const url = `details_annonce.html?titre=${titreEncoded}&prix=${prixEncoded}&image=${imageEncoded}`;

    // Redirection vers la page details_annonce.html
    window.location.href = url;
}

// Fonction pour générer les annonces dynamiquement
function genererAnnonces() {
    const container = document.getElementById('annonces-container');
    container.innerHTML = '';

    annoncesData.forEach(annonce => {
        const div = document.createElement('div');
        div.classList.add('annonce', annonce.etat);

        // Ajout d'un gestionnaire d'événements au clic sur l'annonce
        div.addEventListener('click', () => handleAnnonceClick(annonce));

        const img = document.createElement('img');
        img.src = annonce.image;
        div.appendChild(img);

        const vignette = document.createElement('div');
        vignette.classList.add('vignette', annonce.etat);
        div.appendChild(vignette);

        const annonceInfo = document.createElement('div');
        annonceInfo.classList.add('annonce-info');
        div.appendChild(annonceInfo);

        const titre = document.createElement('h2');
        titre.textContent = annonce.titre;
        annonceInfo.appendChild(titre);

        const prix = document.createElement('p');
        prix.textContent = 'Prix : ' + annonce.prix;
        annonceInfo.appendChild(prix);

        if (annonce.etat === 'repondu') {
            const personneRepondue = document.createElement('p');
            personneRepondue.textContent = 'Répondu par : ' + annonce.personneRepondue;
            annonceInfo.appendChild(personneRepondue);
        } else if (annonce.etat === 'offres') {
            const utilisateursListe = document.createElement('ul');
            annonce.utilisateurs.forEach(utilisateur => {
                const utilisateurItem = document.createElement('li');
                utilisateurItem.textContent = utilisateur;
                utilisateursListe.appendChild(utilisateurItem);
            });
            annonceInfo.appendChild(utilisateursListe);
        }

        container.appendChild(div);
    });
}

// Appel de la fonction pour générer les annonces au chargement de la page
genererAnnonces();

// Fonction pour afficher le popup
function afficherPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Fonction pour cacher le popup
function cacherPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('annonce-form').reset();
    document.getElementById('image-preview').style.display = 'none';
}

// Fonction pour afficher l'aperçu de l'image sélectionnée
function afficherApercuImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('image-preview').style.display = 'block';
            document.getElementById('image-preview').src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// Gestion de l'événement clic sur le bouton "Créer une annonce"
document.getElementById('creer-annonce').addEventListener('click', afficherPopup);

// Gestion de l'événement clic sur le bouton de fermeture du popup
document.getElementById('close').addEventListener('click', cacherPopup);

// Gestion de l'événement soumission du formulaire d'annonce
document.getElementById('annonce-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const titre = document.getElementById('titre').value;
    const prix = document.getElementById('prix').value;
    const imageInput = document.getElementById('image');
    const image = imageInput.files[0];

    if (titre.trim() === '' || prix.trim() === '' || !image) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const nouvelleAnnonce = {
            image: e.target.result,
            titre: titre,
            prix: prix + '€',
            etat: 'sans-reponse'
        };
        ajouterAnnonce(nouvelleAnnonce);
        cacherPopup();
    };
    reader.readAsDataURL(image);
});

// Fonction pour ajouter une nouvelle annonce
function ajouterAnnonce(annonce) {
    annoncesData.push(annonce);
    genererAnnonces();
}
