import React from "react";
import Navbar from "../Components/Navbar";

export default function Layout({ title, children }) {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="pt-14">
				<header class="bg-white shadow">
					<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<h1 class="text-3xl font-bold text-gray-900">{title}</h1>
					</div>
				</header>
				<main>{children}</main>
			</div>
		</div>
	);
}
