
let boton = document.getElementById("icono1");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(){
    if(contador==0){
            enlaces.className = ("enlaces dos")
            contador=1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador=0;
    }
});

ScrollReveal().reveal('.header2', { delay: 500 });
ScrollReveal().reveal('.container-items', { delay: 500 });
ScrollReveal().reveal('.social', { delay: 500 });
ScrollReveal().reveal('.footer', { delay: 500 });