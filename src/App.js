import { useState } from "react";

// COMPONENT
import Canvas from "./Components/Canvas";
import Button from "./Components/Button";

// CSS
import "./App.css";

function App() {
	const [base64Str, setBase64Str] = useState(null);

	const handleClickValidation = (base64Str) => {
		console.log("click :", base64Str);
		setBase64Str(base64Str);
	};

	return (
		<div className="App">
			<h1>E-signature</h1>
			<Canvas handleClickValidation={handleClickValidation} />
			{base64Str && <img src={base64Str} alt="e-signature" />}
		</div>
	);
}

export default App;
