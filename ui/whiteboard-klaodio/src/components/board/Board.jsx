import React from 'react';

import './style.css';

class Board extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.drawOnCanvas();
	}

	drawOnCanvas() {
		var canvas = document.querySelector('#board');
		var ctx = canvas.getContext('2d');

		var sketch = document.querySelector('#sketch');
		var sketch_style = getComputedStyle(sketch);
		canvas.width = parseInt(sketch_style.getPropertyValue('width'));
		canvas.height = parseInt(sketch_style.getPropertyValue('height'));

		var mousePos = { x: 0, y: 0 };
		var lastMousePos = { x: 0, y: 0 };

		/* Mouse Capturing Work */
		canvas.addEventListener(
			'mousemove',
			function (e) {
				lastMousePos.x = mousePos.x;
				lastMousePos.y = mousePos.y;

				mousePos.x = e.clientX - this.offsetLeft;
				mousePos.y = e.clientY - this.offsetTop;
			},
			false
		);

		// touch event on mobile
		canvas.addEventListener(
			'touchmove',
			function (e) {
				var touch = e.touches[0];
				var mouseEvent = new MouseEvent('mousemove', {
					clientX: touch.clientX,
					clientY: touch.clientY,
				});
				canvas.dispatchEvent(mouseEvent);
			},
			false
		);

		// mouse down / touch start
		canvas.addEventListener(
			'mousedown',
			function (e) {
				canvas.addEventListener('mousemove', onPaint, false);
			},
			false
		);

		canvas.addEventListener(
			'touchstart',
			function (e) {
				mousePos = getTouchPos(canvas, e);
				var touch = e.touches[0];
				var mouseEvent = new MouseEvent('mousedown', {
					clientX: touch.clientX,
					clientY: touch.clientY,
				});
				canvas.dispatchEvent(mouseEvent);
			},
			false
		);

		// mouse up, touch end
		canvas.addEventListener(
			'mouseup',
			function () {
				canvas.removeEventListener('mousemove', onPaint, false);
			},
			false
		);

		// Set up touch events for mobile, etc
		canvas.addEventListener(
			'touchend',
			function (e) {
				var mouseEvent = new MouseEvent('mouseup', {});
				canvas.dispatchEvent(mouseEvent);
			},
			false
		);

		// Get the position of a touch relative to the canvas
		function getTouchPos(canvasDom, touchEvent) {
			var rect = canvasDom.getBoundingClientRect();
			return {
				x: touchEvent.touches[0].clientX - rect.left,
				y: touchEvent.touches[0].clientY - rect.top,
			};
		}

		/* Drawing on Paint App */
		ctx.lineWidth = 3;
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
		ctx.strokeStyle = 'black';

		var onPaint = function () {
			ctx.beginPath();
			ctx.moveTo(lastMousePos.x, lastMousePos.y);
			ctx.lineTo(mousePos.x, mousePos.y);
			ctx.closePath();
			ctx.stroke();
		};
	}

	render() {
		return (
			<div className="sketch" id="sketch">
				<canvas className="board" id="board"></canvas>;
			</div>
		);
	}
}

export default Board;
