// here is too many indexes...
window.addEventListener("DOMContentLoaded", () => {
    mainFunction()
});

const mainFunction = () => {
    const myBtn = document.getElementById('btn')
    const popup = document.getElementsByClassName('modal')[0]
    popup.style.display = 'none'

    myBtn.addEventListener('click', () => {
        console.log(popup.style.display, myBtn.innerHTML);
        popup.style.display = popup.style.display == "none" ? "block" : "none";
        myBtn.innerHTML = myBtn.innerHTML == "click me" ? "now close" : "click me";
    })
}
