var keyDownHandler = function (event) {
	console.log("caught event", event);
};

var assignListenersToButtons = function () {
	var buttons = Array.prototype.slice.call(document.getElementsByTagName('button'));
	var soundButtons = buttons.filter(function(b) {
		return b.getAttribute('data-key') !== null;
	});

	soundButtons.forEach(function(b) {
		b.addEventListener('keydown', keyDownHandler);
	});
};



document.addEventListener("DOMContentLoaded", function () {
	assignListenersToButtons();
});