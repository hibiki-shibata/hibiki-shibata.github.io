const menuBtn = document.getElementById('control-bar-card__menu-button')
const mobileMenuBtn = document.getElementById('mobile-only-control-bar-card__menu-button')
const sidebar = document.getElementById('control-bar-card__menu-side-bar')

menuBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    sidebar.classList.toggle('open')
})

mobileMenuBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    sidebar.classList.toggle('open')
})

sidebar.addEventListener('click', (event) => {
    event.stopPropagation()
})


document.addEventListener('click', (event) => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open')
    }
})