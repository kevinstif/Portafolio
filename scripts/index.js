const navToggle = document.querySelector(".nav-toogle")
const navMenu = document.querySelector(".nav-menu")
const navMenuItem = document.querySelectorAll(".nav-menu-item")
const MenuItem  = document.querySelectorAll('.menu-item')
const skillIcon  = document.querySelectorAll('.skill-icon')

const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')
const numProyects = 0;
let operacion = 0

//Header Navigation buttons hover effects
navMenuItem.forEach( ( items , i )=> {
    navMenuItem[i].addEventListener('click',()=>{

        navMenuItem.forEach( ( items , i )=>{
            navMenuItem[i].classList.remove('nav-menu-item-active')
        })
        navMenuItem[i].classList.add('nav-menu-item-active')
        
        navMenu.classList.toggle("nav-menu_visible")
        if(navMenu.classList.contains("nav-menu_visible")){
            navMenu.setAttribute("aria-label", "Cerrar menu")
        }
    })
})

//Header Navigation button hamburguer menu enable and disable
navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible")

    if(navMenu.classList.contains("nav-menu_visible")){
        navMenu.setAttribute("aria-label", "Cerrar menu")
    }else{
        navMenu.setAttribute("aria-label", "Abrir menu")
    }
})

//Skill icons hover

skillIcon.forEach( ( items , i )=> {
    skillIcon[i].addEventListener('mouseover',()=>{

        skillIcon.forEach( ( items , i )=>{
            skillIcon[i].classList.remove('colored')
        })

        skillIcon[i].classList.add('colored')
        
    })
})

//Move of Galery of proyects

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