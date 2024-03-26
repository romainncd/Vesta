document.getElementById('prevWeek').addEventListener('click', function() {
    // Logique pour afficher la semaine précédente
    alert('Afficher la semaine précédente');
});

document.getElementById('nextWeek').addEventListener('click', function() {
    // Logique pour afficher la semaine suivante
    alert('Afficher la semaine suivante');
});
document.getElementById('ajouterEvenementBtn').addEventListener('click', function() {
    const nomEvenement = document.getElementById('nomEvenement').value;
    const jourEvenement = parseInt(document.getElementById('jourEvenement').value);
    // Assurez-vous que la valeur de l'heure sélectionnée est récupérée correctement
    const plageHoraire = document.getElementById('heureEvenement').selectedOptions[0].text;

    const emploiDuTemps = document.querySelector('.emploi-du-temps tbody');
    const lignes = emploiDuTemps.querySelectorAll('tr');

    lignes.forEach(ligne => {
        // Vérifiez si la première cellule de la ligne contient la plage horaire choisie
        if (ligne.cells[0].textContent === plageHoraire) {
            // Insérez l'événement dans la cellule correspondante
            // Notez que l'indice doit être ajusté pour correspondre à l'organisation de votre tableau
            ligne.cells[jourEvenement].textContent = nomEvenement;
        }
    });
});