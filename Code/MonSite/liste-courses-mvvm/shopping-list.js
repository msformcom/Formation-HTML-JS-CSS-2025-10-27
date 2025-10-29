import { ShoppingElement } from "./shopping-element.js";

export class ShoppingList{
    label ="Nouvelle liste";
    description="";
    creationDate=new Date();
    elements=[]; // ou new Array() => plusieurs éléments

    
    addElement(e=new ShoppingElement("Nouvel élément")){

        this.elements.push(e);
    }
    removeElement(element){
        let indexDeElementASupprimer=this.elements.indexOf(element);
        this.elements.splice(indexDeElementASupprimer,1);
    }

    clearDoneElements(){
        this.elements=this.elements.filter(e=>!e.shoppingDate);
    }


}