// here is too many indexes...
window.addEventListener("DOMContentLoaded", () => {
  mainFunction();
});

const mainFunction = () => {
  const openButton = document.getElementById("btn");
  const closeButton = document.getElementById("closeButton");
  const popup = document.getElementsByClassName("modal")[0];
  popup.style.display = "none";

  openButton.addEventListener("click", () => {
    popup.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });
};
