function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorHex = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  const rgbColor = hexToRgb(randomHexColor);
  document.body.style.backgroundColor = randomHexColor;
  colorHex.textContent = `\nHex: ${randomHexColor}\n RGB: ${rgbColor}`;
})