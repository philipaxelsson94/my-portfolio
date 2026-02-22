import * as React from "react";

import About from "./About";
import MyWork from "./MyWork";
import Welcome from "./Welcome";
import Projects from "./Projects";
import Hobbies from "./Hobbies";

function Home() {
	return (
		<div style={{ scrollBehavior: "smooth" }}>
			<div id="home"><Welcome /></div>
			<div id="skills"><About /></div>
			<div id="experience"><MyWork /></div>
			<div id="projects"><Projects /></div>
			<div id="hobbies"><Hobbies /></div>
		</div>
	);

}

export default Home;
