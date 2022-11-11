const themeButton = document.querySelector('#theme-button');
if (localStorage.getItem("theme") === "dark") {
  toggleTheme();
}
function toggleTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  localStorage.setItem("theme", newTheme);
  themeButton.classList.toggle('dark');
}
themeButton.addEventListener('click', toggleTheme);