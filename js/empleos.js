document.addEventListener("DOMContentLoaded", function(event) {
    var divEmpleos = document.getElementById("empleos");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayEmpleos") == null) {
        array = [];
        localStorage.setItem("arrayEmpleos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayEmpleos"));
    }

    // Poblando el div que muestra los saludos
    var listadoEmpleos = JSON.parse(localStorage.getItem("arrayEmpleos"));
    var divEmpleos = document.getElementById("empleos");
    listadoEmpleos.forEach(element => {
        divEmpleos.innerHTML = divEmpleos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' Aplica a:</h5><h5> Cargo: '+element["cargo"]+'</h5><p>' + element["empleos"] + '</p></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de Saludos
function registrarEmpleo() {
    var texto = document.getElementById("texto_empleos");
    var nombre = document.getElementById("nombre");
    var cargo = document.getElementById("cargo");
    

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayEmpleos") == null) {
        array = [];
        localStorage.setItem("arrayEmpleos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayEmpleos"));
    }

    // Agregando un nuevo saludo al array
    array.push({ "empleos": texto.value, "nombre": nombre.value, "cargo": cargo.value});

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayEmpleos", JSON.stringify(array));

    // Recuperando el array de saludos del localStorage
    // para volverlo a mostrar
    var listadoEmpleos = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los saludos
    var divEmpleos = document.getElementById("empleos");

    // Recorriendo el array de saludos que viene del localStorage
    listadoEmpleos.forEach(element => {
        // Se añade cada saludo al div como un card
        divEmpleos.innerHTML = divEmpleos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' Aplica a:</h5><h5> Cargo: '+element["cargo"]+'</h5><p>' + element["empleos"] + '</p></div></div>';
    });
    return false;
}