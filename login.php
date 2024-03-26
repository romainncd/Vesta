<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
include 'db.php'; // Incluez la connexion à la base de données

$nom_utilisateur = $_POST['nom_utilisateur'];
$mot_de_passe = $_POST['mot_de_passe'];

// Préparez la requête SQL pour éviter les injections SQL
$stmt = $conn->prepare("SELECT mot_de_passe FROM utilisateurs WHERE nom_utilisateur = ?");
$stmt->bind_param("s", $nom_utilisateur);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($mot_de_passe, $row['mot_de_passe'])) {
        echo "Connexion réussie";
        // Ici, vous pouvez rediriger l'utilisateur vers une autre page ou créer une session
    } else {
        echo "Mot de passe incorrect";
    }
} else {
    echo "Nom d'utilisateur non trouvé";
}

$stmt->close();
$conn->close();
?>
