function loadMessages(contact) {
    document.getElementById("current-contact").innerText = contact;
    // Simulation de chargement des messages depuis le serveur
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = ""; // Effacer les messages précédents
    setTimeout(() => {
        chatMessages.innerHTML += `
            <div class="message incoming">Hello ${contact}!</div>
            <div class="message incoming">How are you?</div>
        `;
    }, 500);
}

function sendMessage() {
    const messageInput = document.getElementById("message-input").value;
    const currentContact = document.getElementById("current-contact").innerText;
    const chatMessages = document.getElementById("chat-messages");
    const newMessage = `<div class="message me">${messageInput}</div>`;
    chatMessages.innerHTML += newMessage;
    document.getElementById("message-input").value = ""; // Effacer le champ d'entrée après l'envoi du message
}
function sendMessage() {
    const messageInput = document.getElementById("message-input").value.trim(); // Trim pour supprimer les espaces vides
    if (messageInput !== "") {
        const currentContact = document.getElementById("current-contact").innerText;
        const chatMessages = document.getElementById("chat-messages");
        const newMessage = `<div class="message me">${messageInput}</div>`;
        chatMessages.innerHTML += newMessage;
        document.getElementById("message-input").value = ""; // Effacer le champ d'entrée après l'envoi du message
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    messageInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter" && !e.shiftKey) { // Vérifie si la touche appuyée est Entrée et qu'aucune touche Shift n'est enfoncée
            e.preventDefault(); // Empêche le comportement par défaut (saut de ligne dans le textarea)
            sendMessage();
        }
    });
    sendButton.addEventListener("click", function() {
        sendMessage();
    });
});

function sendMessage() {
    const messageInput = document.getElementById("message-input").value.trim(); // Trim pour supprimer les espaces vides
    if (messageInput !== "") {
        const currentContact = document.getElementById("current-contact").innerText;
        const chatMessages = document.getElementById("chat-messages");
        const newMessage = `<div class="message me">${messageInput}</div>`;
        chatMessages.innerHTML += newMessage;
        document.getElementById("message-input").value = ""; // Effacer le champ d'entrée après l'envoi du message
        // Ajouter la classe 'sent' pour déclencher l'animation
        const sentMessage = chatMessages.lastElementChild;
        sentMessage.classList.add('sent');
    }
}