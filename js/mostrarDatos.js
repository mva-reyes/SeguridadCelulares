function mostrarInfromación(){
    event.preventDefault();
    let nombreUsuario = localStorage.getItem("nombreUsuario");
    let usuario = localStorage.getItem("usuario");
    let contraseña = localStorage.getItem("contraseña");

    document.getElementById("mostrarNombreUsuario").value = nombreUsuario;
    document.getElementById("mostrarUsuario").value = usuario;
    document.getElementById("mostrarContraseña").value = contraseña;
}