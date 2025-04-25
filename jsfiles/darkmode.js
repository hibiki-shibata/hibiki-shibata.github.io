const toggleButton = document.getElementById("darkModeIcon");

toggleButton.addEventListener("click", () => {
    
    try {    
        document.body.classList.toggle("dark");    

        // Optional: save preference in local storage
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    } catch (e) {
        console.log(e)
    }
}

);

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});