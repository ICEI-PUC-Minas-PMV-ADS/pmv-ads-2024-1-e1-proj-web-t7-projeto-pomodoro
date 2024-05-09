let btn = document.querySelector('.fa-eye');
let btnConfirmeSenha = document.querySelector('#verConfirmeSenha');

let nome = document.querySelector('#nomeusuario');

let email = document.querySelector('#email');

let telefone = document.querySelector('#telefone');

let senha = document.querySelector('#senha');

let confirmSenha = document.querySelector('#confirmSenha');

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        nome.setAttribute('style', 'color: red');
    } else {
        nome.setAttribute('style', 'color: green');
    }
});

email.addEventListener('keyup', () => {
    let emailValue = email.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        email.setAttribute('style', 'color: green');
    } else {
        email.setAttribute('style', 'color: red');
    }
});

telefone.addEventListener('keyup', () => {
    let telefoneValue = telefone.value;
    let telefonePattern = /^\d{10,11}$/;

    if (telefonePattern.test(telefoneValue)) {
        telefone.setAttribute('style', 'color: green');
    } else {
        telefone.setAttribute('style', 'color: red');
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        senha.setAttribute('style', 'color: red');
    } else {
        senha.setAttribute('style', 'color: green');
    }
});

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        confirmSenha.setAttribute('style', 'color: red');
    } else {
        confirmSenha.setAttribute('style', 'color: green');
    }
});
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