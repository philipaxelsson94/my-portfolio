import * as React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
function Projects() {
	return (
		<Container align="center" sx={{ my: 8 }}>
			<Typography
				variant="h1"
				sx={{
					my: 4,
					textAlign: "center",
					fontWeight: 700,
					color: "#02244d",
					fontSize: { xs: "3rem", md: "3rem" },
				}}
			>
				Projects
			</Typography>
			<Box sx={{ flexGrow: 1, backgroundColor: "#e8e8e8" }}>
				<Grid container>
					<Grid
						sx={{
							m: "auto",
							p: 0,
						}}
						item
						xs={12}
						md={6}
					>
						<Typography
							variant="h1"
							sx={{
								mt: 4,
								mb: 2,
								textAlign: "center",
								fontWeight: 700,
								color: "black",
								fontSize: { xs: "2rem" },
							}}
						>
							Flight Fighters
						</Typography>
						<Typography
							variant="body2"
							sx={{ px: 2, mb: 4, color: "text.secondary" }}
						>
							This project aimed to help employees and other stakeholders at KTH
							to make better decisions regarding their flying habits by using a
							visualization tool.
						</Typography>
						<Stack
							sx={{ my: 2, justifyContent: "center" }}
							direction="row"
							spacing={1}
						>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="FRONTEND"
								color="primary"
							/>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="DATA VISUALISATION"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="UX/UI"
								color="success"
							/>
						</Stack>

						<Button
							href="https://flight-kth.firebaseapp.com/about"
							target="_blank"
							variant="outlined"
							sx={{
								":hover": {
									color: "white",
									borderColor: "black",
									backgroundColor: "black",
								},
								borderColor: "black",

								my: 2,
								color: "black",
							}}
						>
							Visit project
						</Button>
					</Grid>
					<Grid sx={{ maxHeight: 365 }} item xs={12} md={6}>
						<Box
							component="img"
							sx={{ height: "100%", width: "100%" }}
							alt=""
							src={require("../Assets/map.png")}
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid sx={{ maxHeight: 365 }} item xs={12} md={6}>
						<Box
							component="img"
							sx={{ height: "100%", width: "100%" }}
							alt=""
							src={require("../Assets/carbon.jpg")}
						/>
					</Grid>
					<Grid
						sx={{
							backgroundColor: "#e8e8e8",
							direction: "column",
							alignItems: "center",
							justifyContent: "center",
							m: "auto",
							p: 0,
						}}
						item
						xs={12}
						md={6}
					>
						<Typography
							variant="h1"
							sx={{
								mt: 4,
								mb: 2,
								textAlign: "center",
								fontWeight: 700,
								color: "black",
								fontSize: { xs: "2rem" },
							}}
						>
							Carbon Calculator
						</Typography>
						<Typography
							variant="body2"
							sx={{ px: 2, mb: 4, color: "text.secondary" }}
						>
							This app helps users plan their travel routes and calculate the
							carbon footprint of their trips based on different vehicle types.
							By integrating with the Google Maps API, it provides accurate
							distance data and allows users to compare the environmental impact
							of various transportation options, promoting more eco-conscious
							travel decisions."
						</Typography>
						<Stack
							sx={{ my: 2, justifyContent: "center" }}
							direction="row"
							spacing={1}
						>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="FRONTEND"
								color="primary"
							/>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="DATA VISUALISATION"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="UX/UI"
								color="success"
							/>
						</Stack>

						<Button
							href="https://carbon-calculator-d4d9b.firebaseapp.com/"
							target="_blank"
							variant="outlined"
							sx={{
								":hover": {
									color: "white",
									borderColor: "black",
									backgroundColor: "black",
								},
								borderColor: "black",

								my: 2,
								color: "black",
							}}
						>
							Visit project
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
export default Projects;
