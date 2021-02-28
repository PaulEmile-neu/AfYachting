const navMenu = document.querySelector('#nav_bar_menu');
const navToggle = document.querySelector('#nav_bar_toggle');
const navclose = document.querySelector('#nav_bar_close');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})


navclose.addEventListener('click', () => {
    navMenu.classList.remove('show');
})


/* animations */

document.addEventListener('mousemove', move)

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 120
        const y = (window.innerHeight - e.pageY * speed) / 120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

}

