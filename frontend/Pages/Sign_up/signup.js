







document.addEventListener('DOMContentLoaded', function () {
    // Écouteur d'événement sur la soumission du formulaire
    document.querySelector('#form').addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du formulaire (envoi de la requête HTTP)

        // Récupération des valeurs des champs
        const pseudo = document.querySelector('.pseudo').value;
        const email = document.querySelector('.email').value;
        const pwd = document.querySelector('.pwd').value;

        // Création d'un objet avec les données du formulaire
        const formData = {
            pseudo: pseudo,
            email: email,
            password: pwd,
        };
        console.log(formData)
        // Vous pouvez maintenant envoyer ces données au serveur via une requête AJAX, par exemple
        // Exemple avec fetch :
        fetch("http://localhost:5000/user/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Gérer la réponse du serveur (par exemple, afficher un message à l'utilisateur)
            console.log(data);
        })
        .catch(error => {
            console.error("Erreur lors de l'envoi des données au serveur:", error);
        });
    });
});
