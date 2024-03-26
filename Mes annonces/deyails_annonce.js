document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const titreAnnonce = params.get('titre');
    const prixAnnonce = params.get('prix');
    const imageAnnonce = params.get('image');

    document.getElementById('titre-annonce').textContent = titreAnnonce;
    document.getElementById('prix-annonce').textContent = 'Prix : ' + prixAnnonce;
    document.getElementById('image-annonce').src = imageAnnonce;
});
