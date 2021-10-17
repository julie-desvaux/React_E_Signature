import React, { useState } from "react";

export const RootContext = React.createContext();

export default ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	const [error, setError] = useState();

	const defaultContext = {
		authenticated,
		setAuthenticated,
		error,
		setError,
	};

	return <RootContext.Provider value={defaultContext}>{children}</RootContext.Provider>;
};
