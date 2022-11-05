import "../App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Profile from "../components/Profile";

const Homepage = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Profile />} />
			</Routes>
            <Footer/>
         </div>
	);
};
export default Homepage;
