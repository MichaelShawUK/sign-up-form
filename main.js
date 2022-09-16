function validateForm() {
  const pwd = document.getElementById('pwd');
  const pwdConfirm = document.getElementById('pwd-confirmation');
  const pwdMessage = document.querySelector('.pwd-error');

  if (pwd.value !== pwdConfirm.value) {
    pwdMessage.style.display = 'block';
    return false;
  }
  return true;
}