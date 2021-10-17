import React, { useState } from "react";

export default function Navbar() {
	const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

	const handleShowMenuMobile = () => {
		setIsMobileMenuShow(!isMobileMenuShow);
	};

	return (
		<nav className="bg-cyan-700 fixed w-full">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={handleShowMenuMobile}
						>
							<span className="sr-only">Open main menu</span>

							<svg
								className="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							{/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
							<svg
								className="hidden h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex-shrink-0 flex items-center">
							<img
								className="block lg:hidden h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
							<img
								className="hidden lg:block h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
								alt="Workflow"
							/>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
								<a
									href="/signature"
									className="bg-cyan-900 text-white px-3 py-2 rounded-md text-sm font-medium"
									aria-current="page"
								>
									Signature
								</a>

								<a
									href="/role"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Role
								</a>

								<a
									href="/sessions"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Sessions
								</a>

								<a
									href="/calendier"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Calendrier
								</a>
								<a
									href="/historique"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Historique
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{isMobileMenuShow && (
				<div className="sm:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
						<a
							href="/signature"
							className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
							aria-current="page"
							onClick={handleShowMenuMobile}
						>
							Signature
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							onClick={handleShowMenuMobile}
						>
							Team
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							onClick={handleShowMenuMobile}
						>
							Projects
						</a>

						<a
							href="#"
							className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							onClick={handleShowMenuMobile}
						>
							Calendar
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
