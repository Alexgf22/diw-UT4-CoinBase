function themeDarkCabecera() {
    // Header página
    var cabecera = document.getElementById("cabecera--darkmode");
    cabecera.classList.toggle("cabecera--oscuro");
}
function themeDarkPiePagina() {
    // Footer página
    var footer = document.getElementById("pie-pagina--darkmode");
    footer.classList.toggle("pie-pagina--oscuro");
}
function themeDarkContacto() {
    themeDarkCabecera();
    themeDarkPiePagina();
    // Página contacto
    var fieldsetContacto = document.getElementById("formulario-contacto__fieldset--darkmode");
    fieldsetContacto.classList.toggle("formulario-contacto__fieldset--oscuro");
    var mainContacto = document.getElementById("main-pagina-contacto--darkmode");
    mainContacto.classList.toggle("main-pagina-contacto--oscuro");
}
function themeDarkInicioSesion() {
    themeDarkCabecera();
    themeDarkPiePagina();
    // Página inicio sesión
    var fieldsetInicioSesion = document.getElementById("form-inicio-sesion__fieldset--darkmode");
    fieldsetInicioSesion.classList.toggle("form-inicio-sesion__fieldset--oscuro");
    var mainInicioSesion = document.getElementById("main-pagina-inicio-sesion--darkmode");
    mainInicioSesion.classList.toggle("main-pagina-inicio-sesion--oscuro");
}
function themeDarkRegistro() {
    themeDarkCabecera();
    themeDarkPiePagina();
    // Página registro
    var fieldsetRegistro = document.getElementById("form-registro__fieldset--darkmode");
    fieldsetRegistro.classList.toggle("form-registro__fieldset--oscuro");
    var mainRegistro = document.getElementById("main-pagina-registro--darkmode");
    mainRegistro.classList.toggle("main-pagina-registro--oscuro");
}
function themeDarkProducto() {
    themeDarkCabecera();
    themeDarkPiePagina();
    // Página producto
    var contenedorProducto = document.getElementById("section__contenedor-producto--darkmode");
    contenedorProducto.classList.toggle("section__contenedor-producto--oscuro");
    var mainProducto = document.getElementById("main-pagina-producto--darkmode");
    mainProducto.classList.toggle("main-pagina-producto--oscuro");
}
function themeDarkListado() {
    themeDarkCabecera();
    themeDarkPiePagina();
    // Página listado
    var sectionListado = document.getElementById("main-pagina-listado__section--darkmode");
    sectionListado.classList.toggle("main-pagina-listado__section--oscuro");
    var mainListado = document.getElementById("main-pagina-listado--darkmode");
    mainListado.classList.toggle("main-pagina-listado--oscuro");
}
function themeDarkPaginaInicio() {
    themeDarkCabecera();
    themeDarkPiePagina();
}
function themeDarkPaginaError() {
    themeDarkCabecera();
    themeDarkPiePagina();
}
function themeDarkPerfilUsuario() {
    themeDarkCabecera();
    themeDarkPiePagina();
    // Página perfil usuario
    var sectionPerfilUsuario1 = document.getElementById("main-pagina-perfil-usuario__section1--darkmode");
    sectionPerfilUsuario1.classList.toggle("main-pagina-perfil-usuario__section1--oscuro");
    var sectionPerfilUsuario2 = document.getElementById("main-pagina-perfil-usuario__section2--darkmode");
    sectionPerfilUsuario2.classList.toggle("main-pagina-perfil-usuario__section2--oscuro");
    var mainPerfilUsuario = document.getElementById("main-pagina-perfil-usuario--darkmode");
    mainPerfilUsuario.classList.toggle("main-pagina-perfil-usuario--oscuro");
}

//# sourceMappingURL=index.bda4afae.js.map
