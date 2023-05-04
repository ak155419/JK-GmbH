
/* document.getElementById("changeColorBtn").addEventListener("click", function(){
var color = document.getElementById("colorInput").value;
document.body.style.backgroundColor = color;
    }); */

    const frmFarbwahl = window.document.farbwahl;
    const inpFarbe = frmFarbwahl.farbe;
    const btnNeu = frmFarbwahl.neu;
    btnNeu.addEventListener("click", farbeSetzen);

    function farbSetzen(event){
        event.preventDefault();
        let farbe = inpFarbe.value;
        document.body.style.background = farbe; 
    }
