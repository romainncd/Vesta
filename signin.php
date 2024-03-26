<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$servername = "localhost"; // ou l'adresse de votre serveur MySQL
$username = "votre_nom_d_utilisateur"; // votre nom d'utilisateur pour MySQL
$password = "votre_mot_de_passe"; // votre mot de passe pour MySQL
$dbname = "mon_site_web"; // le nom de votre base de données

// Tentative de connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion
if ($conn->connect_error) {
  die("Échec de la connexion: " . $conn->connect_error);
}
?>
<?php
include 'db.php'; // Incluez la connexion à la base de données

// Récupérez les données du formulaire
$nom_utilisateur = $_POST['nom_utilisateur'];
$email = $_POST['email'];
$mot_de_passe = password_hash($_POST['mot_de_passe'], PASSWORD_DEFAULT); // Hachez le mot de passe

// Préparez la requête SQL pour éviter les injections SQL
$stmt = $conn->prepare("INSERT INTO utilisateurs (nom_utilisateur, email, mot_de_passe) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nom_utilisateur, $email, $mot_de_passe);

// Exécutez la requête
if ($stmt->execute()) {
    echo "Inscription réussie";
} else {
    echo "Erreur : " . $stmt->error;
}

// Fermez la connexion
$stmt->close();
$conn->close();
?>
