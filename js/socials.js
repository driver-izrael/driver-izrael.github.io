const header = document.getElementById('socials-header');
const body = document.getElementById('socials-body');

header.addEventListener('click', () => {
    body.classList.toggle('hide');
})