function formCadastro() {
  document.getElementById('formCadastro').style.visibility = 'visible';
  document.getElementById('formLogin').style.visibility = 'hidden';
}

function formLogin() {
  document.getElementById('formLogin').style.visibility = 'visible';
  document.getElementById('formCadastro').style.visibility = 'hidden';
}
