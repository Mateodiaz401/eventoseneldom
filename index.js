// const clickTitulo = (e) => {
//     console.log(e);
// }
// const titulo2 = document.getElementById('tituloForm');
// titulo2.addEventListener('click', clickTitulo);
//titulo2.removeEventListener('click', clickTitulo);

//** */ eventos mas importantes y mas utilzados

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('el evento se a ejecutado');
// });

//** Envio de data de un formulario

const form = document.querySelector('#formulario');

const enviarFormulario = (event) => {
    event.preventDefault();
    //console.log(event.bubbles);
    //! destructurin
    const { name, email, password } = event.target;
    console.log(
        name.value,
        email.value,
        password.value);
}

form.addEventListener('submit', enviarFormulario);

//** Event BUBBLING
const section = document.querySelector('#secction');
const titulo2 = document.querySelector('#titulo2');

titulo2.addEventListener('click', (e) => {
    // console.log(e.bubbles, e.cancelBubble = true);
    // e.stopPropagation
    console.log('CLICK EN EL TITULO');
    // console.log(e.target, e.currentTarget);
});
section.addEventListener('click', (e) => {
    console.log('CLICK EN LA SECCIÓN');
},
    {
        capture: true
    });





