import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="navbar bg-white shadow-md flex justify-center absolute m-0 top-0 z-20">
				<div className="flex-1 max-w-3xl ">
					<Link to="/">
						<img
							src={"/Logo.png"}
							alt="Logo"
							className="h-8 md:h-12 hover:scale-110 transition-all duration-300"
						/>
					</Link>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1 text-xs md:text-base">
						<li>
							<Link
								to="/apply"
								className="text-gray-900 font-semibold hover:text-ribbonRed hover:scale-110 transition-all duration-300 hover:bg-white">
								Apply Now
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="text-gray-900 font-semibold hover:text-ribbonRed hover:scale-110 transition-all duration-300 hover:bg-white">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
