import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";

export default function Welcome() {
	return (
		<Box className="welcomeContainer" sx={{ mb: 8, pt: 4, pb: 4 }}>
			<Container
				maxWidth="xl"
				align="flex-start"
				sx={{ pt: "3rem", width: "100%" }}
			>
				<Grid container spacing={2} columns={12} sx={{ mt: 4 }}>
					<Grid item xs={12} md={6}>
						<Typography
							variant="h1"
							sx={{
								fontWeight: 700,
								color: "#272160",
							}}
						>
							<span style={{ color: "#c7e1f3" }}>&lt;/&gt;</span>WELCOME.
						</Typography>

						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								color: "white",
							}}
						>
							I'm an civil engineer in media technology with a master in
							interaction design.
							<br />
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
