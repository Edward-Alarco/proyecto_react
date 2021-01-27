//BTNS
var proveedor = document.getElementById('nuevoProveedor');
var volverLogin = document.getElementById('volverLogin');
//CONTENTS
var primerForm = document.getElementsByClassName('contenido-formulario')[0];
var segundoForm = document.getElementsByClassName('contenido-formulario-proveedor')[0];
//CREDITS
var creditos = document.getElementById('creditosBajos');

proveedor.addEventListener('click',function(e){
    e.preventDefault();
    primerForm.classList.remove("active");
    segundoForm.classList.add("active");
    creditos.innerText = '© Merck 2019 | Hecho por InVitro'
});

volverLogin.addEventListener('click',function(e){
    e.preventDefault();
    primerForm.classList.add("active");
    segundoForm.classList.remove("active");
    creditos.innerText = '© Merck 2019'
});