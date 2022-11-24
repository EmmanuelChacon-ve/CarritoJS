var email = document.querySelector(".navbar-email");
var desktioMenu = document.querySelector(".desktop-menu");
email.addEventListener("click", () => {
  desktioMenu.classList.toggle("inactive"); // lo que hacemos es ejecutar la funcion para quitar o poner la clase inactive
});
