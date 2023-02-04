import React from "react";
import "../styles/row.scss";
import Pixel from "./Pixel";

export default function Row(props) {
	const { width, selectedColor, y, onChange } = props;

	let pixels = [];

	for (let i = 0; i < width; i++) {
		pixels.push(
			<Pixel
				key={i}
				x={i}
				y={y}
				onChange={onChange}
				selectedColor={selectedColor}
			/>
		);
	}

	return <div className="row">{pixels}</div>;
}
