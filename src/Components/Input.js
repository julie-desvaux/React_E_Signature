import React from "react";

export default function Input({ id, label, name, type, autocomplete, placeholder, required, placeInput, onChange }) {
	return (
		<div>
			<label for={id} className="sr-only">
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				autocomplete={autocomplete}
				required={required ? required : false}
				className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${
					placeInput === "top" ? "rounded-t-md" : placeInput === "bottom" ? "rounded-b-md" : null
				} focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	);
}
