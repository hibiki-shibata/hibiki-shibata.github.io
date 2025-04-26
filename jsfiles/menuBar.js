const menuBtn = document.getElementById('menuBarButton');
const sidebar = document.getElementById('menuSidebar');
// const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // stop click from reaching document
    sidebar.classList.toggle('open');
});

sidebar.addEventListener('click', (event) => {
    event.stopPropagation(); // clicking inside sidebar shouldn't close it
});


document.addEventListener('click', (event) => {
    console.log("FASFAS")
    // if sidebar is open and you click anywhere else
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open')
    }
});