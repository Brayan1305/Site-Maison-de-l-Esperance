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

