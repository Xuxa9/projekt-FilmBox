// ukol 3
const btnMenu = document.querySelector("#menu-tlacitko")
btnMenu.addEventListener("click", () => {
    const menuPolozky = document.querySelector("#menu-polozky")
    menuPolozky.classList.toggle("show")

    if (menuPolozky.classList.contains("show")) {
        btnMenu.innerHTML = '<i class="fas fa-xmark"></i>'
    } else {
        btnMenu.innerHTML = '<i class="fas fa-bars"></i>'
    }
})

