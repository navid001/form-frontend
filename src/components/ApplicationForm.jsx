import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { motion } from "framer-motion";
import backgroundImage from "/background.png";

const ApplicationForm = () => {
	const [timeline, setTimeline] = useState(1);
	const form = useRef();
	const [errors, setErrors] = useState({});
	const [selectedWebsiteOption, setSelectedWebsiteOption] = useState(false);
	const [selectedFacebookOption, setSelectedFacebookOption] = useState(false);
	const [selectedStartupStream, setSelectedStartupStream] = useState("");
	const [otherStream, setOtherStream] = useState("");
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({
		applicant_name: "",
		email: "",
		contact_number: "",
		linkedin: "",
		startup_name: "",
		websiteRadio: "",
		website_link: "",
		facebookRadio: "",
		facebook_link: "",
		startupStreamRadio: "",
		other_stream_input: "",
		problem_description: "",
		proposed_solution: "",
		mvpRadio: "",
		demo_link: "",
		support_expectations: "",
	});
	const [anotherFormData, setAnotherFormData] = useState({
		applicant_name: "",
		email: "",
		contact_number: "",
		linkedin: "",
		startup_name: "",
		websiteRadio: "",
		website_link: "",
		facebookRadio: "",
		facebook_link: "",
		startupStreamRadio: "",
		other_stream_input: "",
		problem_description: "",
		proposed_solution: "",
		mvpRadio: "",
		demo_link: "",
		support_expectations: "",
	});

	const steps = [
		"Who Are You?",
		"About Your Startup",
		"Focus and Expectations",
	];

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleRadioChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value === "yes",
		});
	};

	const handleNext = () => {
		const inputs = form.current.getElementsByTagName("input");
		const textareas = form.current.getElementsByTagName("textarea");

		const allInputs = [...inputs, ...textareas];

		const newErrors = {};
		allInputs.forEach((input) => {
			if (input.value.trim() === "") {
				newErrors[input.name] = "This field is required";
			}
		});

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			setErrors({});
			setCurrentStep((prevStep) =>
				Math.min(steps.length - 1, prevStep + 1),
			);
			setTimeline(timeline + 1);
		}
	};

	const handleBack = () => {
		setCurrentStep((prevStep) => Math.max(0, prevStep - 1));
		setTimeline(timeline - 1);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("form", formData);
		setAnotherFormData(formData);
		setFormData({
			applicant_name: "",
			email: "",
			contact_number: "",
			linkedin: "",
			startup_name: "",
			websiteRadio: "",
			website_link: "",
			facebookRadio: "",
			facebook_link: "",
			startupStreamRadio: "",
			other_stream_input: "",
			problem_description: "",
			proposed_solution: "",
			mvpRadio: "",
			demo_link: "",
			support_expectations: "",
		});

		try {
			const response = await axios.post(
				"https://formbackend-qs5s.onrender.com/api/submit",
				anotherFormData,
			);

			if (response.status === 201) {
				console.log("Application Successful");
				console.log("Form Data:", formData);
				console.log("API Response:", response.data);
				setFormData({
					applicant_name: "",
					email: "",
					contact_number: "",
					linkedin: "",
					startup_name: "",
					websiteRadio: "",
					website_link: "",
					facebookRadio: "",
					facebook_link: "",
					startupStreamRadio: "",
					other_stream_input: "",
					problem_description: "",
					proposed_solution: "",
					mvpRadio: "",
					demo_link: "",
					support_expectations: "",
				});

				setErrors({});
				setTimeline(1);
				setCurrentStep(0);
				alert("Application Successful!");
			} else {
				console.error("Application failed");
				alert("Application Failed!");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<div
				className="bg-cover bg-center h-auto"
				style={{
					backgroundImage: `url(${backgroundImage})`,
					height: "auto",
				}}>
				<Navbar />

				<div className="flex items-center justify-center min-h-screen mx-4 mt-8 text-sm md:text-md">
					<motion.div
						className="bg-opacity-20 bg-white backdrop-blur-md border border-red-500 rounded-md p-6 max-w-3xl w-full space-y-4  shadow-lg mb-0 flex md:justify-around flex-col md:flex-row"
						initial={{ height: 0 }}
						animate={{
							height: "100%",
							transition: { duration: 0.5 },
						}}
						exit={{ y: "-100%", transition: { duration: 0.3 } }}>
						<div className="flex items-center max-w-xl">
							<ul className="steps md:steps-vertical steps-horizontal">
								{steps.map((step, index) => (
									<li
										key={index}
										className={`step ${
											currentStep >= index
												? "step-primary"
												: ""
										} transition-all duration-1000`}>
										{step}
									</li>
								))}
							</ul>
						</div>
						<div className="sideform max-w-2xl w-2xl">
							<form ref={form} onSubmit={handleSubmit}>
								{timeline === 1 && (
									<>
										<motion.div
											initial={{
												opacity: 0,
												x: "-400px",
											}}
											animate={{
												opacity: 1,
												x: "0",
												transition: { duration: 0.5 },
											}}
											exit={{
												opacity: 0,
												x: "-400px",
												transition: { duration: 0.3 },
											}}>
											<div className="relative h-16">
												<input
													type="text"
													id="applicant_name"
													name="applicant_name"
													value={
														formData.applicant_name
													}
													onChange={handleInputChange}
													className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
														errors.applicant_name &&
														"border-red-500"
													}`}
													placeholder="Applicant's Name"
												/>
												<label
													htmlFor="applicant_name"
													className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-2 top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
													Applicant's Name
												</label>
												{errors.applicant_name && (
													<p className="text-red-500 font-medium text-xs italic my-2">
														{errors.applicant_name}
													</p>
												)}
											</div>
											<div className="relative h-16">
												<input
													type="email"
													id="email"
													name="email"
													value={formData.email}
													onChange={handleInputChange}
													className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
														errors.email &&
														"border-red-500"
													}`}
													placeholder="Email"
												/>
												<label
													htmlFor="email"
													className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-2 top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
													Email
												</label>
												{errors.email && (
													<p className="text-red-500 font-medium text-xs italic my-2">
														{errors.email}
													</p>
												)}
											</div>
											<div className="relative h-16">
												<input
													type="text"
													id="contact_number"
													name="contact_number"
													value={
														formData.contact_number
													}
													onChange={handleInputChange}
													className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
														errors.contact_number &&
														"border-red-500"
													}`}
													placeholder="Contact Number"
												/>
												<label
													htmlFor="contact_number"
													className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-2 top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
													Contact Number
												</label>
												{errors.contact_number && (
													<p className="text-red-500 font-medium text-xs italic my-2">
														{errors.contact_number}
													</p>
												)}
											</div>
											<div className="relative h-16">
												<input
													type="text"
													id="linkedin"
													name="linkedin"
													value={formData.linkedin}
													onChange={handleInputChange}
													className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
														errors.linkedin &&
														"border-red-500"
													}`}
													placeholder="LinkedIn Profile Link"
												/>
												<label
													htmlFor="linkedin"
													className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-2 top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
													LinkedIn Profile Link
												</label>
												{errors.linkedin && (
													<p className="text-red-500 font-medium text-xs italic my-2">
														{errors.linkedin}
													</p>
												)}
											</div>
											<div className="flex justify-end">
												<button
													onClick={handleNext}
													className="btn text-ribbonRed bg-white border-ribbonRed hover:border-white hover:text-white  hover:bg-ribbonRed transition-all duration-500">
													Next
												</button>
											</div>
										</motion.div>
									</>
								)}

								{timeline === 2 && (
									<>
										<motion.div
											initial={{
												opacity: 0,
												x: "-400px",
											}}
											animate={{
												opacity: 1,
												x: "0",
												transition: { duration: 0.5 },
											}}
											exit={{
												opacity: 0,
												x: "-400px",
												transition: { duration: 0.3 },
											}}>
											<div className=" max-w-96">
												<div className="relative h-20 mt-2">
													<input
														type="text"
														id="startup_name"
														name="startup_name"
														value={
															formData.startup_name
														}
														onChange={
															handleInputChange
														}
														className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
															errors.startup_name &&
															"border-red-500"
														}`}
														placeholder="What is the name of your startup or idea?"
													/>
													<label
														htmlFor="startup_name"
														className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-[-20%] top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
														What is the name of your
														startup or idea?
													</label>
													{errors.startup_name && (
														<p className="text-red-500 font-medium text-xs italic my-2">
															{
																errors.startup_name
															}
														</p>
													)}
												</div>
												<div className="relative h-auto min-h-20 mt-2">
													<div className="flex items-center">
														<label className="mr-2 text-sm md:text-md font-medium text-gray-900">
															Does your startup
															have a website?
														</label>
														<div className="flex items-center">
															<input
																type="radio"
																id="websiteYes"
																name="websiteRadio"
																value="yes"
																className="mr-1"
																onChange={() => {
																	setSelectedWebsiteOption(
																		true,
																	);
																}}
															/>
															<label
																htmlFor="websiteYes"
																className="text-sm">
																Yes
															</label>
														</div>
														<div className="flex items-center ml-4">
															<input
																type="radio"
																id="websiteNo"
																name="websiteRadio"
																value="no"
																className="mr-1"
																onChange={() => {
																	setSelectedWebsiteOption(
																		false,
																	);
																}}
															/>
															<label
																htmlFor="websiteNo"
																className="text-sm">
																No
															</label>
														</div>
													</div>
													{selectedWebsiteOption ===
														true && (
														<>
															<div className="relative h-16">
																<input
																	type="text"
																	id="website_link"
																	name="website_link"
																	value={
																		formData.website_link
																	}
																	onChange={
																		handleInputChange
																	}
																	className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
																		errors.website_link &&
																		"border-red-500"
																	}`}
																	placeholder="Please Provide the link to your website:"
																/>
																<label
																	htmlFor="website_link"
																	className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-[-20%] top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
																	Please
																	Provide the
																	link to your
																	website:
																</label>
																{errors.website_link && (
																	<p className="text-red-500 font-medium text-xs italic my-2">
																		{
																			errors.website_link
																		}
																	</p>
																)}
															</div>
														</>
													)}
												</div>
												<div className="relative h-auto min-h-20 mt-2">
													<div className="flex items-center">
														<label className="mr-2 text-sm md:text-md font-medium text-gray-900">
															Does your startup
															have a Facebook
															page?
														</label>
														<div className="flex items-center">
															<input
																type="radio"
																id="facebookYes"
																name="facebookRadio"
																value="yes"
																className="mr-1"
																onChange={() => {
																	setSelectedFacebookOption(
																		true,
																	);
																}}
															/>
															<label
																htmlFor="facebookYes"
																className="text-sm">
																Yes
															</label>
														</div>
														<div className="flex items-center ml-4">
															<input
																type="radio"
																id="facebookNo"
																name="facebookRadio"
																value="no"
																className="mr-1"
																onChange={() => {
																	setSelectedFacebookOption(
																		false,
																	);
																}}
															/>
															<label
																htmlFor="facebookNo"
																className="text-sm">
																No
															</label>
														</div>
													</div>
													{selectedFacebookOption ===
														true && (
														<>
															<div className="relative h-auto">
																<input
																	type="text"
																	id="facebook_link"
																	name="facebook_link"
																	value={
																		formData.facebook_link
																	}
																	onChange={
																		handleInputChange
																	}
																	className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
																		errors.facebook_link &&
																		"border-red-500"
																	}`}
																	placeholder="Please Provide the link to your Facebook Page:"
																/>
																<label
																	htmlFor="facebook_link"
																	className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-[-20%] top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
																	Please
																	Provide the
																	link to your
																	FB Page:
																</label>
																{errors.facebook_link && (
																	<p className="text-red-500 font-medium text-xs italic my-2">
																		{
																			errors.facebook_link
																		}
																	</p>
																)}
															</div>
														</>
													)}
												</div>
												<div className="relative h-auto mt-6">
													<div className="block">
														<label className="text-sm md:text-md font-medium text-gray-900 mb-2">
															Can you categorize
															your startup under
															any of these
															streams?
														</label>
													</div>
													<div className="flex items-center">
														<div className="flex flex-col items-center mb-2">
															<input
																type="radio"
																id="impactStream"
																name="startupStreamRadio"
																value="Impact"
																className="mr-1"
																onChange={() => {
																	setSelectedStartupStream(
																		"Impact",
																	);
																	setOtherStream(
																		"",
																	);
																}}
															/>
															<label
																htmlFor="impactStream"
																className="text-xs md:text-xs text-center">
																Impact Startups
																Stream
															</label>
														</div>
														<div className="flex flex-col items-center mb-2">
															<input
																type="radio"
																id="womenStream"
																name="startupStreamRadio"
																value="Women"
																className="mr-1"
																onChange={() => {
																	setSelectedStartupStream(
																		"Women",
																	);
																	setOtherStream(
																		"",
																	);
																}}
															/>
															<label
																htmlFor="womenStream"
																className="text-xs md:text-xs text-center">
																Women-Led
																Startup Stream
															</label>
														</div>
														<div className="flex flex-col items-center mb-2">
															<input
																type="radio"
																id="grassrootsStream"
																name="startupStreamRadio"
																value="Grassroots"
																className="mr-1"
																onChange={() => {
																	setSelectedStartupStream(
																		"Grassroots",
																	);
																	setOtherStream(
																		"",
																	);
																}}
															/>
															<label
																htmlFor="grassrootsStream"
																className="text-xs md:text-xs text-center">
																Grassroots
																Startup Stream
															</label>
														</div>
														<div className="flex flex-col items-center mb-2">
															<input
																type="radio"
																id="otherStream"
																name="startupStreamRadio"
																value="Other"
																className="mr-1"
																onChange={() => {
																	setSelectedStartupStream(
																		"Other",
																	);
																}}
															/>
															<label
																htmlFor="otherStream"
																className="text-xs md:text-xs text-center">
																Other
															</label>
														</div>
													</div>
													{selectedStartupStream ===
														"Other" && (
														<div className="relative h-16">
															<input
																type="text"
																id="other_stream_input"
																name="other_stream_input"
																value={
																	formData.other_stream_input
																}
																className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
																	errors.other_stream_input &&
																	"border-red-500"
																}`}
																placeholder="Specify your startup stream"
																onChange={(
																	e,
																) => {
																	handleInputChange(
																		e,
																	);
																	setOtherStream(
																		e.target
																			.value,
																	);
																}}
															/>
															<label
																htmlFor="other_stream_input"
																className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-2 top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
																Specify your
																startup stream
															</label>
															{errors.other_stream_input && (
																<p className="text-red-500 font-medium text-xs italic my-2">
																	{
																		errors.other_stream_input
																	}
																</p>
															)}
														</div>
													)}
												</div>
												<div className="flex justify-between">
													<button
														onClick={handleBack}
														className="btn text-ribbonRed bg-white border-ribbonRed hover:border-white hover:text-white  hover:bg-ribbonRed transition-all duration-500">
														Back
													</button>
													<button
														onClick={handleNext}
														className="btn text-ribbonRed bg-white border-ribbonRed hover:border-white hover:text-white  hover:bg-ribbonRed transition-all duration-500">
														Next
													</button>
												</div>
											</div>
										</motion.div>
									</>
								)}

								{timeline === 3 && (
									<>
										<motion.div
											initial={{
												opacity: 0,
												x: "-400px",
											}}
											animate={{
												opacity: 1,
												x: "0",
												transition: { duration: 0.5 },
											}}
											exit={{
												opacity: 0,
												x: "-400px",
												transition: { duration: 0.3 },
											}}>
											<div className="relative h-auto min-h-20 mt-2">
												<input
													id="problem_description"
													name="problem_description"
													rows="4"
													value={
														formData.problem_description
													}
													onChange={handleInputChange}
													className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
														errors.problem_description &&
														"border-red-500"
													}`}
													placeholder="Enter a brief description"
												/>
												<label
													htmlFor="problem_description"
													className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-[-10%] top-[-30%] text-blue-500 text-xs peer-focus:top-[-30%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
													What problem(s) are you
													solving with your solution?
												</label>
												{errors.problem_description && (
													<p className="text-red-500 font-medium text-xs italic my-2">
														{
															errors.problem_description
														}
													</p>
												)}
											</div>

											<div className="relative h-auto min-h-20 mt-2">
												<input
													id="proposed_solution"
													name="proposed_solution"
													rows="4"
													value={
														formData.proposed_solution
													}
													onChange={handleInputChange}
													className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
														errors.proposed_solution &&
														"border-red-500"
													}`}
													placeholder="Enter a brief description"
												/>
												<label
													htmlFor="proposed_solution"
													className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-2 top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
													What is your proposed
													solution?
												</label>
												{errors.proposed_solution && (
													<p className="text-red-500 font-medium text-xs italic my-2">
														{
															errors.proposed_solution
														}
													</p>
												)}
											</div>

											<div className="relative h-auto min-h-20 mt-2">
												<label
													htmlFor="mvp"
													className="text-sm md:text-md font-medium text-gray-900 mb-2 mt-4">
													Do you have a minimum viable
													product?
												</label>
												<div className="flex items-center justify-around">
													<div className="flex items-center mr-4">
														<input
															type="radio"
															id="mvpYes"
															name="mvpRadio"
															value="yes"
															className="mr-1 mb-6"
														/>{" "}
														<label
															htmlFor="mvpYes"
															className="text-sm">
															Yes
														</label>
													</div>
													<div className="flex items-center">
														<input
															type="radio"
															id="mvpNo"
															name="mvpRadio"
															value="no"
															className="mr-1 mb-6"
														/>
														<label
															htmlFor="mvpNo"
															className="text-sm">
															No
														</label>
													</div>
												</div>

												{formData.mvp === "yes" && (
													<div className="relative h-auto min-h-20 mt-2">
														<input
															type="url"
															id="demo_link"
															name="demo_link"
															value={
																formData.demo_link
															}
															onChange={
																handleInputChange
															}
															className={`peer block p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
																errors.demo_link &&
																"border-red-500"
															}`}
															placeholder="Demo Link"
														/>
														<label
															htmlFor="demo_link"
															className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-[-20%] top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
															Please attach the
															link to your product
															demo (if any).
														</label>
														{errors.demo_link && (
															<p className="text-red-500 font-medium text-xs italic my-2">
																{
																	errors.demo_link
																}
															</p>
														)}
													</div>
												)}
											</div>

											<div className="relative h-auto min-h-20 mt-2">
												<input
													id="support_expectations"
													name="support_expectations"
													rows="4"
													value={
														formData.support_expectations
													}
													onChange={handleInputChange}
													className={`peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-sm md:text-md placeholder-transparent ${
														errors.support_expectations &&
														"border-red-500"
													}`}
													placeholder="Enter a brief description"
												/>
												<label
													htmlFor="support_expectations"
													className="block peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-md font-medium peer-placeholder-shown:text-gray-700 absolute left-2 peer-placeholder-shown:top-[-10%] top-[-30%] text-blue-500 text-xs peer-focus:top-[-30%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
													What kind of support are you
													expecting to get from NSUSN?
												</label>
												{errors.support_expectations && (
													<p className="text-red-500 font-medium text-xs italic my-2">
														{
															errors.support_expectations
														}
													</p>
												)}
											</div>

											<div className="flex justify-between">
												<button
													onClick={handleBack}
													className="btn text-ribbonRed bg-white border-ribbonRed hover:border-white hover:text-white  hover:bg-ribbonRed transition-all duration-500">
													Back
												</button>
												<button
													onClick={handleSubmit}
													className="btn text-ribbonRed bg-white border-ribbonRed hover:border-white hover:text-white  hover:bg-ribbonRed transition-all duration-500">
													Submit
												</button>
											</div>
										</motion.div>
									</>
								)}
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};
export default ApplicationForm;
