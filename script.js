const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.querySelector('.question');
const buttonsDiv = document.querySelector('.buttons');
const message = document.getElementById('message');
const audio = document.getElementById('audio');

// Función para mover el botón "No"
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Soporte para escritorio y móviles
noBtn.addEventListener('mouseover', moveNoButton); // Escritorio
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Evita quedarse seleccionado
  moveNoButton();
}, { passive: false });

yesBtn.addEventListener('click', () => {
  question.style.display = 'none';
  buttonsDiv.style.display = 'none';
  message.style.display = 'block';
  audio.play();
});
