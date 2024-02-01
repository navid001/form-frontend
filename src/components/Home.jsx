import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<motion.div
				className="hero bg-pinkish h-screen flex flex-col items-center justify-center py-6"
				initial={{ height: 0 }}
				animate={{ height: "100vh", transition: { duration: 0.3 } }}
				exit={{ y: "-100vh", transition: { duration: 0.3 } }}>
				<div class="grid grid-cols-12">
					<div class="col-span-1"></div>
					<div class="col-span-10 md:col-span-5 text-center md:text-start">
						<div className="max-w-sm md:max-w-md">
							<img
								src={"/Logo.png"}
								alt="Logo"
								className="w-full hover:scale-110 transition-all duration-300 pb-8  mb-4"
							/>
							<div className="text-xl md:text-4xl lg:text-6xl text-mineShaft font-bold my-6 md:my-6">
								The Next Big
								<br className="hidden md:inline" />
								<span className="inline md:hidden">
									{" "}
								</span>
								Idea is Yours
							</div>
						</div>
						<div className="flex flex-col m-0 md:flex-row items-center">
							<div className="py-4 md:py-2 max-w-md w-full">
								<div className="text-charcoal text-lg md:text-xl font-semibold my-1 md:my-3">
									Ready to start you Journey?
								</div>
								<div className="flex space-between mt-8 text-center">
									<Link
										to="/apply"
										className="text-sm md:text-sm text-white bg-ribbonRed font-bold  hover:scale-125 transition-all duration-300  py-4 md:py-4 px-2 md:px-6 rounded-lg inline-block w-full md:w-auto mx-3">
										Apply Now
									</Link>
									<Link
										to="/contact"
										className="text-sm md:text-sm text-ribbonRed bg-whte border-ribbonRed border-2 font-bold hover:scale-125 transition-all duration-300  py-4 md:py-4 px-2 md:px-6 rounded-lg inline-block w-full md:w-auto mx-3">
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div class="col-span-1"></div>
					<div class="hidden md:col-span-4 md:opacity-50 md:flex">
						<img
							src={"/arrow.svg"}
							alt="Logo"
							className="hover:scale-110 transition-all duration-300 px-2 md:p-4 mb-4 h-full"
						/>
					</div>
					<div class="col-span-1"></div>
				</div>
			</motion.div>
		</>
	);
};

export default Home;
