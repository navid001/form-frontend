import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const arrowControls = useAnimation();

	useEffect(() => {
		const moveOutAndInAnimation = async () => {
			while (true) {
				await arrowControls.start({ x: "-25%", opacity: 0 });
				await arrowControls.start({ x: 0, opacity: 1 });
				await new Promise((resolve) => setTimeout(resolve, 2000));
				await arrowControls.start({ x: "25%", opacity: 0 });
			}
		};

		moveOutAndInAnimation();

		return () => {
			arrowControls.stop();
		};
	}, [arrowControls]);

	return (
		<>
			<motion.div
				className="hero bg-pinkish h-screen flex flex-col items-center justify-center py-6"
				initial={{ height: 0 }}
				animate={{ height: "100vh", transition: { duration: 0.3 } }}
				exit={{ y: "-100vh", transition: { duration: 0.3 } }}>
				<div className="grid grid-cols-12">
					<div className="col-span-1"></div>
					<div className="col-span-10 md:col-span-5 text-center md:text-start">
						<div className="max-w-sm md:max-w-md">
							<img
								src={"/Logo.png"}
								alt="Logo"
								className="w-full hover:scale-110 transition-all duration-300 pb-8 mb-4"
							/>
							<div className="text-xl md:text-4xl lg:text-6xl text-mineShaft font-bold my-6 md:my-6">
								The Next Big
								<br className="hidden md:inline" />
								<span className="inline md:hidden"> </span>
								Idea is Yours
							</div>
						</div>
						<div className="flex flex-col m-0 md:flex-row items-center">
							<div className="py-4 md:py-2 max-w-md w-full">
								<div className="text-charcoal text-lg md:text-xl font-semibold my-1 md:my-3">
									Ready to start your Journey?
								</div>
								<div className="flex space-between mt-8 text-center">
									<Link
										to="/apply"
										className="text-xs md:text-sm text-white bg-ribbonRed font-bold hover:scale-125 transition-all duration-300 py-4 md:py-4 px-2 lg:px-6 rounded-lg w-full md:w-auto flex justify-center items-center">
										<span className="mr-1">
											Apply Now Us
										</span>
										<span className="text-2xl leading-none">
											→
										</span>
									</Link>
									<Link
										to="/contact"
										className="text-xs md:text-sm text-ribbonRed bg-whte border-ribbonRed border-2 font-bold hover:scale-125 transition-all duration-300 py-4 md:py-4 px-2 lg:px-6 rounded-lg w-full md:w-auto ms-8 flex justify-center items-center">
										<span className="mr-1">Contact Us</span>
										<span className="text-2xl leading-none">
											→
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-1"></div>
					<motion.div
						className="hidden md:col-span-4 md:opacity-50 md:flex"
						initial={{ x: "-25%", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}>
						<motion.img
							src={"/arrow.svg"}
							alt="Arrow"
							className="hover:scale-110 transition-all duration-300 px-2 md:p-4 mb-4 h-full"
						/>
					</motion.div>
					<div className="col-span-1"></div>
				</div>
			</motion.div>
		</>
	);
};

export default Home;
