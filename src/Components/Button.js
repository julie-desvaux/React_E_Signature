export default function Button({ children, id, onClick, type }) {
	return (
		<button id={id && id} onClick={onClick} type={type && type}>
			{children}
		</button>
	);
}
