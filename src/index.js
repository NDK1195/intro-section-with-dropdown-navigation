const iconMenu = document.getElementById("icon-menu");
const iconCloseMenu = document.getElementById("icon-close-menu");
const overlay = document.getElementById("overlay");
const menuMobile = document.getElementById("menu-mobile");

iconMenu.addEventListener("click", () => {
  iconMenu.classList.add("hidden");
  iconCloseMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
  menuMobile.style.width = "64%";
});

iconCloseMenu.addEventListener("click", () => {
  iconMenu.classList.remove("hidden");
  iconCloseMenu.classList.add("hidden");
  overlay.classList.add("hidden");
  menuMobile.style.width = "0";
});
