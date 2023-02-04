import React, { useState, useEffect } from "react";
import "../styles/pixel.scss";

export default function Pixel(props) {
	const { selectedColor, x, y, onChange } = props;

	const [pixelColor, setPixelColor] = useState("#fff");
	const [oldColor, setOldColor] = useState(pixelColor);
	const [canChangeColor, setCanChangeColor] = useState(true);
	const [mouseDown, setMouseDown] = useState(false);

	// once registered
	useEffect(() => {
		// register mouse down event
		document.addEventListener("mousedown", () => {
			setMouseDown(true);
		});

		// register mouse up event
		document.addEventListener("mouseup", () => {
			setMouseDown(false);
		});
	}, []);

	function applyColor() {
		setPixelColor(selectedColor);
		setCanChangeColor(false);

		onChange(x, y, 1);
	}

	function changeColorOnHover() {
		setOldColor(pixelColor);
		setPixelColor(selectedColor);
		onChange(x, y, 1);

		if (mouseDown) {
			applyColor();
		}
	}

	function resetColor() {
		if (canChangeColor && !mouseDown) {
			setPixelColor(oldColor);
			onChange(x, y, 0);
		}

		setCanChangeColor(true);
	}

	return (
		<div
			className="pixel"
			onClick={applyColor}
			onMouseEnter={changeColorOnHover}
			onMouseLeave={resetColor}
			style={{ backgroundColor: pixelColor }}
		></div>
	);
}
