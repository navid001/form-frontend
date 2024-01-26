import { Routes, Route } from "react-router-dom";
import ApplicationForm from "./components/ApplicationForm";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
const App = () => {
	return (
		<>
			<div className="font-mont">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/apply" element={<ApplicationForm />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
