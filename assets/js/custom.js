let colorBox = document.getElementById('colorBox');
let generateBtn = document.getElementById('generateBtn');
let colorCode = document.getElementById('colorCode');
let copyBtn = document.getElementById('copyBtn');


let generateRGBColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  
  return `rgb(${r}, ${g}, ${b}) `;
  
};


let updateColor = () => {
  let color = generateRGBColor();
  colorBox.style.backgroundColor = color;
  colorCode.value = color;
};

updateColor()
let copyColorCode = () => {
  colorCode.select();
  document.execCommand('copy');
  alert("Color code copied: " + colorCode.value);
};

generateBtn.addEventListener('click', () => {
  updateColor();
});

copyBtn.addEventListener('click', () => {
  copyColorCode();
});




