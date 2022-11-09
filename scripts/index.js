const navToggle = document.querySelector(".nav-toogle")
const navMenu = document.querySelector(".nav-menu")
const navMenuItem = document.querySelector(".nav-menu-item")

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible")

    if(navMenu.classList.contains("nav-menu_visible")){
        navMenu.setAttribute("aria-label", "Cerrar menu")
    }else{
        navMenu.setAttribute("aria-label", "Abrir menu")
    }
})


const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')
const numProyects = 0;
let operacion = 0

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        let move = -11
        let moveRestriction = 0;

        if (numProyects>=3)moveRestriction= -(numProyects-3)*11

        if(screen.width<992) {
            moveRestriction = -(numProyects-1)*11
        };

        let posicion  = i

        if (posicion == 1 && operacion>moveRestriction)  operacion += move
        else if(posicion == 0 && operacion<0) operacion -= move

        grande.style.transform = `translateX(${ operacion }%)`

    })
})

