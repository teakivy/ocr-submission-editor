import React, { useEffect, useRef } from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";
import { exportComponentAsPNG } from "react-component-export-image";

export default function DrawingPanel(props) {
	const { width, height, selectedColor, fileName, onChange } = props;

	const panelRef = useRef();

	let rows = [];

	for (let i = 0; i < height; i++) {
		rows.push(
			<Row
				key={i}
				width={width}
				y={i}
				onChange={onChange}
				selectedColor={selectedColor}
			/>
		);
	}

	// make an image that follows the cursor

	useEffect(() => {
		// const panel = document.getElementById("pixels");
		// const cursor = document.getElementById("cursor");
		// panel.addEventListener("mousemove", (e) => {
		// 	cursor.style.left = e.clientX - 10 + "px";
		// 	cursor.style.top = e.clientY - 10 + "px";
		// });
	}, []);

	return (
		<div id="drawingPanel">
			{/* <div id="cursor">
				<img alt="cursor" src={require("../assets/transparent.png")} />
			</div> */}

			<div id="pixels" ref={panelRef}>
				{rows}
			</div>
		</div>
	);
}
