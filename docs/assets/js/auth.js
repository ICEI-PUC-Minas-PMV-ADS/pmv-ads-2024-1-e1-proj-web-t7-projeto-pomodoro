const logout = () => {
  localStorage.removeItem("userHasLogged");

  window.location.href = "login.html";
};

const showPassword = (type = "senha", eyeIconName = "input-password-eye") => {
  const inputPassword = document.getElementById(type);
  const inputType = inputPassword.getAttribute("type");

  const eyeIcon = document.getElementById(eyeIconName);

  if (inputType == "password") {
    eyeIcon.className = "bi bi-eye-fill";

    inputPassword.setAttribute("type", "text");
  } else {
    eyeIcon.className = "bi bi-eye-slash";

    inputPassword.setAttribute("type", "password");
  }
};

const handleLogin = (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const error = document.getElementById("msgError");

  const listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];

  const findUser = listaUser?.find((user) => user?.email == email);

  if (findUser) {
    if (findUser.password == senha) {
      localStorage.setItem("userHasLogged", true);

      window.location.href = "home.html";
    } else {
      error.setAttribute("style", "display: block");
      error.innerText = "Senha incorreta!";
    }
  } else {
    error.setAttribute("style", "display: block");
    error.innerText = "Usuário não encontrado!";
  }
};

const handleRegister = (e) => {
  e.preventDefault();

  const nome = document.getElementById("nomeusuario").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmSenha = document.getElementById("confirmSenha").value;

  const msgError = document.getElementById("msgError");
  const msgSuccess = document.getElementById("msgSuccess");

  const listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];

  const findUser = listaUser?.find((user) => user?.email == email);

  if (findUser) {
    msgError.setAttribute("style", "display: block");
    return (msgError.innerHTML = "Já existe um usuário com esse email");
  }

  if (senha?.length < 5) {
    msgError.setAttribute("style", "display: block");
    return (msgError.innerHTML = "A senha deve conter ao menos 5 caracteres");
  }

  if (senha != confirmSenha) {
    msgError.setAttribute("style", "display: block");
    return (msgError.innerHTML = "As senhas devem ser iguais");
  }

  msgError.setAttribute("style", "display: none");

  listaUser.push({
    name: nome,
    email: email,
    password: senha,
  });

  localStorage.setItem("listaUser", JSON.stringify(listaUser));

  console.log(listaUser)
  // msgSuccess.setAttribute("style", "display: block");
  // msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>";
  // msgError.setAttribute("style", "display: none");
  // msgError.innerHTML = "";

  // setTimeout(() => {
  //   window.location.href = "home.html";
  // }, 1500);
};
