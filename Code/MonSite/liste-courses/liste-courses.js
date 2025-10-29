document.addEventListener("DOMContentLoaded", () => {
    // Cette fonction sera exécutée quand le DOM sera chargé
    // Liste des élément de la liste
    let elements = document.querySelectorAll(".done,.not-done");
    function clickOnElement(element) {
        // Intervertir les classes
        if (element.classList.contains("not-done")) {
            element.classList.replace("not-done", "done");
            element.querySelector("button").innerHTML = "O";
        }
        else {
            element.classList.replace("done", "not-done");
            element.querySelector("button").innerHTML = "X";
        }
    }
    for (let i = 0; i < elements.length; i++) {
        // pour chaque élément
        let element = elements[i];
        element.addEventListener("click", () => {
            clickOnElement(element);
        });
    }

    document.querySelector("#add_element").addEventListener("click", () => {
        let divListe = document.getElementById("liste");
        let texte = document.getElementById("new_element").value;
        divListe.innerHTML += `
            <div class="not-done">
                <button id="btn_${texte}">X</button>
                <span>${texte}</span>
            </div>`;
        let newDiv = divListe.querySelector("div:last-child");
        newDiv.addEventListener("click", () => {
            clickOnElement(newDiv);
        })
    });



});