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
		<Container align="center" sx={{ borderRadius: 2, my: 8 }}>
			<Typography
				variant="h1"
				sx={{
					my: 4,
					textAlign: "center",
					fontWeight: 700,
					color: "#192d41",
					fontSize: { xs: "3rem", md: "3rem" },
				}}
			>
				PROJECTS
			</Typography>
			<Typography
				variant="h6"
				sx={{
					my: 4,

					textAlign: "center",
					color: "#000000",
				}}
			>
				Here you will find some of the personal projects and also projects from
				my education at KTH.
			</Typography>

			<Box sx={{ flexGrow: 1, mt: 8 }}>
				<Grid container>
					<Grid sx={{}} item xs={12} md={6}>
						<Box
							component="img"
							sx={{ height: "100%", width: "100%" }}
							alt=""
							src={require("../Assets/map2.png")}
						/>
					</Grid>
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
								mt: { xs: 4, md: 0 },
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
							sx={{ px: 2, mb: 4, color: "black", fontSize: { xs: "1rem" } }}
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
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="REACT"
								color="primary"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="D3.JS"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="SASS"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="FIREBASE"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="PYTHON"
								color="success"
							/>
						</Stack>

						<Button
							href="https://flight-kth.firebaseapp.com/about"
							target="_blank"
							variant="outlined"
							sx={{
								":hover": {
									color: "#192d41",
									borderColor: "#192d41",
									backgroundColor: "white",
								},
								borderColor: "#192d41",
								backgroundColor: "#192d41",
								fontWeight: 700,
								my: 2,
								color: "white",
							}}
						>
							Visit project
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					sx={{
						mt: 12,
					}}
				>
					<Grid
						direction="column"
						alignItems="center"
						justify="center"
						sx={{
							m: "auto",
						}}
						item
						xs={12}
						md={6}
					>
						<Box
							component="img"
							sx={{ height: "100%", width: "100%" }}
							alt=""
							src={require("../Assets/carboncal4.png")}
						/>
					</Grid>
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
								mt: { xs: 4, md: 0 },
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
							sx={{ px: 2, mb: 4, color: "black", fontSize: { xs: "1rem" } }}
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
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="REACT"
								color="primary"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="FIREBASE"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="API"
								color="success"
							/>
						</Stack>

						<Button
							href="https://carbon-calculator-d4d9b.firebaseapp.com/"
							target="_blank"
							variant="outlined"
							sx={{
								":hover": {
									color: "#192d41",
									borderColor: "#192d41",
									backgroundColor: "white",
								},
								borderColor: "#192d41",
								backgroundColor: "#192d41",
								fontWeight: 700,
								my: 2,
								color: "white",
							}}
						>
							Visit project
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					sx={{
						mt: 12,
					}}
				>
					<Grid
						direction="column"
						alignItems="center"
						justify="center"
						sx={{
							m: "auto",
						}}
						item
						xs={12}
						md={6}
					>
						<Box
							component="img"
							sx={{ height: "100%", width: "100%" }}
							alt=""
							src={require("../Assets/axelssondev.png")}
						/>
					</Grid>
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
								mt: { xs: 4, md: 0 },
								mb: 2,
								textAlign: "center",
								fontWeight: 700,
								color: "black",
								fontSize: { xs: "2rem" },
							}}
						>
							Axelssondev
						</Typography>
						<Typography
							variant="body2"
							sx={{ px: 2, mb: 4, color: "black", fontSize: { xs: "1rem" } }}
						>
							This is the you are looking at, built with React and Material UI,
							integrated with Sanity Studio for content management and data
							handling. It is deployed on Netlify.
						</Typography>
						<Stack
							sx={{ my: 2, justifyContent: "center" }}
							direction="row"
							spacing={1}
						>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="REACT"
								color="primary"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="MATERIAL UI"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="SANITY"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6d628c", fontWeight: 700 }}
								label="NETLIFY"
								color="success"
							/>
						</Stack>

						<Button
							href="https://carbon-calculator-d4d9b.firebaseapp.com/"
							target="_blank"
							variant="outlined"
							sx={{
								":hover": {
									color: "#192d41",
									borderColor: "#192d41",
									backgroundColor: "white",
								},
								borderColor: "#192d41",
								backgroundColor: "#192d41",
								fontWeight: 700,
								my: 2,
								color: "white",
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
