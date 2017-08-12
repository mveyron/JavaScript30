const c = document.getElementById("easel");
c.width = window.innerWidth;
c.height = window.innerHeight;

const ctx = c.getContext('2d');
ctx.lineWidth = 20;

let isDrawing = false;
let hue = 0;
let lastX = 0;
let lastY = 0;
let lastSpeed = 0;
let lastTime = 0;

ctx.lineCap = 'round';
ctx.lineJoin = 'round';

const startDrawing = (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.clientX, e.clientY];
	lastTime = (new Date()).getTime();
};

const draw = (e) => {
	if (isDrawing) {
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

		const distance = Math.sqrt(Math.pow((e.clientX - lastX), 2) + Math.pow((e.clientY - lastY), 2));
		const currentTime = (new Date()).getTime();
		const timeElapsed = currentTime - lastTime;
		const currentSpeed = distance / timeElapsed;

		ctx.lineWidth = (lastSpeed > currentSpeed) ?
						ctx.lineWidth += 1 :
						ctx.lineWidth -= 1;
		console.log({ distance, timeElapsed, currentSpeed, dir: lastSpeed > currentSpeed ? 'up' : 'down'} );

		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();

		hue = (hue === 359) ? 0 : hue +=1;
		[lastX, lastY] = [e.clientX, e.clientY];
		lastTime = currentTime;
		lastSpeed = currentSpeed;
	}
};

const finishDrawing = (e) => {
	isDrawing = false;
	lastSpeed = 0;
	lastTime = 0;
	ctx.lineWidth = 20;
};


c.addEventListener('mousedown', startDrawing);
c.addEventListener('mousemove', draw);
c.addEventListener('mouseup', finishDrawing);
c.addEventListener('mouseout', finishDrawing);
