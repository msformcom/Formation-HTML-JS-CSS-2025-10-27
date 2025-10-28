
// j'attache une fonction (gestionnaire)
// à l'évènement DOMContentLoaded du document
// qui survient quand le html est chargé
document.addEventListener("DOMContentLoaded", function () {
    function addCharacterToScreen(c){
        let ecran=document.getElementById("ecran");
        let content=ecran.innerHTML;
        content=content.replace(/^0+/,"");
        content+=c;
        ecran.innerHTML=content;
    }

    // Recherche des button dans le document avec attribut add-to-screen
    let addToScreenButtons=document.querySelectorAll("button[add-to-screen]");
    // Boucle sur le tableau des button
    for(let i=0;i<addToScreenButtons.length;i++){
        // button en position i
        let button=addToScreenButtons[i];
        // Association du gestionnaire sur click
        button.addEventListener("click",()=>{
            // recherche de la valeur de l'attribut
            let chaine=button.getAttribute("add-to-screen");
            // ajout à l'écran
            addCharacterToScreen(chaine);
        });
    }

 
})






