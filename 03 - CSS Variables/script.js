const imageBorderColor = '--image-border-color';
const imageBorderStyle = '--image-border-style';
const imageBorderWidth = '--image-border-width';

const updateBorderColor = (e) => {
	document.documentElement.style.setProperty(imageBorderColor, e.target.value);
}

const updateBorderStyle = (e) => {
	document.documentElement.style.setProperty(imageBorderStyle, e.target.value);
}

const updateBorderWidth = (e) => {
	document.documentElement.style.setProperty(imageBorderWidth, `${e.target.value}px`);
}

document.getElementById('border-color').addEventListener('change', updateBorderColor);
document.getElementById('border-style').addEventListener('change', updateBorderStyle);
document.getElementById('border-width').addEventListener('change', updateBorderWidth);