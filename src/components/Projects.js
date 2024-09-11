import * as React from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Projects() {
	return (
		<Container align="center" maxWidth="xl">
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Box
							component="img"
							sx={{
								width: "100%",
							}}
							alt=""
							src={require("../Assets/illustration2.png")}
						/>
					</Grid>
					<Grid item xs={6}>
						FLIGHT FIGHTERS
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
export default Projects;
