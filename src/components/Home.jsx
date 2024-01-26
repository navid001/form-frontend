import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="hero bg-ribbonRed h-screen flex flex-col items-center justify-center text-white py-6">
				<img
					src={"/Logo.png"}
					alt="Logo"
					className="h-20 md:h-24 hover:scale-110 transition-all duration-300 bg-white p-4 rounded-lg mb-4"
				/>
				<div className="text-3xl md:text-5xl text-center font-bold my-12">
					The Next Big Idea is Yours
				</div>
				<div className="flex justify-center items-center">
					<div className="text-center border border-white rounded-lg p-6 max-w-xl space-y-4 shadow-lg mx-4 transition-all duration-300 py-16">
						<div className="text-xl md:text-2xl font-semibold my-4">
							Ready to turn your startup idea into reality?
						</div>
						<Link
							to="/apply"
							className="text-sm md:text-lg text-white border border-white font-semibold hover:text-ribbonRed hover:scale-110 transition-all duration-300 hover:bg-white py-2 px-4 rounded-lg inline-block shadow-md my-8 mb-12">
							Apply Now
						</Link>
					</div>

					<div className="flex justify-around items-center">
						<div className="text-center border border-white rounded-lg p-6 max-w-xl space-y-4 shadow-lg mx-4 transition-all duration-300 py-16">
							<div className="text-xl md:text-2xl font-semibold my-4">
								Have questions or want to explore possibilities?
							</div>
							<Link
								to="/contact"
								className="text-sm md:text-lg text-white border border-white font-semibold hover:text-ribbonRed hover:scale-110 transition-all duration-300 hover:bg-white py-2 px-4 rounded-lg inline-block shadow-md my-8 mb-12">
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
