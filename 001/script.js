function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.menu-hamburger');
    
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
}
