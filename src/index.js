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


    function darkMode(){
        var elementb = document.body;
        elementb.classList.toggle("body-dark-mode");
        var elementh = document.getElementById("formulario-contacto__fieldset--darkmode");
        elementh.classList.toggle("formulario-contacto__fieldset--oscuro");
    }