const departement =[
    "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "2A", "2B", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "971", "972", "973", "974", "976"
];

const blocDept = document.getElementById('bloc-departements');
const styleFiltresCSS = document.createElement('style');
document.head.appendChild(StyleFiltresCSS);

departement.forEach(dept =>{
    const input = document.createElement('input')
        input.type = 'checkbox'
        input.id = 'filtre-dept${dept}';
        input.style.display = 'none';
        document.body.inserBefore(input, document.body.firstChild);

        const divBouton = document.createElement('div');
        divBouton.className = 'bouton-filtre';
        const label = document.createElement('label');
        label.htmlFor = 'filtre-dept${dept}';
        label.textContent = dept;
        divBouton.appendChild('label');
        blocDept.appendChild(divBouton);

        styleFiltresCSS.sheet.insertRule('#filtre-dept${dept}:checked ~ .conteneur-evenements .item-evenement:not(dept${dept}) { display: none; }', 0);
        styleFiltresCSS.sheet.insertRule('#filtre-dept${dept}:checked ~ .div-principale label[for="filtre-dept${dept}"] { background-color: #007acc; color white; font-weight: bold;}',0);
})

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

