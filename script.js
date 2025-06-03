const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.querySelector('.question');
const buttonsDiv = document.querySelector('.buttons');
const message = document.getElementById('message');
const audio = document.getElementById('audio');

noBtn.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
  question.style.display = 'none';
  buttonsDiv.style.display = 'none';
  message.style.display = 'block';
  audio.play();
});
