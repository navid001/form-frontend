import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ContactUs = () => {
	const form = useRef();
	const [errors, setErrors] = useState({
		user_name: "",
		user_email: "",
		subject: "",
		message: "",
	});
	const [isEmptyForm, setIsEmptyForm] = useState(true);

	const validateForm = () => {
		let isValid = true;
		const newErrors = {
			user_name: "",
			user_email: "",
			subject: "",
			message: "",
		};

		if (!form.current.user_name.value.trim()) {
			newErrors.user_name = "This is a required field.";
			isValid = false;
		}

		if (!form.current.user_email.value.trim()) {
			newErrors.user_email = "This is a required field.";
			isValid = false;
		}

		if (!form.current.subject.value.trim()) {
			newErrors.subject = "This is a required field.";
			isValid = false;
		}

		if (!form.current.message.value.trim()) {
			newErrors.message = "This is a required field.";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};
	const checkEmpty = () => {
		let isEmpty = true;

		if (
			form.current.user_name.value.trim() &&
			form.current.user_email.value.trim() &&
			form.current.message.value.trim() &&
			form.current.subject.value.trim()
		) {
			isEmpty = false;
		}

		setIsEmptyForm(isEmpty);

		return isEmpty;
	};

	const handleInputChange = (fieldName) => {
		const newErrors = { ...errors, [fieldName]: "" };
		setErrors(newErrors);
		checkEmpty();
	};

	const showAlert = (message) => {
		alert(message);
		setErrors({
			user_name: "",
			user_email: "",
			subject: "",
			message: "",
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (validateForm()) {
			emailjs
				.sendForm(
					"service_niilrbe",
					"template_oynokhb",
					form.current,
					"iIdd-YSULKO9834ya",
				)
				.then(
					(result) => {
						showAlert("Message sent successfully");
						form.current.reset();
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					},
				);
		}
	};

	return (
		<>
			<Navbar />
			<div className="flex items-center justify-center min-h-screen mx-4">
				<div className="bg-opacity-20 bg-white backdrop-blur-md border border-red-500 rounded-md p-6 max-w-xl w-full space-y-4 shadow-lg">
					<h1 className="flex justify-center text-3xl font-bold text-mineShaft my-6">
						Contact Us
					</h1>
					<form ref={form} onSubmit={sendEmail}>
						<div className="relative h-16">
							<input
								type="text"
								id="user_name"
								name="user_name"
								className="peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-base placeholder-transparent"
								placeholder="Full Name"
								onChange={() => handleInputChange("user_name")}
							/>
							<label
								htmlFor="user_name"
								className="block peer-placeholder-shown:text-base font-medium peer-placeholder-shown:text-gray-700  absolute left-2 peer-placeholder-shown:top-2  top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
								Full Name
							</label>
							{errors.user_name && (
								<p className="text-red-500 font-medium text-xs italic my-2">
									{errors.user_name}
								</p>
							)}
						</div>
						<div className="relative h-16">
							<input
								type="email"
								id="user_email"
								name="user_email"
								className="peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-base placeholder-transparent"
								placeholder="E-mail"
								onChange={() => handleInputChange("user_email")}
							/>
							<label
								htmlFor="user_email"
								className="block peer-placeholder-shown:text-base font-medium peer-placeholder-shown:text-gray-700  absolute left-2 peer-placeholder-shown:top-2  top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
								E-mail
							</label>
							{errors.user_email && (
								<p className="text-red-500 font-medium text-xs italic my-2">
									{errors.user_email}
								</p>
							)}
						</div>
						<div className="relative h-16">
							<input
								type="text"
								name="subject"
								id="subject"
								className="peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-base placeholder-transparent"
								placeholder="Subject"
								onChange={() => handleInputChange("subject")}
							/>
							<label
								htmlFor="subject"
								className="block peer-placeholder-shown:text-base font-medium peer-placeholder-shown:text-gray-700  absolute left-2 peer-placeholder-shown:top-2  top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
								Subject
							</label>
							{errors.subject && (
								<p className="text-red-500 font-medium text-xs italic my-2">
									{errors.subject}
								</p>
							)}
						</div>
						<div className="relative h-16">
							<textarea
								name="message"
								id="message"
								className="peer block mt-4 p-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-gray-900 bg-transparent border-b-2 border-0 border-gray-300 appearance-none text-base placeholder-transparent"
								placeholder="Message"
								onChange={() =>
									handleInputChange("message")
								}></textarea>
							<label
								htmlFor="message"
								className="block peer-placeholder-shown:text-base font-medium peer-placeholder-shown:text-gray-700  absolute left-2 peer-placeholder-shown:top-6 top-[-20%] text-blue-500 text-xs peer-focus:top-[-20%] peer-focus:text-blue-500 peer-focus:text-xs transition-all duration-300">
								Message
							</label>
							{errors.message && (
								<p className="text-red-500 font-medium text-xs italic my-2">
									{errors.message}
								</p>
							)}
						</div>
						<div className="flex justify-center mt-8">
							<button
								className={`btn btn-outline ${
									!isEmptyForm
										? "text-white bg-ribbonRed hover:scale-110 hover:text-white hover:bg-ribbonRed"
										: "text-ribbonRed border-ribbonRed hover:scale-110 hover:text-ribbonRed hover:border-ribbonRed hover:bg-white"
								} transition-all duration-500`}>
								Send Message
							</button>
						</div>
					</form>
					<div className="flex justify-around my-12">
						<Link
							to="https://www.facebook.com/NSUStartupsNext"
							target="_blank">
							<div className="h-12 w-12 hover:scale-110 transition-all duration-300 p-2 border-black border-2 rounded-full bg-white flex justify-center items-center">
								<img
									src={"/facebook-f.svg"}
									alt="facebook"
									className="h-6"
								/>
							</div>
						</Link>
						<Link
							to="https://twitter.com/nsustartupsnext?lang=en"
							target="_blank">
							<div className="h-12 w-12 hover:scale-110 transition-all duration-300 p-2 border-black border-2 rounded-full bg-white flex justify-center items-center">
								<img
									src={"/twitter.svg"}
									alt="twitter"
									className="h-6"
								/>
							</div>
						</Link>
						<Link
							to="https://www.linkedin.com/company/north-south-university-startups-next/?originalSubdomain=bd"
							target="_blank">
							<div className="h-12 w-12 hover:scale-110 transition-all duration-300 p-2 border-black border-2 rounded-full bg-white flex justify-center items-center">
								<img
									src={"/linkedin.svg"}
									alt="linkedin"
									className="h-6"
								/>
							</div>
						</Link>
						<a
							href={`mailto:nsu.sn@northsouth.edu`}
							target="_blank"
							rel="noopener noreferrer">
							<div className="h-12 w-12 hover:scale-110 transition-all duration-300 p-2 border-black border-2 rounded-full bg-white flex justify-center items-center">
								<img
									src={"/envelope-solid.svg"}
									alt="email"
									className="h-6"
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
