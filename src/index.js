const iconMenu = document.getElementById("icon-menu");
const iconCloseMenu = document.getElementById("icon-close-menu");
const overlay = document.getElementById("overlay");
const menuMobile = document.getElementById("menu-mobile");

const menuFeaturesMobile = document.getElementById("menu-features-mobile");
const menuFeaturesContentMobile = document.getElementById(
  "menu-features-content-mobile",
);
const iconFeaturesOpenMobile = document.getElementById(
  "icon-features-open-mobile",
);
const iconFeaturesCloseMobile = document.getElementById(
  "icon-features-close-mobile",
);

const menuCompanyMobile = document.getElementById("menu-company-mobile");
const menuCompanyContentMobile = document.getElementById(
  "menu-company-content-mobile",
);
const iconCompanyOpenMobile = document.getElementById(
  "icon-company-open-mobile",
);
const iconCompanyCloseMobile = document.getElementById(
  "icon-company-close-mobile",
);

const menuFeaturesDesktop = document.getElementById("menu-features-desktop");
const menuFeaturesContentDesktop = document.getElementById(
  "menu-features-content-desktop",
);
const iconFeaturesOpenDesktop = document.getElementById(
  "icon-features-open-desktop",
);
const iconFeaturesCloseDesktop = document.getElementById(
  "icon-features-close-desktop",
);

const menuCompanyDesktop = document.getElementById("menu-company-desktop");
const menuCompanyContentDesktop = document.getElementById(
  "menu-company-content-desktop",
);
const iconCompanyOpenDesktop = document.getElementById(
  "icon-company-open-desktop",
);
const iconCompanyCloseDesktop = document.getElementById(
  "icon-company-close-desktop",
);

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

menuFeaturesMobile.addEventListener("click", () => {
  menuFeaturesContentMobile.classList.toggle("hidden");
  menuFeaturesContentMobile.classList.toggle("flex");

  iconFeaturesOpenMobile.classList.toggle("hidden");
  iconFeaturesCloseMobile.classList.toggle("hidden");
});

menuFeaturesContentMobile.addEventListener("click", () => {
  event.stopPropagation();
});

menuCompanyMobile.addEventListener("click", () => {
  menuCompanyContentMobile.classList.toggle("hidden");
  menuCompanyContentMobile.classList.toggle("flex");

  iconCompanyOpenMobile.classList.toggle("hidden");
  iconCompanyCloseMobile.classList.toggle("hidden");
});

menuCompanyContentMobile.addEventListener("click", () => {
  event.stopPropagation();
});

menuFeaturesDesktop.addEventListener("click", () => {
  menuFeaturesContentDesktop.classList.toggle("hidden");
  menuFeaturesContentDesktop.classList.toggle("flex");

  iconFeaturesOpenDesktop.classList.toggle("hidden");
  iconFeaturesCloseDesktop.classList.toggle("hidden");
});

menuFeaturesContentDesktop.addEventListener("click", () => {
  event.stopPropagation();
});

menuCompanyDesktop.addEventListener("click", () => {
  menuCompanyContentDesktop.classList.toggle("hidden");
  menuCompanyContentDesktop.classList.toggle("flex");

  iconCompanyOpenDesktop.classList.toggle("hidden");
  iconCompanyCloseDesktop.classList.toggle("hidden");
});

menuCompanyContentDesktop.addEventListener("click", () => {
  event.stopPropagation();
});
