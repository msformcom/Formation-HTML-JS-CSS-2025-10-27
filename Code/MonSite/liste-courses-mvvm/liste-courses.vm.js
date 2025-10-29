import { ShoppingElement } from "./shopping-element.js";
import { ShoppingList } from "./shopping-list.js";

// Initialisation de la liste à afficher
// ici => données écrites à la main
let listeAAfficher = new ShoppingList();
listeAAfficher.label = "Ma liste de friandises";
listeAAfficher.description = "Mes bonbons que je vais acheter miam miam";
let element1 = new ShoppingElement();
element1.label = "Chocolat";
element1.qty = 4;
listeAAfficher.addElement(element1);
listeAAfficher.addElement(new ShoppingElement("Gateaux", 6))

function majUI(element, objetAAfficher) {
    // mettre les inner-html  dans l'interface
    // je recherche dans le document tous les éléments avec attribut inner-html
    let innerHtmls = element.querySelectorAll("[inner-html]");
    for (let i = 0; i < innerHtmls.length; i++) {
        let e = innerHtmls[i];
        let propertyName = e.getAttribute("inner-html");
        let valeur = objetAAfficher[propertyName];
        e.innerHTML = valeur;
    }

    let innerJsons = element.querySelectorAll("[inner-json]");
    for (let i = 0; i < innerJsons.length; i++) {
        let e = innerJsons[i];
    
        e.innerHTML = JSON.stringify(objetAAfficher);
    }

    // gestion des clicks
    let clickFunctions = element.querySelectorAll("[click-function]");
    for (let i = 0; i < clickFunctions.length; i++) {
        // objet sur lequel l'attribut click-function est placé
        let e = clickFunctions[i];
        e.addEventListener("click",()=>{
            // en cas de click sur cet objet
            let functionName = e.getAttribute("click-function");
            let laFunction = eval(functionName);
            laFunction(objetAAfficher);
        });

    }

    let innerFors = element.querySelectorAll("[inner-for][for-template]");
    for (let i = 0; i < innerFors.length; i++) {
        let e = innerFors[i];
        let propertyName = e.getAttribute("inner-for");
        let templateId = e.getAttribute("for-template");
        let template = element.getElementById(templateId);
        let elements = objetAAfficher[propertyName];
        e.innerHTML = ""
        // Je parcours la liste des élément à afficher
        for (let v of elements) {
            let t = template.content.cloneNode(true);
            majUI(t, v);
            e.append(t)
        }
    }
}

// click sur élément shopping list
function markAsShopped(e) {
    e.markAsShopped();
    majUI(document, listeAAfficher);
}

// MAJ UI avec les données de listeAAfficher
majUI(document, listeAAfficher);