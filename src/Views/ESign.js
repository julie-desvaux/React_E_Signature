import { useState } from "react";

// COMPONENT
import Canvas from "../Components/Canvas";
import Layout from "../Layout/Layout";

export default function ESign() {
	const handleClickValidation = (base64Str) => {
		fetch("/api/signatures", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": true,
				"Access-Control-Allow-Headers": true,
			},
			credentials: "same-origin",
			body: JSON.stringify({
				signature: base64Str,
			}),
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<Layout title="E-Signature">
			<div class="py-6 sm:px-6 lg:px-8">
				<div class="px-4 py-6 sm:px-0">
					{/* <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div> */}
					<Canvas handleClickValidation={handleClickValidation} />
				</div>
			</div>
		</Layout>
	);
}
