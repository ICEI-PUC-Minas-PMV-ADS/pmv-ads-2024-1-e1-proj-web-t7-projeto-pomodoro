const logout = () => {
  localStorage.removeItem("userHasLogged");
  localStorage.removeItem("token");

  window.location.href = '/codigo-fonte/login/login.html';
};
