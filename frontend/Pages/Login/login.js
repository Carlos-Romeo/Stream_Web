document.addEventListener('DOMContentLoaded', function () {
    // Écouteur d'événement sur la soumission du formulaire
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire (envoi de la requête HTTP)

        // Récupération des valeurs des champs
        const email = document.querySelector('.email').value;
        const PasswordHash = document.querySelector('.pwd').value;

        // Création d'un objet avec les données du formulaire
        const formData = {
            email: username,
            passwordHash: PasswordHash
        };

        // Envoi des données au backend pour l'authentification
        fetch("http://localhost:4000/user/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) 
        })
        .then(response => {
            if (response.headers) {
                console.log("ok");
                // La requête a réussi (200 OK)
                // Rediriger l'utilisateur vers la page d'accueil
                window.location.href = '../Acceuil/Acceuil.html'; // Remplacez 'accueil.html' par le chemin de votre page d'accueil
            } else {
                // La requête a échoué (401 Unauthorized ou tout autre code d'erreur)
                // Vous pouvez afficher un message d'erreur à l'utilisateur ou prendre d'autres mesures nécessaires
                console.error("Échec de l'authentification");
            }
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
