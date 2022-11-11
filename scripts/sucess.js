email = window.location.search.split('=')[1].split('&')[0].replace('%40', '@');
email_span = document.getElementById("email_span");
email_span.textContent = email;