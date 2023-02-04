import React, { useState } from "react";
import "../styles/editor.scss";
import DrawingPanel from "./DrawingPanel";

export default function Editor() {
	const userID = Math.floor(Math.random() * 1000000000);
	const [panelWidth, setPanelWidth] = useState(28);
	const [panelHeight, setPanelHeight] = useState(28);
	const [hideOptions, setHideOptions] = useState(false);
	const [hideDrawingPanel, setHideDrawingPanel] = useState(false);
	const [buttonText, setButtonText] = useState("start drawing");
	const [selectedColor, setColor] = useState("#000000");

	const [finished, setFinished] = useState(false);

	const [number, setNumber] = useState(0);

	let image = getBlankImage(panelWidth, panelHeight);

	function initializeDrawingPanel() {
		setHideOptions(!hideOptions);
		setHideDrawingPanel(!hideDrawingPanel);

		buttonText === "start drawing"
			? setButtonText("reset")
			: setButtonText("start drawing");
	}

	function onChange(x, y) {
		image[y][x] = 1;
		console.log(image);
	}

	return !finished ? (
		<div id="editor">
			<h1>Draw the number " {number} "</h1>

			<button onClick={initializeDrawingPanel} className="button">
				{buttonText}
			</button>

			{hideOptions && (
				<DrawingPanel
					width={panelWidth}
					height={panelHeight}
					selectedColor={selectedColor}
					fileName={`${number}_${userID}`}
					onChange={onChange}
				/>
			)}

			{buttonText === "reset" && (
				<button
					onClick={() => {
						image = getBlankImage(panelWidth, panelHeight);
						setNumber(number + 1);

						if (number === 9) {
							setFinished(true);
						}

						initializeDrawingPanel();
					}}
					className="button"
				>
					Next
				</button>
			)}
		</div>
	) : (
		<div id="editor">
			<h1>Thank You!</h1>
			<h2>Here, take some cookies for your hard work</h2>

			<img
				src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
				alt="cookie"
				width={500}
				style={{ borderRadius: "10px", marginBottom: "20px" }}
			/>

			<button
				onClick={() => {
					setFinished(false);
					setNumber(0);
				}}
				className="button"
			>
				Start Over
			</button>

			<p>Unique User ID: {userID}</p>
		</div>
	);
}

function getBlankImage(width, height) {
	const image = [];

	for (let i = 0; i < height; i++) {
		const row = [];

		for (let j = 0; j < width; j++) {
			row.push(0);
		}

		image.push(row);
	}

	return image;
}
