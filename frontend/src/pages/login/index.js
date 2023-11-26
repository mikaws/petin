document.addEventListener('submit', e => {
  e.preventDefault();
  login(e);
});

function login(e) {
  const form = new FormData(e.target);
  const { email } = Object.entries(form);
  console.log(email);
}
