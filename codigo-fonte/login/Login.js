let btn = document.querySelector("#verSenha");

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

function entrar() {
  let email = document.querySelector("#email");

  let senha = document.querySelector("#senha");

  let msgError = document.querySelector("#msgError");
  let listaUser = [];

  let userValid = {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if (email.value == item.emailCad && senha.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        telefone: item.telefoneCad,
        senha: item.senhaCad,
      };
    }
  });

  if (email.value == userValid.email && senha.value == userValid.senha) {
    let token =
    Math.random().toString(16).substring(2) + Math.random(16).toString().substring(2);

    localStorage.setItem("token", token);
    localStorage.setItem("userHasLogged", true);

    window.location.href = "/codigo-fonte/Home/home.html";
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "e-mail ou senha incorretos!";
    email.focus();
  }
}

const handleCurrentMenu = () => {
  const link = document.getElementById("link");

  link.className = "menu-active";
};

handleCurrentMenu();
