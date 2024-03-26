// Fonction pour ajouter une nouvelle transaction à la liste
function addTransaction(type, amount, details) {
    const transactionList = document.getElementById('transactions-list');
    const transactionItem = document.createElement('li');
    transactionItem.classList.add('transaction');
    transactionItem.classList.add(type);
    
    const typeSpan = document.createElement('span');
    typeSpan.classList.add('transaction-type');
    typeSpan.textContent = type;
    
    const amountSpan = document.createElement('span');
    amountSpan.classList.add('transaction-amount');
    amountSpan.textContent = amount;
    
    const detailsSpan = document.createElement('span');
    detailsSpan.classList.add('transaction-details');
    detailsSpan.textContent = details;
    
    transactionItem.appendChild(typeSpan);
    transactionItem.appendChild(amountSpan);
    transactionItem.appendChild(detailsSpan);
    
    transactionList.appendChild(transactionItem);
}

// Ajouter une nouvelle transaction (juste pour la démonstration)
addTransaction('received', '+$100.00', 'Vente de service X');
addTransaction('spent', '-$50.00', 'Achat de service Y');

// Dans le fichier JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const editBtn = document.getElementById("edit-bank-info-btn");
    const bankInfoForm = document.getElementById("bank-info-form");

    // Lorsque l'utilisateur clique sur le bouton de modification
    editBtn.addEventListener("click", function() {
        // Afficher le formulaire de modification
        bankInfoForm.style.display = "block";
        // Vous pouvez ajouter d'autres logiques ici, par exemple pour récupérer les données existantes et les pré-remplir dans le formulaire
    });

    // Vous pouvez ajouter des écouteurs d'événements pour gérer la soumission du formulaire et le traitement des données
});