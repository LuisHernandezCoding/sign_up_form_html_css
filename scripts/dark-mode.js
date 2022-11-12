const themeButton = document.querySelector('#theme-button');
function toggleTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  localStorage.setItem('theme', newTheme);
  themeButton.classList.toggle('dark');
}
if (localStorage.getItem('theme') === 'dark') {
  toggleTheme();
}
themeButton.addEventListener('click', toggleTheme);