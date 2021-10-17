export default function Button({ children, id, onClick, type }) {
	return (
		<button
			id={id}
			type="submit"
			className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
}
