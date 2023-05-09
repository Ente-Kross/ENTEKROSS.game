const playButton = document.getElementById('play-button');
playButton.addEventListener('click', () => {
  const snackbar = document.createElement('div');
  snackbar.id = 'snackbar';
  snackbar.textContent = 'Starting Game....';
  document.body.appendChild(snackbar);

  snackbar.classList.add('show');

  setTimeout(() => {
    window.location.href = 'coming_soon.html'; // Hier wird die gewünschte Seite festgelegt
  }, 6000); // Hier wird die Verzögerung in Millisekunden festgelegt (6000 ms = 6 Sekunden)
});
