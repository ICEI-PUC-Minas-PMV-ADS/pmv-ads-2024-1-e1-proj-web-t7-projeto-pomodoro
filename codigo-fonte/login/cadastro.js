let btn = document.querySelector('.fa-eye');
let btnConfirmeSenha = document.querySelector('#verConfirmeSenha');

//Verificações
let nome = document.querySelector('#nomeusuario');
let email = document.querySelector('#email');
let telefone = document.querySelector('#telefone');
let senha = document.querySelector('#senha');
let confirmSenha = document.querySelector('#confirmSenha');

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        nome.setAttribute('style', 'color: red');
    } else {
        nome.setAttribute('style', 'color: #58C200');
    }
});

email.addEventListener('keyup', () => {
    let emailValue = email.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        email.setAttribute('style', 'color: #58C200');
    } else {
        email.setAttribute('style', 'color: red');
    }
});

telefone.addEventListener('keyup', () => {
    let telefoneValue = telefone.value;
    let telefonePattern = /^\d{10,11}$/;

    if (telefonePattern.test(telefoneValue)) {
        telefone.setAttribute('style', 'color: #58C200');
    } else {
        telefone.setAttribute('style', 'color: red');
    }
});

telefone.addEventListener('keydown', (event) => {

    const keyCode = event.keyCode || event.which;
    // Verifica se o caractere digitado não é um número (0-9) e não é uma tecla de controle
    if (!(keyCode >= 48 && keyCode <= 57) && !([8, 9, 13, 27, 37, 38, 39, 40].includes(keyCode))) {
        event.preventDefault();
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        senha.setAttribute('style', 'color: red');
    } else {
        senha.setAttribute('style', 'color: #58C200');
    }
});

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        confirmSenha.setAttribute('style', 'color: red');
    } else {
        confirmSenha.setAttribute('style', 'color: #58C200');
    }
});
//Verificações fim

function cadastrar() {

}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});


btnConfirmeSenha.addEventListener('click', () => {
    let inputConfirmeSenha = document.querySelector('#confirmSenha');

    if (inputConfirmeSenha.getAttribute('type') === 'password') {
        inputConfirmeSenha.setAttribute('type', 'text');
    } else {
        inputConfirmeSenha.setAttribute('type', 'password');
    }
});