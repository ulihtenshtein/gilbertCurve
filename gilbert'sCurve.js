
	var canvas = document.getElementById('curve');

	if( !canvas ) alert('no canvas');
	
	var context = canvas.getContext('2d');
	context.fillStyle = '#acf';
	context.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);	
		var x,y,h;
		var first = true;
		
function clean() {
	var pc = canvas.parentNode;
	pc.removeChild(canvas);
	canvas = document.createElement('canvas');
	canvas.id = 'curve';
	canvas.width = 400;
	canvas.height = 400;
	context = canvas.getContext('2d');
	pc.appendChild(canvas);
	context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
	context.strokeStyle = '#acf';
	context.stroke();
	context.fillStyle = '#acf';
	context.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
	context.strokeStyle = '#000';
	
	
}	
function draw() {
	context.fillStyle = '#acf';
	context.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
	h = canvas.offsetWidth;
		x = h/2;
		y = h/2;
		first = true;
	var n = document.getElementById('n').value;
	n = parseInt(n);
		A(n);
	 }
function line(ang, h) {
	if( first ) {
		context.moveTo(x, y);
		first = !first;
	}
	ang = Math.PI/4 * ang;
	var dx, dy;
	dx = h * Math.cos(ang);
	dy = h * Math.sin(ang);
	x += dx; y -= dy;
	context.lineTo(x, y);
	context.stroke();
}
function A(i) {
	if( i > 0 ) {
		if( first ) {
			h /= 2;
			x = x / 2;
			y = y +  h / 2;
		}
		
		B(i - 1);
		line(2, h);
		A(i - 1);
		line(0, h);
		A(i - 1);
		line(6, h);
		C(i - 1);
	}
}
function B(i) {
	if( i > 0 ) {
		if( first ) {
			h /= 2;
			x = x / 2;
			y = y +  h / 2;
		}

		A(i - 1);
		line(0, h);
		B(i - 1);
		line(2, h);
		B(i - 1);
		line(4, h);
		D(i - 1);
	}
}
function C(i) {

	if( i > 0 ) {
		if( first ) {
			h /= 2;
			x = x / 2;
			y = y +  h / 2;
		}
		
		D(i - 1);
		line(4, h);
		C(i - 1);
		line(6, h);
		C(i - 1);
		line(0, h);
		A(i - 1);
	}
}
function D(i) {
	if( i > 0 ) {
		if( first ) {
			h /= 2;
			x = x / 2;
			y = y +  h / 2;
		}
		
		C(i - 1);
		line(6, h);
		D(i - 1);
		line(4, h);
		D(i - 1);
		line(2, h);
		B(i - 1);
	}
}