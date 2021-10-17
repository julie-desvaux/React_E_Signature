import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { RootContext } from "../ContextProvider.js";
import Input from "../Components/Input.js";
import Layout from "../Layout/Layout.js";

export default function Login() {
	const context = useContext(RootContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	console.log(context.authenticated);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);
		fetch("/api/auth/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": true,
				"Access-Control-Allow-Headers": true,
			},
			credentials: "same-origin",
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((response) => response.json())
			.then((res) => {
				if (res.success) {
					context.setAuthenticated(true);
					history.push("/signature");
				}
			});
	};

	return (
		<Layout title="Connexion">
			<div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
				<div class="max-w-md w-full">
					<form class="space-y-6">
						<input type="hidden" name="remember" value="true" />
						<div class="rounded-md shadow-sm -space-y-px">
							<Input
								id="email-adress"
								label="Adresse Email"
								name="email"
								type="email"
								autocomplete="email"
								required={true}
								placeholder="Adresse Email"
								placeInput="top"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								id="password"
								label="Adresse Email"
								name="password"
								type="password"
								autocomplete="current-password"
								required={true}
								placeholder="Password"
								placeInput="bottom"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div>
							<button
								type="submit"
								class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								onClick={(e) => handleSubmit(e)}
							>
								<span class="absolute left-0 inset-y-0 flex items-center pl-3">
									<svg
										class="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
								Connexion
							</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}
