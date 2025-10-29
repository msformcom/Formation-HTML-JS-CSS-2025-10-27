
// j'attache une fonction (gestionnaire)
// à l'évènement DOMContentLoaded du document
// qui survient quand le html est chargé
document.addEventListener("DOMContentLoaded", function () {
    let ecran = document.getElementById("ecran");
    function addCharacterToScreen(c) {
        let content = ecran.innerHTML;
        content = content.replace(/^0+/, "");
        content += c;
        ecran.innerHTML = content;
    }

    // addClickEventToSelection("button[calculate-result]",()=>{})
    function addClickEventToSelection(s, f) {
        let selection = document.querySelectorAll(s);
        for (let i = 0; i < selection.length; i++) {
            let element = selection[i];
            element.addEventListener("click",
                () => f(element))

        }
    }

    addClickEventToSelection("button[clear-last]", (e) => {
        ecran.innerHTML =ecran.innerHTML.substring(0,ecran.innerHTML.length-1);
        if(!ecran.innerHTML){
            ecran.innerHTML="0";
        }

    });

    addClickEventToSelection("button[clear-screen]", (e) => {
        ecran.innerHTML = "0";
    });

    addClickEventToSelection("button[calculate-result]", (e) => {
        ecran.innerHTML = eval(ecran.innerHTML);
    });

    addClickEventToSelection("button[add-to-screen]", (e) => {
        let chaine = e.getAttribute("add-to-screen");
        // ajout à l'écran
        addCharacterToScreen(chaine);
    });

    // let equalsButtons=document.querySelectorAll("button[calculate-result]");
    // for(let i=0;i<equalsButtons.length;i++){
    //     let button=equalsButtons[i];
    //     button.addEventListener("click",()=>{
    //         ecran.innerHTML=eval(ecran.innerHTML);
    //     });
    // }

    // Recherche des button dans le document avec attribut add-to-screen
    // let addToScreenButtons=document.querySelectorAll("button[add-to-screen]");
    // // Boucle sur le tableau des button
    // for(let i=0;i<addToScreenButtons.length;i++){
    //     // button en position i
    //     let button=addToScreenButtons[i];
    //     // Association du gestionnaire sur click
    //     button.addEventListener("click",()=>{
    //         // recherche de la valeur de l'attribut
    //         let chaine=button.getAttribute("add-to-screen");
    //         // ajout à l'écran
    //         addCharacterToScreen(chaine);
    //     });
    // }


})






