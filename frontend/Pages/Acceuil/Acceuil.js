
fetch("http://localhost:5000/film/recupFilm" )
.then(response =>  response.json())
.then(data => {
    film= data.film;

/*     const newfilm = document.querySelector(".titre") */
    film.forEach((titre) => {
        const newfilm = document.querySelector(".titre")
        newfilm.innerHTML = `${titre}`;
        
    });
})
/* .then(data=> console.log(data)) */

/* .then(film =>{
        for(let tit of film){ */
/*             let optionElt = document.createElement('option');
            optionElt.textContent = myCategorie.name_categorie; */
/*             let newfilm = document.querySelector(".titre")
            newfilm.innerHTML = tit.titre; */
/*             articlecategorie.appendChild(optionElt); */
/*         }
    }); */







/* { 
    
   method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(filmData) 
 } ) */

/* .then(data => {
    // Gérer la réponse du serveur (par exemple, afficher un message à l'utilisateur)
    console.log(data);
})  */
/* .then((film) => {
    console.log(film); */
/*     for(const tit of film){
        const newfilm = document.querySelector(".titre")
        newfilm.innerhtml = tit.Duree;
        
    } */
/*  }) */