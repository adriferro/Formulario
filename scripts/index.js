
const validarNombre = nombre => {
    if(nombre === ''){
        alert("El nombre no puede estar vacío.");
        return false;
    }
    return true;
}


const validarEmail = email => {}


const validarPswrd = pswrd => {
    if(pswrd.length>7 && pswrd.length<17){
        alert("La contraseña tiene que tener entre 8 y 16 dígitos.");
        return true;
    }
    return false;
}

const validarFormulario = () => {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const pswrd = document.getElementById("pswrd").value;

    return validarNombre(nombre) && validarEmail(email) && validarPswrd(pswrd);
}

document.getElementById("registroForm").onsubmit = () => {
    return validarFormulario();
}

const enviarFormulario = () => {
    if(validarFormulario()){
        return true;
    }else{
        return false;
    }
}