const hamburguesa = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion");
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);

document.addEventListener('DOMContentLoaded',()=>{
    MostrarMenu();
    cerrarMenu();
}); /*para que se cargue la pagina aprisa*/

function MostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
       navegacion.classList.toggle('ocultar');
});
}
