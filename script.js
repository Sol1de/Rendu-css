//Ouverture et fermeture du menu burger
function toggleMenu() {
    const menu = document.getElementById("menu-burger");
    const menuWidth = window.getComputedStyle(menu).getPropertyValue('width');

    if (menuWidth === "120px" || menuWidth === "120px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "120px";
    }
}

//Ferme le menu burger lorsque l'utilisateur scroll
function closeMenuBurgerOnScroll() {
  const burger = document.getElementById("menu-burger");
  const main = document.getElementById("main");
  const menu = document.querySelector('.menu');

  window.addEventListener("scroll", function() {
      menu.classList.remove('opened');
      burger.style.width = "0";
      main.style.marginLeft = "0";
  });
}


  //Animation menu burger
  function animation() {
    const burger = document.querySelector('.menu');
    burger.classList.toggle('opened');
    burger.setAttribute('aria-expanded', this.classList.contains('opened'));
  }

//Appel de la fonction closeMenuBurgerOnScroll()
closeMenuBurgerOnScroll();