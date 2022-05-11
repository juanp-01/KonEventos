document.addEventListener("DOMContentLoaded", function(event) {
    var divSaludos = document.getElementById("saludos");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arraySaludos") == null) {
        array = [];
        localStorage.setItem("arraySaludos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arraySaludos"));
    }

    // Poblando el div que muestra los saludos
    var listadoSaludos = JSON.parse(localStorage.getItem("arraySaludos"));
    var divSaludos = document.getElementById("saludos");
    listadoSaludos.forEach(element => {
        divSaludos.innerHTML = divSaludos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["saludo"] + '</p></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de Saludos
function registrarSaludo() {
    var texto = document.getElementById("texto_saludo");
    var nombre = document.getElementById("nombre");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arraySaludos") == null) {
        array = [];
        localStorage.setItem("arraySaludos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arraySaludos"));
    }

    // Agregando un nuevo saludo al array
    array.push({ "saludo": texto.value, "nombre": nombre.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arraySaludos", JSON.stringify(array));

    // Recuperando el array de saludos del localStorage
    // para volverlo a mostrar
    var listadoSaludos = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los saludos
    var divSaludos = document.getElementById("saludos");

    // Recorriendo el array de saludos que viene del localStorage
    listadoSaludos.forEach(element => {
        // Se añade cada saludo al div como un card
        divSaludos.innerHTML = divSaludos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["saludo"] + '</p></div></div>';
    });
    return false;
}