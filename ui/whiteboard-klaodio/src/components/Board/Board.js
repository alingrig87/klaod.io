import React, { useState, useEffect } from 'react';
import './Board.css';
import Controls from '../AppBar/AppBar';

function Board() {
	const canvasRef = React.useRef(null);
	const parentRef = React.useRef(null);
	const [ctx, setCtx] = useState({});
	const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 });
	const [drawing, setDrawing] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [color, setColor] = useState('#000000');

	useEffect(() => {
		let canv = canvasRef.current;
		canv.width = parentRef.current.offsetWidth;
		canv.height = parentRef.current.offsetHeight;

		let canvCtx = canv.getContext('2d');
		canvCtx.lineJoin = 'round';
		canvCtx.lineCap = 'round';
		canvCtx.lineWidth = 5;
		setCtx(canvCtx);

		let offset = canv.getBoundingClientRect();
		setCanvasOffset({ x: parseInt(offset.left), y: parseInt(offset.top) });
	}, [ctx]);

	function handleMouseDown(e) {
		setDrawing(true);
		setPosition({
			x: parseInt(e.clientX - canvasOffset.x),
			y: parseInt(e.clientY - canvasOffset.y),
		});
	}

	function handleTouchStart(e) {
		var touch = e.touches[0];
		setDrawing(true);
		setPosition({
			x: parseInt(touch.clientX - canvasOffset.x),
			y: parseInt(touch.clientY - canvasOffset.y),
		});
	}

	function handleMouseUp() {
		setDrawing(false);
	}

	function handleTouchEnd() {
		setDrawing(false);
	}

	function handleMouseMove(e) {
		let mousex = e.clientX - canvasOffset.x;
		let mousey = e.clientY - canvasOffset.y;
		if (drawing) {
			ctx.strokeStyle = color;
			ctx.beginPath();
			ctx.moveTo(position.x, position.y);
			ctx.lineTo(mousex, mousey);
			ctx.stroke();
		}
		setPosition({ x: mousex, y: mousey });
	}

	function preventDefault(e) {
		e.preventDefault();
	}
	// modern Chrome requires { passive: false } when adding event
	var supportsPassive = false;
	try {
		window.addEventListener(
			'test',
			null,
			Object.defineProperty({}, 'passive', {
				get: function () {
					supportsPassive = true;
				},
			})
		);
	} catch (e) {}

	var wheelOpt = supportsPassive ? { passive: false } : false;

	// call this to Disable
	function disableScroll() {
		window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
	}

	function handleTouchMove(e) {
		disableScroll();
		let mousex = e.touches[0].clientX - canvasOffset.x;
		let mousey = e.touches[0].clientY - canvasOffset.y;
		if (drawing) {
			ctx.strokeStyle = color;
			ctx.beginPath();
			ctx.moveTo(position.x, position.y);
			ctx.lineTo(mousex, mousey);
			ctx.stroke();
		}
		setPosition({ x: mousex, y: mousey });
	}

	function handleColor(color) {
		setColor(color);
	}

	return (
		<div className="board" ref={parentRef}>
			<Controls handleColor={handleColor} />
			<canvas
				ref={canvasRef}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onTouchMove={handleTouchMove}
			/>
		</div>
	);
}

export default Board;
