/*const dark = document.querySelector('#pie-pagina__modo-oscuro');
const body = document.querySelector('body');

load();

dark.addEventListener('click', e => {
    body.classList.toggle('theme--dark');
    store(body.classList.contains('theme--dark'));
});

function load() {
    const darkmode = localStorage.getItem('theme--dark');

    if(!darkmode) {
        store('false');
     } else if(darkmode == 'true') {
        body.classList.add('theme--dark');
     }
    }

    function store(value) {
        localStorage.setItem('theme--dark',value);
    }
    */


    function themeDark(){
        // Página contacto
        var fieldsetContacto = document.getElementById("formulario-contacto__fieldset--darkmode");
        fieldsetContacto.classList.toggle("formulario-contacto__fieldset--oscuro");

        var mainContacto = document.getElementById("main-pagina-contacto--darkmode");
        mainContacto.classList.toggle("main-pagina-contacto--oscuro");


        // Página inicio sesión
        var fieldsetInicioSesion = document.getElementById("form-inicio-sesion__fieldset--darkmode");
        fieldsetInicioSesion.classList.toggle("form-inicio-sesion__fieldset--oscuro");

        var mainInicioSesion = document.getElementById("main-pagina-inicio-sesion--darkmode");
        mainInicioSesion.classList.toggle("main-pagina-inicio-sesion--oscuro");

    }