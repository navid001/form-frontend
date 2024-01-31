import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<motion.div
				className="hero bg-ribbonRed h-screen flex flex-col items-center justify-center text-white py-6"
				initial={{ height: 0 }}
				animate={{ height: "100vh", transition: { duration: 0.3 } }}
				exit={{ y: "-100vh", transition: { duration: 0.3 } }}>
				<img
					src={"/Logo.png"}
					alt="Logo"
					className="h-16 md:h-24 hover:scale-110 transition-all duration-300 bg-white p-2 md:p-4 rounded-lg mb-4"
				/>
				<div className="text-2xl md:text-3xl text-center font-bold my-6 md:my-12">
					The Next Big Idea is Yours
				</div>
				<div className="flex flex-col mt-12 mb-0 md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
					<div className="text-center border border-white rounded-lg p-4 md:p-6 max-w-md w-full md:w-auto">
						<div className="text-md md:text-lg font-semibold my-4 md:my-6">
							Ready to turn your startup idea into reality?
						</div>
						<Link
							to="/apply"
							className="text-xs md:text-sm text-white border border-white font-semibold hover:text-ribbonRed hover:scale-110 transition-all duration-300 hover:bg-white py-1 md:py-2 px-2 md:px-4 rounded-lg inline-block w-full md:w-auto">
							Apply Now
						</Link>
					</div>

					<div className="text-center border border-white rounded-lg p-4 md:p-6 max-w-md w-full md:w-auto">
						<div className="text-md md:text-lg font-semibold my-4 md:my-6">
							Have questions or want to explore possibilities?
						</div>
						<Link
							to="/contact"
							className="text-xs md:text-sm text-white border border-white font-semibold hover:text-ribbonRed hover:scale-110 transition-all duration-300 hover:bg-white py-1 md:py-2 px-2 md:px-4 rounded-lg inline-block w-full md:w-auto">
							Contact Us
						</Link>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Home;
