<?php
$serveur = "localhost";
$utilisateur = "votre_nom_utilisateur";
$mot_de_passe = "votre_mot_de_passe";
$base_de_donnees = "nom_de_votre_base_de_donnees";

// Connexion à la base de données
$connexion = mysqli_connect($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);

// Vérifier la connexion
if (!$connexion) {
    die("La connexion à la base de données a échoué : " . mysqli_connect_error());
}
?>

<?php
$serveur = "localhost";
$utilisateur = "votre_nom_utilisateur";
$mot_de_passe = "votre_mot_de_passe";
$base_de_donnees = "nom_de_votre_base_de_donnees";

// Connexion à la base de données
$connexion = mysqli_connect($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);

// Vérifier la connexion
if (!$connexion) {
    die("La connexion à la base de données a échoué : " . mysqli_connect_error());
}
?>