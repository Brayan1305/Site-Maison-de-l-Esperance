const inputs = document.querySelectorAll('input[type="checkbox"]');
const elements = document.querySelectorAll('.item-evenement');
const totalAffichage = document.getElementById('total-elements');


function mettreAJourCompteur() {
    let elementsVisibles = 0;
    elements.forEach(el => {
        if (window.getComputedStyle(el).display !== 'none') {
            elementsVisibles++;
        }
    });
    totalAffichage.textContent = elementsVisibles;
}

inputs.forEach(input => {
    input.addEventListener('change', () => {
        setTimeout(mettreAJourCompteur, 10);
    });
});

window.addEventListener('DOMContentLoaded', mettreAJourCompteur);

const recherche = document.getElementById("site-search");
const boutonRecherche = document.getElementById("btn-recherche");

function rechercherDemandes() {

    const texte = recherche.value.toLowerCase();

    elements.forEach(element => {

        if (element.textContent.toLowerCase().includes(texte)) {
            element.style.display = "";
        } else {
            element.style.display = "none";
        }

    });

    mettreAJourCompteur();
}

boutonRecherche.addEventListener("click", rechercherDemandes);

recherche.addEventListener("keyup", function(event){

    if(event.key === "Enter"){
        rechercherDemandes();
    }

});