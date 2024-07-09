function validar() {
    // Obtener los valores de los campos de entrada
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Definir los valores preestablecidos
    var emailValido = "usuario@example.com";
    var passwordValido = "1234";

    // Verificar si el correo electrónico y la contraseña son válidos
    if (email.trim() === emailValido && password.trim() === passwordValido) {
        // Redireccionar a la página principal
        window.location.href = "peliculas.html";
    } else {
        // Mostrar mensaje de error
        alert("El correo electrónico o la contraseña son incorrectos.");
    }
}