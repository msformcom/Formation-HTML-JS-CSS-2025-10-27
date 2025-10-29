import { ShoppingElement } from "./shopping-element.js";
import { ShoppingList } from "./shopping-list.js";

// fetchData("/data.json");
export function fetchData(url){
    // le résultat de la fonction n'est pas immédiatement disponible
    // asynchrone
    // j'obtiens immediatement un objet promise
    let promiseReponse=fetch(url);
    promiseReponse.then(r=>{
        // r=> réponse du server
        r.json() // Nouvelle opération asynchrone => transformer la réponse en objet
        .then(o=>{
            // o est l'objet qui contient les données
        })

    }); // Fonction exécutée quand la réponse sera donnée
    promiseReponse.catch(err=>{})// Fonction exécutée si erreur pendant l'opération
}

// Design pattern async/await => async = asynchrone
export async function fetchDataAsync(url){
    let r=await fetch(url); // await attend le résultat de la promesse avant de contnuer le code
    let o=await r.json(); // Quel classe / type => DTO => Data Transfert Object
    let liste=new ShoppingList(); // POCO => Plain Old CLR Object => POJO => Plain Old Java Object
    // mapping => transforme le DTO en POCO
    liste.label=o.nom;
    liste.creationDate=new Date(o.date);
    liste.description=o.description;
    // map => creation d'un nouveau tableau à partir d'un tableau existant
    liste.elements=o.elements.map(e=>{
        let se=new ShoppingElement(e.nom,e.qty);
        se.shoppingDate=e.shoppingDate ? new Date(e.shoppingDate) :undefined;
        return se;
    });
    return liste;

}