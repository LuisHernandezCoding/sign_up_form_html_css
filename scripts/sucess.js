const email = window.location.search.split('=')[1].split('&')[0].replace('%40', '@');
const emailSpam = document.getElementById('email_span');
emailSpam.textContent = email;