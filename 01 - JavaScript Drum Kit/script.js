const keyDownHandler = function (event) {
	const audioForKey = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const buttonForKey = document.querySelector(`button[data-key="${event.keyCode}"]`);	

	if (audioForKey && buttonForKey) {
		buttonForKey.classList.add('playing');
		audioForKey.currentTime = 0;
		audioForKey.play();
	}
};

window.addEventListener('keydown', keyDownHandler);

const audios = document.querySelectorAll(`audio[data-key]`);	
audios.forEach(function (a) {
	const audioKey = a.dataset.key;
	const buttonForKey = document.querySelector(`button[data-key="${audioKey}"]`);
	a.addEventListener('ended', function (e) {
		buttonForKey.classList.remove('playing');
	});
});


const buttons = document.querySelectorAll('button[data-key]');
buttons.forEach(function(b) {
	const soundElement = document.createElement('span');
	soundElement.classList.add('sound');
	const audioElement = document.querySelector(`audio[data-key="${b.dataset.key}"]`);
	soundElement.innerHTML = audioElement.src.match(/sounds\/([a-zA-Z]+)\.wav$/i)[1];
	b.appendChild(soundElement);
});
