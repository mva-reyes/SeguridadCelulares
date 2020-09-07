function nuevoUsuario(nombreUsuario,usuario,contraseña){
    event.preventDefault();
    var usuarios = [];

    if(usuario == "" && contraseña == ""){
        alert("Rellene los campos");
    } 
    else if (usuario == localStorage.getItem("usuario") && contraseña == localStorage.getItem("contraseña"))
        alert("usuario y contraseña iguales");
    else if (nombreUsuario == ""){
        alert("Ingrese un nombre");
    }
    else if (usuario == ""){
        alert("Ingrese usuario");
    }
    else if (contraseña == ""){
        alert("Ingrese contraseña");
    } else { 
        localStorage.setItem("nombreUsuario", nombreUsuario);
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contraseña", contraseña);
        usuarios.push(nombreUsuario);
        usuarios.push(usuario);
        usuarios.push(contraseña);
        alert("Usuario Registrado con Éxito");
    }  
}

// validar formulario https://www.youtube.com/watch?v=36S19D6kZkc