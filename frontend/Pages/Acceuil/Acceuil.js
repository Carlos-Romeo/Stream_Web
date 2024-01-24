fetch("http://localhost:5000/film/recupfilm" )/* { 
   method: 'GET', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(filmData) 
 } ) */
.then((response )=> {  return response.json()})
/* .then(data => {
    // Gérer la réponse du serveur (par exemple, afficher un message à l'utilisateur)
    console.log(data);
})  */
.then((film) => {
    console.log(film);
    for(const tit of film){
        const newfilm = document.querySelector(".titre")
        newfilm.innerhtml = tit.Duree;
        
    }
 })