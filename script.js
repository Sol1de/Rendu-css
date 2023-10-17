//Ouverture et fermeture du menu burger
function toggleMenu() {
    const menu = document.getElementById("menu-burger");
    const menuWidth = window.getComputedStyle(menu).getPropertyValue('width');

    if (menuWidth === "200px" || menuWidth === "200") {
        menu.style.width = "0";
    } else {
        menu.style.width = "200px";
    }
}

  //Animation menu burger
  function animation() {
    const burger = document.querySelector('.menu');
    burger.classList.toggle('opened');
    burger.setAttribute('aria-expanded', this.classList.contains('opened'));
  }
