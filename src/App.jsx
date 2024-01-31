import { Routes, Route, useLocation } from "react-router-dom";
import ApplicationForm from "./components/ApplicationForm";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const location = useLocation();
	return (
		<>
			<div className="font-mont">
				<AnimatePresence>
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Home />} />
						<Route path="/apply" element={<ApplicationForm />} />
						<Route path="/contact" element={<ContactUs />} />
					</Routes>
				</AnimatePresence>
			</div>
		</>
	);
};

export default App;
