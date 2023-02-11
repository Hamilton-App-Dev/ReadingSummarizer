import React, { useState } from "react";

const TextInput = () => {
	const [value, setValue] = useState("");
	const [style, setStyle] = useState({
		height: "inherit",
	});
	return (
		<div>
			<textarea
				style={style}
				value={value}
				onChange={(e) => {
					setValue(e.target.value.replace(/(\r\n|\n|\r)/gm, ""));
					console.log(value);
					e.target.style.height = "inherit";
					e.target.style.height = `${e.target.scrollHeight}px`;
				}}
				onKeyDown={(e) => {
					if (e.key == "Enter") {
						fetch("http://127.0.0.1:5000/summarize", {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({ readingText: value }),
						}).then(() => {
							console.log("request sent to server");
						});
					}
				}}
			/>
		</div>
	);
};

export default TextInput;
