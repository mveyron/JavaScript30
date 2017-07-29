const keyDownHandler = function (event) {
	const audioForKey = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const buttonForKey = document.querySelector(`button[data-key="${event.keyCode}"]`);

	if (audioForKey && buttonForKey) {
		buttonForKey.classList.add('playing');
		audioForKey.addEventListener('ended', function () {
			buttonForKey.classList.remove('playing');
		});
		audioForKey.currentTime = 0;
		audioForKey.play();
	}
};

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener('keydown', keyDownHandler);
	const buttons = document.querySelectorAll('button[data-key]');
	const audios = document.querySelectorAll('audio[data-key]');
	const soundNames = {};
	audios.forEach(function(a) {
		const audioCode = a.dataset.key;
		const audioName = a.src.match(/sounds\/([a-zA-Z]+)\.wav$/i);
		soundNames[audioCode] = audioName[1];
	});
	buttons.forEach(function(b) {
		const soundElement = document.createElement('span');
		soundElement.classList.add('sound');
		soundElement.innerHTML = soundNames[b.dataset.key];
		b.appendChild(soundElement);
	});
});