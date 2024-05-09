let btn = document.querySelector('.fa-eye');
let btnConfirmeSenha = document.querySelector('#verConfirmeSenha');

//Verificações
let nome = document.querySelector('#nomeusuario');
let validnome = false;

let email = document.querySelector('#email');
let validemail = false;

let telefone = document.querySelector('#telefone');
let validtelefone = false;

let senha = document.querySelector('#senha');
let validsenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let validconfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        nome.setAttribute('style', 'color: red');
        validnome = false;
    } else {
        nome.setAttribute('style', 'color: #58C200');
        validnome = true;
    }
});

email.addEventListener('keyup', () => {
    let emailValue = email.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        email.setAttribute('style', 'color: #58C200');
        validemail = true;
    } else {
        email.setAttribute('style', 'color: red');
        validemail = false;
    }
});

telefone.addEventListener('keyup', () => {
    let telefoneValue = telefone.value;
    let telefonePattern = /^\d{10,11}$/;

    if (telefonePattern.test(telefoneValue)) {
        telefone.setAttribute('style', 'color: #58C200');
        validtelefone = true;
    } else {
        telefone.setAttribute('style', 'color: red');
        validtelefone = false;
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
        validsenha = false;
    } else {
        senha.setAttribute('style', 'color: #58C200');
        validsenha = true;
    }
});

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        confirmSenha.setAttribute('style', 'color: red');
        validconfirmSenha = false;
    } else {
        confirmSenha.setAttribute('style', 'color: #58C200');
        validconfirmSenha = true;
    }
});
//Verificações fim

function cadastrar(){
    if(validnome && validemail && validtelefone && validsenha && validconfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
            {
                nomeCad: nome.value,
                emailCad: email.value,
                telefoneCad: telefone.value,
                senhaCad: senha.value // Corrigido aqui
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';

        setTimeout(()=>{
            window.location.href = "/codigo-fonte/login/login.html"
        }, 3000);
        
    } else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de continuar!</strong>';
        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML = '';
    }
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