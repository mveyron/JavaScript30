var keyDownHandler = function (event) {
	var audioForKey = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	var buttonForKey = document.querySelector(`button[data-key="${event.keyCode}"]`);

	if (audioForKey && buttonForKey) {
		buttonForKey.classList.add('playing');
		audioForKey.addEventListener('ended', function () {
			buttonForKey.classList.remove('playing');
		});
		audioForKey.play();
	}
};

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener('keydown', keyDownHandler);
	var buttons = document.querySelectorAll('button[data-key]');
	var audios = document.querySelectorAll('audio[data-key]');
	var soundNames = {};
	audios.forEach(function(a) {
		var audioCode = a.dataset.key;
		var audioName = a.src.match(/sounds\/([a-zA-Z]+)\.wav$/i);
		soundNames[audioCode] = audioName[1];
	});
	buttons.forEach(function(b) {
		var soundElement = document.createElement('span');
		soundElement.classList.add('sound');
		soundElement.innerHTML = soundNames[b.dataset.key];
		b.appendChild(soundElement);
	});
});