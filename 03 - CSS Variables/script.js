const imageBorderColor = '--image-border-color';
const imageBorderStyle = '--image-border-style';
const imageBorderWidth = '--image-border-width';

const borderStyleElement = document.getElementById('border-style');
const borderColorElement = document.getElementById('border-color');
const borderWidthElement = document.getElementById('border-width');

const updateBorderColor = (e) => {
	document.documentElement.style.setProperty(imageBorderColor, e.target.value);
}

const updateBorderStyle = (e) => {
	document.documentElement.style.setProperty(imageBorderStyle, e.target.value);
}

const updateBorderWidth = (e) => {
	document.documentElement.style.setProperty(imageBorderWidth, `${e.target.value}px`);
}

const initialize = () => {
	const initialStyles = getComputedStyle(document.documentElement);

	borderColorElement.value = initialStyles.getPropertyValue(imageBorderColor).trim();
	borderStyleElement.value = initialStyles.getPropertyValue(imageBorderStyle).trim();
	borderWidthElement.value = initialStyles.getPropertyValue(imageBorderWidth).trim().substr(0,1);
};

borderColorElement.addEventListener('change', updateBorderColor);
borderStyleElement.addEventListener('change', updateBorderStyle);
borderWidthElement.addEventListener('change', updateBorderWidth);

initialize();