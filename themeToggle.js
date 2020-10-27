const checkbox = document.getElementById('toggleTheme');
const body = document.getElementsByTagName('body');

checkbox.addEventListener('change', function () {
  body[0].classList.toggle('dark-theme');
});
