const toggleButton = document.getElementById("darkModeIcon");

toggleButton.addEventListener("click", () => {

    try {
        document.body.classList.toggle("dark");

        // Optional: save preference in local storage
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            changeButtonTitle("dark")
        } else {
            localStorage.setItem("theme", "light");
            changeButtonTitle()
        }
    } catch (e) {
        console.log(e)
    }
}

);


function changeButtonTitle(isDarkMode) {
    const buttonTitle = document.getElementById('darkModeTitle')
    // const savedTheme = localStorage.getItem("theme");

    if (isDarkMode === "dark") {
        buttonTitle.textContent = "Light"
    } else {
        buttonTitle.textContent = "Dark"
    }

}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        changeButtonTitle(savedTheme);
    }
});


