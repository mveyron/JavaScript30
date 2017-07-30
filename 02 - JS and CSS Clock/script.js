const ONE_SEC = 1000;
const ONE_MIN = ONE_SEC * 60;
const ONE_HOUR = ONE_MIN * 60;

const updateSeconds = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const angle = seconds * 6;
	const secondsHand = document.querySelector('.second-hand');
	secondsHand.style.transform = `rotate(${angle}deg)`;
};

const updateMinutes = () => {
	const now = new Date();
	const minutes = now.getMinutes();
	const angle = minutes * 6;
	const minutesHand = document.querySelector('.min-hand');
	minutesHand.style.transform = `rotate(${angle}deg)`;
};

const updateHours = () => {
	const now = new Date();
	const hours = now.getHours();
	const hoursOnClock = hours > 12 ? hours - 12 : hours;
	const angle = hoursOnClock * 30;
	const hoursHand = document.querySelector('.hour-hand');
	hoursHand.style.transform = `rotate(${angle}deg)`;
};

updateSeconds();
updateMinutes();
updateHours();

setInterval(updateSeconds, ONE_SEC);
setInterval(updateMinutes, ONE_MIN);
setInterval(updateHours, ONE_HOUR);