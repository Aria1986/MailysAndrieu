const pointeurCarte = document.getElementById('carte');
const carte = document.getElementById('projetCarte');
const femme = document.getElementById('woman');

pointeurCarte.addEventListener('click',afficherProjet)
femme.addEventListener('click',afficherProjet)

function afficherProjet(event){
    console.log('afficher projet1')
    carte.style.display='block';
}