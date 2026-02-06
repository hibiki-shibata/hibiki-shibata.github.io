const toggleButton = document.getElementById("control-bar-card__site-settings__darkmode-svg");
const mobileToggleButton = document.getElementById("mobile-only-control-bar-card__site-settings__darkmode-svg");

toggleButton.addEventListener("click", () => {
    toggleDarkMode();
}
)
mobileToggleButton.addEventListener("click", () => {
    toggleDarkMode();
})


function toggleDarkMode() {
    try {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            changeButtonTitle("dark")
        } else {
            localStorage.setItem("theme", "light");
            changeButtonTitle("light")
        }
    } catch (e) {
        console.log(e)
    }
}


function changeButtonTitle(isDarkMode) {
    const buttonTitle = document.getElementById('control-bar-card__site-settings__darkmode-title')
    // const savedTheme = localStorage.getItem("theme");
    if (isDarkMode === "dark") {
        buttonTitle.textContent = "Light"
    } else {
        buttonTitle.textContent = "Dark"
    }

}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== "light") {
        document.body.classList.add("dark");
        changeButtonTitle(savedTheme);
    }
});


