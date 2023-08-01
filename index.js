const button = document.getElementById('movingButton');

button.addEventListener('click', () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  const maxX = screenWidth - buttonWidth;
  const maxY = screenHeight - buttonHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Set the new button position
  movingButton.style.left = `${randomX}px`;
  movingButton.style.top = `${randomY}px`;
})