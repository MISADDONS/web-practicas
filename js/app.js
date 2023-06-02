const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll(".navegacion a");



document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
});
 /*para que se cargue la pagina aprisa*/

 function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');
    });

}
       
/*if (navegacion.classList.constains('ocultar')){
            navegacion.classList.remove('ocultar');
        }else}
        navegacion.classList.add('ocultar')
        }*/


function cerrarMenu(){
    enlaces.forEach(enlace) =>{
        enlace.addEventListener('click',(e)=>{
            console.log(e.target.tagName);

        });
    });
}

    

    


