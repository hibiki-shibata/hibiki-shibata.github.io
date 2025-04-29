const menuBtn = document.getElementById('menuBarButton');
const sidebar = document.getElementById('menuSidebar');

menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebar.classList.toggle('open');
});

sidebar.addEventListener('click', (event) => {
    event.stopPropagation();
});


document.addEventListener('click', (event) => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open')
    }
});