import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingNav from "./components/FloatingNav";

import BasicTabs from "./components/Tabs";
import Projects from "./components/Projects";
import Home from "./components/Home";
import HashLoader from "react-spinners/HashLoader";

import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "#000000",
			paper: "#0a0a0a",
		},
		primary: {
			main: "#ededed", // electric blue accent
		},
		secondary: {
			main: "#a1a1aa", // soft purple
		},
	},
	typography: {
		fontFamily: '"Inter", sans-serif',
		h1: {
			fontFamily: '"Space Grotesk", sans-serif',
		},
		h2: {
			fontFamily: '"Space Grotesk", sans-serif',
		},
		h3: {
			fontFamily: '"Space Grotesk", sans-serif',
		},
		h4: {
			fontFamily: '"Space Grotesk", sans-serif',
		},
		h5: {
			fontFamily: '"Space Grotesk", sans-serif',
		},
		h6: {
			fontFamily: '"Space Grotesk", sans-serif',
		},
		button: {
			fontFamily: '"Space Grotesk", sans-serif',
			textTransform: "none", // Modern technical feel
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				}
			}
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: "#111111",
					backgroundImage: "none",
					borderRadius: 16,
					border: "1px solid rgba(255, 255, 255, 0.05)",
				}
			}
		}
	}
});

function App() {
	const [done, setDone] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setDone(true);
		}, 800);
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{!done ? (
				<div className="loadingSpinner">
					<HashLoader color="#00e5ff" />
				</div>
			) : (
				<>
					<FloatingNav />
					<Router>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/courses" element={<BasicTabs />} />
							<Route path="/projects" element={<Projects />} />
						</Routes>
					</Router>
					<Footer />
				</>
			)}
		</ThemeProvider>
	);
}

export default App;
