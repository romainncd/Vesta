document.getElementById('profileInput').addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var profileIcon = document.querySelector('.profile-icon');
            profileIcon.style.display = 'none';

            var profileImage = document.getElementById('profileImage');
            profileImage.src = e.target.result;
            profileImage.style.display = 'block';

            var removeIcon = document.getElementById('removeIcon');
            removeIcon.style.display = 'block';

            var editIcon = document.querySelector('.edit-icon');
            editIcon.style.display = 'none'; // Masquer le crayon une fois que la photo de profil est changée
        };

        reader.readAsDataURL(event.target.files[0]);
    }
});

// Masquer le crayon lorsque la souris quitte la zone de profil
document.querySelector('.profile-container').addEventListener('mouseleave', function() {
    var editIcon = document.querySelector('.edit-icon');
    editIcon.style.display = 'none';
});