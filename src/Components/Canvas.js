import { useEffect, useState, useRef } from "react";

// COMPONENT
import Button from "./Button";

export default function Canvas({ handleClickValidation }) {
	const [isClicked, setIsClicked] = useState(false);
	const [x, setX] = useState();
	const [y, setY] = useState();
	const cnvEl = useRef(null);
	let canvasEl;

	useEffect(() => {
		canvasEl = cnvEl.current;
		const context = canvasEl.getContext("2d");
		resizeCanvas(canvasEl);
		const mouseDown = () => {
			setIsClicked(true);
			context.beginPath();
		};

		const mouseUp = () => {
			setIsClicked(false);
			setX();
			setY();
		};

		const mouseMove = (evt) => {
			if (isClicked) {
				setX(evt.layerX);
				setY(evt.layerY);
				context.lineWidth = "4";
				context.lineCap = "round";
				context.lineTo(x, y);
				context.stroke();
			}
		};

		canvasEl.addEventListener("mousedown", mouseDown);
		canvasEl.addEventListener("mouseup", mouseUp);
		canvasEl.addEventListener("mousemove", mouseMove);

		return () => {
			canvasEl.removeEventListener("mousedown", mouseDown);
			canvasEl.removeEventListener("mouseup", mouseUp);
			canvasEl.removeEventListener("mousemove", mouseMove);
		};
	}, [isClicked, x, y]);

	const onClickValidate = () => {
		handleClickValidation(canvasEl.toDataURL());
	};

	const resizeCanvas = (canvas) => {
		const { width, height } = canvas.getBoundingClientRect();
		if (canvas.width !== width || canvas.height !== height) {
			const { devicePixelRatio: ratio = 1 } = window;
			const context = canvas.getContext("2d");
			canvas.width = width * ratio;
			canvas.height = height * ratio;
			context.scale(ratio, ratio);
			return canvas;
		}
		return false;
	};

	return (
		<div>
			<canvas ref={cnvEl} width="400" height="200"></canvas>
			<div>
				<Button onClick={() => onClickValidate()}>Valider</Button>
			</div>
		</div>
	);
}
