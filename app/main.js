const SUBMIT_BUTTON = document.getElementById('email-submit');
const EMAIl_INPUT = document.getElementById('email-input');
const ERROR_MESSAGE = document.getElementById('error-message');
function checkEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function checkEmailHandler(e) {
  e.preventDefault();
  const emailValue = EMAIl_INPUT.value;
  if (checkEmail(emailValue)) {
      [ERROR_MESSAGE.classList.add('hide')];
      console.log(emailValue);
      EMAIl_INPUT.value = '';
} else {
    ERROR_MESSAGE.classList.remove('hide');
  }
}
SUBMIT_BUTTON.addEventListener('click', checkEmailHandler);
