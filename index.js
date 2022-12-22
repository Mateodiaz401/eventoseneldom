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
    //! destructurin
    const { name, email, password } = event.target;
    console.log(
        name.value,
        email.value,
        password.value);
}

form.addEventListener('submit', enviarFormulario);

//** Event BUBING





