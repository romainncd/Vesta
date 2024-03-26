<?php
$serveur = "localhost";
$utilisateur = "votre_nom_utilisateur";
$motdepasse = "votre_mot_de_passe";
$basededonnees = "nom_de_votre_base_de_donnees";

// Connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $motdepasse, $basededonnees);

// Vérifier la connexion
if ($connexion->connect_error) {
    die("La connexion a échoué : " . $connexion->connect_error);
}
echo "Connexion réussie à la base de données";
?>
