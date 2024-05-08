let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.getAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
