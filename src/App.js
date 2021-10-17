import { useContext } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { RootContext } from "./ContextProvider.js";
import ContextProvider from "./ContextProvider.js";

// COMPONENTS
import Navbar from "./Components/Navbar.js";
import Login from "./Views/Login.js";
import ESign from "./Views/ESign.js";
import Role from "./Views/Role.js";

function App() {
	const PrivateRoute = ({ component: Component, ...rest }) => {
		const context = useContext(RootContext);

		return (
			<Route
				{...rest}
				render={(props) => {
					return context && context.authenticated ? <Component {...props} /> : <Redirect to="/login" />;
				}}
			/>
		);
	};

	return (
		<Router>
			<ContextProvider>
				<Switch>
					{/* <Route exact path="/" component={App} /> */}
					<Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} />
					{/* <Route exact path="/create-account" component={CreateAccount} />
						<Route exact path="/confirmEmail" component={ConfirmEmail} />
						<Route exact path="/validation/:token" component={Validation} />
						<Route exact path="/forgot-password" component={ForgotPassword} />
						<Route exact path="/reset-password/:token" component={ResetPassword} /> */}

					<PrivateRoute exact path="/signature" component={ESign} />
					<PrivateRoute exact path="/role" component={Role} />

					{/* <Route component={NotFound} /> */}
				</Switch>
			</ContextProvider>
		</Router>
	);
}

export default App;
