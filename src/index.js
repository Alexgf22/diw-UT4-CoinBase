function themeDarkContacto(){
    // Página contacto
    var fieldsetContacto = document.getElementById("formulario-contacto__fieldset--darkmode");
    fieldsetContacto.classList.toggle("formulario-contacto__fieldset--oscuro");

    var mainContacto = document.getElementById("main-pagina-contacto--darkmode");
    mainContacto.classList.toggle("main-pagina-contacto--oscuro");

    
}


function themeDarkInicioSesion() {
    // Página inicio sesión
    var fieldsetInicioSesion = document.getElementById("form-inicio-sesion__fieldset--darkmode");
    fieldsetInicioSesion.classList.toggle("form-inicio-sesion__fieldset--oscuro");

    var mainInicioSesion = document.getElementById("main-pagina-inicio-sesion--darkmode");
    mainInicioSesion.classList.toggle("main-pagina-inicio-sesion--oscuro");
}




function themeDarkRegistro() {
    // Página registro
    var fieldsetRegistro = document.getElementById("form-registro__fieldset--darkmode");
    fieldsetRegistro.classList.toggle("form-registro__fieldset--oscuro");

    var mainRegistro = document.getElementById("main-pagina-registro--darkmode");
    mainRegistro.classList.toggle("main-pagina-registro--oscuro");

}



function themeDarkProducto() {
    // Página producto
    var contenedorProducto = document.getElementById("section__contenedor-producto--darkmode");
    contenedorProducto.classList.toggle("section__contenedor-producto--oscuro");

    var mainProducto = document.getElementById("main-pagina-producto--darkmode");
    mainProducto.classList.toggle("main-pagina-producto--oscuro");


}