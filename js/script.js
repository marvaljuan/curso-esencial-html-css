
/* Debo admitir que estos scripts los investigue por intenet. Al hacer el curso de JS los vuelvo a hacer a modo practica */

/* script para cambiar hoja de estilo */
function toggleTheme(value) {

    var sheets = document
        .getElementsByTagName('link');

    sheets[0].href = value;
}

/* script para colocar y quitar clase .active al menu de Nemium D*/
var elementNav = document.getElementsByClassName("nav-list")[0];
elementNav.addEventListener("click", myFunctionNav);
function myFunctionNav(e) {
        var elemsNav = document.querySelector(".active");
    if(elemsNav !=null) {
    elemsNav.classList.remove("active");
    }
    e.target.className = "active";
    }

/* script para colocar y quitar clase .bullet-active a los bullet de los slider  */
var element = document.getElementsByClassName("slider-bullet-list")[0];
element.addEventListener("click", myFunction);
function myFunction(e) {
        var elems = document.querySelector(".bullet-active");
    if(elems !=null) {
    elems.classList.remove("bullet-active");
    }
    e.target.className = "bullet-active";
    }

/* script para colocar y quitar atributo open */
const $detailsList = document.querySelectorAll('details')
$detailsList.forEach(($details) => {
    $details.querySelector('summary').addEventListener('click', expand)
})
function expand() {
    $detailsList.forEach(($details) => {
    $details.removeAttribute('open')
})
}
