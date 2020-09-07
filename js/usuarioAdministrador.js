function mostrarInfromación(){
    event.preventDefault();
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    let usuario = localStorage.getItem("usuario");
    let contraseña = localStorage.getItem("contraseña");

    document.getElementById("mostrarNombreUsuario").value = nombreUsuario;
    document.getElementById("mostrarUsuario").value = usuario;
    document.getElementById("mostrarContraseña").value = contraseña;
}

function modificarInformacion(mostrarNombreUsuario, mostrarUsuario, mostrarContraseña) {
    event.preventDefault();

    if(mostrarNombreUsuario == ""){
        alert("Ingrese Nombre del Usuario");
    }else if(mostrarNombreUsuario != null){
        if(mostrarNombreUsuario != localStorage.getItem("nombreUsuario")){
            localStorage.setItem("nombreUsuario", mostrarNombreUsuario);
            alert("Nombre Usuario Modificado");
        }
    }

    if(mostrarUsuario == ""){
        alert("Ingrese el Usuario");
    }else if(mostrarUsuario != null){
        if(mostrarUsuario != localStorage.getItem("usuario")){
            localStorage.setItem("usuario", mostrarUsuario);
            alert("usuario Modificado");
        }
    }

    if(mostrarContraseña == ""){
        alert("Ingrese una Contraseña");
    }else if(mostrarContraseña != null){
        if(mostrarContraseña != localStorage.getItem("contraseña")){
            localStorage.setItem("contraseña", mostrarContraseña);
            alert("Contraseña Modificada");
        }
    }
}

function limpiarCampos(){
    mostrarNombreUsuario = "";
    mostrarUsuario = "";
    mostrarContraseña = "";
}