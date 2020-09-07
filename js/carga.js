window.onload = function(){
	var contendor = document.getElementById('contenedor_carga');
	contendor.style.visibility= 'hidden';
	contendor.style.opacity = '3';
	var nombre = localStorage.getItem("nombreUsuario");
    document.getElementById("mostrarDato1").innerHTML = nombre;
    document.getElementById("mostrarDato2").innerHTML = nombre;
}