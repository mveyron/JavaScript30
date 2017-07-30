const updateSeconds = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const angle = (seconds + 1) * 6;
	const secondsHand = document.querySelector('.second-hand');
	secondsHand.style.transform = `rotate(${angle}deg)`;
};

setInterval(updateSeconds, 1000);