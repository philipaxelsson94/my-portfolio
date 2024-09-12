import * as React from "react";

import About from "./About";
import MyWork from "./MyWork";
import Welcome from "./Welcome";
import Projects from "./Projects";

function Home() {
	return (
		<>
			<Welcome />
			<MyWork />
			<Projects />
			<About />
		</>
	);
}

export default Home;
