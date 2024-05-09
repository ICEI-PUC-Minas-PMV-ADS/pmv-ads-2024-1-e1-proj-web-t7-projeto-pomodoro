let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});

let btnConfirmeSenha = document.querySelector('#verConfirmeSenha');

btnConfirmeSenha.addEventListener('click', () => {
    let inputConfirmeSenha = document.querySelector('#confirmeSenha');

    if (inputConfirmeSenha.getAttribute('type') === 'password') {
        inputConfirmeSenha.setAttribute('type', 'text');
    } else {
        inputConfirmeSenha.setAttribute('type', 'password');
    }
});