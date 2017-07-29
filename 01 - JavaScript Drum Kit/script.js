var findElementsByTagAndAtr = function (tagName, Attribute) {
	var elementsByTag = Array.prototype.slice.call(document.getElementsByTagName(tagName));
	var elementsByTagAndAtr = elementsByTag.filter(function(b) {
		return b.getAttribute(Attribute) !== null;
	});

	return elementsByTagAndAtr;
};


var keyDownHandler = function (event) {
	console.log("caught event", event);
	var keyCode = event.keyCode.toString();
	var buttonForKey = findElementsByTagAndAtr('button', 'data-key')
	.find(function(b) {
		return b.dataset.key === keyCode;
	});
	var audioForKey = findElementsByTagAndAtr('audio', 'data-key')
	.find(function(a) {
		return a.dataset.key === keyCode;
	});
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
});