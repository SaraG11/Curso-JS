const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo...');
// })
// busqueda.addEventListener('keyup', () => {
//     console.log('escribiendo...');
// })

// busqueda.addEventListener('blur', () => {
//     console.log('no escribiste nada...');
// })

busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);
})