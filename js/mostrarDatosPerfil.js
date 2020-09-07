function mostrarDatosPerfil(){
    event.preventDefault();
    let nombre = "Administrador";
    let usuario = "Admin";
    let correo = "admin@celcloud.com"
    let contraseña = "root";
    
    document.getElementById("nombre").value = nombre;
    document.getElementById("usuario").value = usuario;
    document.getElementById("correo").value = correo;
    document.getElementById("contraseña").value = contraseña;

    document.getElementById("nombre").disabled = true;
    document.getElementById("usuario").disabled = true;
    document.getElementById("correo").disabled = true;
    document.getElementById("contraseña").disabled = true;
}

function limpiarDatosPerfil(){
    document.getElementById("nombre").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("contraseña").value = "";

    document.getElementById("nombre").disabled = false;
    document.getElementById("usuario").disabled = false;
    document.getElementById("correo").disabled = false;
    document.getElementById("contraseña").disabled = false;
}