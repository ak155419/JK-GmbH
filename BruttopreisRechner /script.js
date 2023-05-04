const frmBruttorechner = window.document.bruttopreisrechner;
const inpMwst = frmBruttorechner.mwst;
const inpnettoPreis = frmBruttorechner.nettopreis;
console.log(inpnettoPreis.value);



const btnBerechnen = frmBruttorechner.berechnen;
const ausgabe = document.querySelector('#id-ausgabe');

btnBerechnen.addEventListener("click", fBruttoPreisBerechnen);

function fBruttoPreisBerechnen(event) {
    event.preventDefault();
    const nettoPreis = parseFloat(inpnettoPreis.value);
    const mwst = parseFloat(inpMwst.value);
    ausgabe.innerHTML = (1+mwst/100)*nettoPreis;
}