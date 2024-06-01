function isValidEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // estructura texto@texto.texto
    return emailPattern.test(email);
}

function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}


function resetErrorMessages() {
    //console.log("voy a limpiar los divs");
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element)=> {
        element.innerText = "";
    });
   // console.log("ya limpie los divs");
}


    


document.addEventListener("DOMContentLoaded", ()=>{
const form= document.getElementById("loginform");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    resetErrorMessages();

    //validar los campos
    console.log("Estoy por entrar...");
 
 let username = document.getElementById("username").value.trim();
 let email= document.getElementById("email").value.trim ();
 let password = document.getElementById("password").value.trim ();

 let isValid= true

 if (username === "") {
    displayErrorMessage ("usernameError", "Por favor ingrese un usuario.");
    isValid = false
 }

 if (!isValidEmail (email)){
    displayErrorMessage ("emailError", "Por favor ingrese un correo electrónico válido");
    isValid = false;
 }

 if (password.length < 6) {
    displayErrorMessage ("passwordError", "La contraseña debe tener al menos 6 caracteres.");
    isValid = false;
 }

 if (isValid) {
     alert ("Formulario enviado exitosamente");
 }

});

})
