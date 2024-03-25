document.addEventListener('DOMContentLoaded', function() {
    const ajouterCoursBtn = document.getElementById('ajouterCours');
    ajouterCoursBtn.addEventListener('click', ajouterCours);

    function ajouterCours() {
        const coursNom = document.getElementById('cours').value;
        const heureDebut = document.getElementById('heureDebut').value;
        const heureFin = document.getElementById('heureFin').value;
        const jour = document.getElementById('jour').value;
        
        if (!coursNom || !heureDebut || !heureFin) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        const emploiDuTemps = document.getElementById('emploiDuTemps');
        let jourDiv = emploiDuTemps.querySelector(`#${jour}`);
        if (!jourDiv) {
            jourDiv = document.createElement('div');
            jourDiv.id = jour;
            jourDiv.classList.add('jour');
            const jourTitre = document.createElement('h2');
            jourTitre.textContent = jour.charAt(0).toUpperCase() + jour.slice(1);
            jourDiv.appendChild(jourTitre);
            emploiDuTemps.appendChild(jourDiv);
        }

        const coursDiv = document.createElement('div');
        coursDiv.classList.add('cours');
        coursDiv.textContent = `${coursNom} : ${heureDebut} - ${heureFin}`;
        coursDiv.addEventListener('click', function() {
            if (confirm('Supprimer ce cours ?')) {
                jourDiv.removeChild(coursDiv);
                if (jourDiv.querySelectorAll('.cours').length === 0) {
                    emploiDuTemps.removeChild(jourDiv);
                }
            }
        });
        
        jourDiv.appendChild(coursDiv);

        document.getElementById('cours').value = '';
        document.getElementById('heureDebut').value = '';
        document.getElementById('heureFin').value = '';
    }
    
});
