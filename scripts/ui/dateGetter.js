const currentYearFooter = document.getElementById('copy-right-card');
currentYearFooter.textContent = "@" + getCurrentYear();

function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}