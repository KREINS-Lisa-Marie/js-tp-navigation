document.documentElement.classList.add('js-enabled');

const elementsDeListeLiElements = document.querySelectorAll('.main-nav>li');
const titreMenuPourSousmenu = document.querySelector(`li[class="menu"] a`);
console.log(titreMenuPourSousmenu);
const sousMenuElements = document.querySelectorAll(".sub-menu");

for (const elementsDeListeLiElement of elementsDeListeLiElements) {
    elementsDeListeLiElement.addEventListener("mouseover", montreSousMenu );
    elementsDeListeLiElement.addEventListener("mouseout",cacheSousMenu );
}

function montreSousMenu(){
    if (titreMenuPourSousmenu.textContent==="Maquillage"){
        sousMenuElements[0].classList.remove("hidden");
    }else if (titreMenuPourSousmenu.textContent==="Solaires"){
        sousMenuElements[1].classList.remove("hidden");
}else if (titreMenuPourSousmenu.textContent ==="Parfum"){
        sousMenuElements[2].classList.remove("hidden");
}else{
        console.log("Error! Ce menu n'existe pas.")
    }
}

function cacheSousMenu(){
    if (titreMenuPourSousmenu.textContent==="Maquillage"){
        sousMenuElements[0].classList.add("hidden");
    }else if (titreMenuPourSousmenu.textContent==="Solaires"){
        sousMenuElements[1].classList.add("hidden");
    }else if (titreMenuPourSousmenu.textContent ==="Parfum"){
        sousMenuElements[2].classList.add("hidden");
    }else{
        console.log("Error! Ce menu n'existe pas.")
    }
}









/*
const itemsMenuElements = document.querySelectorAll("ul.main-nav li:first-child");
const sousMenuElements = document.querySelectorAll(".sub-menu li");

for (const sousMenuElement of sousMenuElements) {
    function montreSousMenu() {
        sousMenuElement.classList.remove("hidden");
        sousMenuElement.style.color= "white";
        sousMenuElement.style.backgroundColor = "#850909";
    }
}

for (const itemsMenuElement of itemsMenuElements){
    itemsMenuElement.addEventListener("mouseenter", montreSousMenu);
    itemsMenuElement.addEventListener("mouseover", cacheSousMenu);
    console.log(itemsMenuElement);
}
function cacheSousMenu() {
    sousMenuElements.classList.add("hidden");
}
cacheSousMenu();

 */