import "./style.css";

// elements
const button = document.getElementById("drop-down-menu-button");

button.addEventListener("click", () => {
  const menu = document.getElementById("nav-links-container");

  if (menu.classList.contains("hidden")) {
    // show the menu by removing the hidden class
    menu.classList.remove("hidden");
  } else if (!menu.classList.contains("hidden")) {
    // hide the menu by adding the hidden class
    menu.classList.add("hidden");
  }
});
