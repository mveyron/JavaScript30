const ONE_SEC = 1000;
const transitonRule = 'transform 0.05s';
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const setAngle = (hand, angle) => {
	hand.style.transition = angle === 0 ? 'none' : transitonRule;
	hand.style.transform = `rotate(${angle}deg)`;
}

const updateSeconds = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const angle = seconds * 6;
	setAngle(secondsHand, angle);
};

const updateMinutes = () => {
	const now = new Date();
	const minutes = now.getMinutes();
	const angle = minutes * 6;
	setAngle(minutesHand, angle);
};

const updateHours = () => {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const hoursOnClock = hours > 12 ? hours - 12 : hours;
	// instead of going from 1h to 2h (30deg), 
	// make it smoother by adding 6deg each 12 seconds
	const correction = (minutes - minutes % 12) / 12;
	const angle = hoursOnClock * 30 + correction * 6;
	setAngle(hoursHand, angle);
};

const updateTime = () => {
	updateSeconds();
	updateMinutes();
	updateHours();
};

updateTime();
setInterval(updateTime, ONE_SEC);
