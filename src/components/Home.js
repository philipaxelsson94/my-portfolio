import * as React from "react";

import MiddleImage from "./MiddleImage";
import Presentation from "./Presentation";
import About from "./About";
import MyWork from "./MyWork";
import Welcome from "./Welcome";

function Home() {
	return (
		<>
			<Welcome />
			<MyWork />
			<About />
		</>
	);
}

export default Home;
