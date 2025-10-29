import { ShoppingElement } from "./shopping-element.js";
import { ShoppingList } from "./shopping-list.js";

// Initialisation de la liste à afficher
// ici => données écrites à la main
let listeAAfficher=new ShoppingList();
 listeAAfficher.label="Ma liste de friandises";
 listeAAfficher.description="Mes bonbons que je vais acheter miam miam";
 let element1=new ShoppingElement();
 element1.label="Chocolat";
 element1.qty=4;
listeAAfficher.addElement(element1);
listeAAfficher.addElement(new ShoppingElement("Gateaux",6))

function majUI(listeAAfficher){
    // mettre les inner-html  dans l'interface
    // je recherche dans le document tous les éléments avec attribut inner-html
    let innerHtmls=document.querySelectorAll("[inner-html]");
    for(let i=0;i<innerHtmls.length;i++){
        let e=innerHtmls[i];
        let propertyName=e.getAttribute("inner-html");
        let valeur=listeAAfficher[propertyName];
        e.innerHTML=valeur;
    }

    let innerJsons=document.querySelectorAll("[inner-json]");
    for(let i=0;i<innerJsons.length;i++){
         let e=innerJsons[i];
        e.innerHTML=JSON.stringify(listeAAfficher);
    }
}

// MAJ UI avec les données de listeAAfficher
majUI(listeAAfficher);