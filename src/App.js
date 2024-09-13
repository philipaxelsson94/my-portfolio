import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BasicTabs from "./components/Tabs";
import Projects from "./components/Projects";
import Home from "./components/Home";

import Footer from "./components/Footer";

import Resume from "./components/Resume";
import { useState, useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";

function App() {
	const [done, setDone] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setDone(true);
		}, 800);
	}, []);

	return (
		<>
			{!done ? (
				<GridLoader class="loadingSpinner" color="#36d7b7" />
			) : (
				<>
					<NavBar />
					<Router>
						<Routes>
							<Route path="/" element={<Home />} />

							<Route path="/courses" element={<BasicTabs />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/resume" element={<Resume />} />
						</Routes>
					</Router>

					<Footer />
				</>
			)}
		</>
	);
}

export default App;
