document.addEventListener('DOMContentLoaded', function() {
    // Écoutez l'événement de changement sur l'entrée de fichier
    document.getElementById('profileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if(file) {
            // Assurez-vous que le navigateur prend en charge la FileReader API
            if (window.FileReader) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Mettez à jour la photo de profil avec la nouvelle image
                    const profilePicture = document.getElementById('profilePicture');
                    profilePicture.style.backgroundImage = `url(${e.target.result})`;
                };
                reader.readAsDataURL(file);
            } else {
                alert("Votre navigateur ne supporte pas FileReader.");
            }
        }
    });
});