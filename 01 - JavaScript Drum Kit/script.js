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

	document.querySelectorAll('button[data-key]').forEach(function(b) {
		const soundElement = document.createElement('span');
		soundElement.classList.add('sound');
		const audioElelement = document.querySelector(`audio[data-key="${b.dataset.key}"]`);
		soundElement.innerHTML = audioElelement.src.match(/sounds\/([a-zA-Z]+)\.wav$/i)[1];
		b.appendChild(soundElement);
	});
});