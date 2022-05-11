document.addEventListener("DOMContentLoaded", function(event) {
    var divProductos = document.getElementById("productos");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayProductos") == null) {
        array = [];
        localStorage.setItem("arrayProductos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("array"));
    }

    // Poblando el div que muestra los  productos
    var listadoProductos = JSON.parse(localStorage.getItem("arrayProductos"));
    var divProductos = document.getElementById("productos");
    listadoProductos.forEach(element => {
        divProductos.innerHTML = divProductos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre_producto"] + '</h5><p>' + element["producto"] + '</p></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de productos
function registrarProducto() {
    var nombre = document.getElementById("nombre_producto");
    var texto = document.getElementById("texto_producto");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayProductos") == null) {
        array = [];
        localStorage.setItem("arrayProductos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayProductos"));
    }

    // Agregando un nuevo producto al array
    array.push({ "nombre_producto": nombre.value,"texto_producto":texto.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayProductos", JSON.stringify(array));

    // Recuperando el array de productos del localStorage
    // para volverlo a mostrar
    var listadoProductos = JSON.parse(localStorage.getItem("arrayProductos"));

    // Obteniendo el div donde se muestran los productos
    var divProductos = document.getElementById("productos");

    // Recorriendo el array de productos que viene del localStorage
    listadoProductos.forEach(element => {
        // Se añade cada producto al div como un card
        divProductos.innerHTML = divProductos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre_producto"] + '</h5><p>' + element["producto"] + '</p></div></div>';
    });
    document.getElementById("info1productos").style = "display:block;";
    return false;
}