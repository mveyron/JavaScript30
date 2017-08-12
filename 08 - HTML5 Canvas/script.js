const c = document.getElementById("easel");
const ctx = c.getContext('2d');
let isDrawing = false;

const startDrawing = (e) => {
	ctx.beginPath();
	ctx.moveTo(e.clientX, e.clientY);
	isDrawing = true;
};

const draw = (e) => {
	if (isDrawing) {
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
	}
};

const finishDrawing = (e) => {
	ctx.closePath();
	isDrawing = false;
};


c.addEventListener('mousedown', startDrawing);
c.addEventListener('mousemove', draw);
c.addEventListener('mouseup', finishDrawing);
