// je définis ce qu'est un ShoppingElement dans une classe
// Je mets à disposition cette classe aux autres fichiers par le biais de export
// export / import => système de modules

export class ShoppingElement{
    // new ShoppingElement("Chocolat");
    // new ShoppingElement("Chocolat",3);
    constructor(label,qty=1){
        this.label=label;
        this.qty=qty;
    }
    label="Nouvel élément";
    shoppingDate=undefined;
    qty=1;

    markAsShopped(){
        this.shoppingDate=new Date();
    }

}