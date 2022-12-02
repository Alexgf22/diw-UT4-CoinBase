const toggleMenuElement = document.getElementById('toogle-menu');
const menuHamburguesa  = document.getElementById('menu-hamburguesa');

toggleMenuElement.addEventListener('click', () => {
    menuHamburguesa.classList.toggle('menu-hamburguesa--show');
} );