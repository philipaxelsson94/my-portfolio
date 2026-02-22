import * as React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
function Projects() {
	const projectsData = [
		{
			title: "Flight Fighters",
			description: "This project aimed to help employees and other stakeholders at KTH to make better decisions regarding their flying habits by using a visualization tool.",
			image: "map2.png",
			chips: [
				{ label: "REACT" },
				{ label: "D3.JS" },
				{ label: "SASS" },
				{ label: "FIREBASE" },
				{ label: "PYTHON" },
			],
			link: "https://flight-kth.firebaseapp.com/about",
			btnText: "Visit project"
		},
		{
			title: "Carbon Calculator",
			description: "This app helps users plan their travel routes and calculate the carbon footprint of their trips based on different vehicle types. By integrating with the Google Maps API, it provides accurate distance data and allows users to compare the environmental impact of various transportation options.",
			image: "carboncal4.png",
			chips: [
				{ label: "REACT" },
				{ label: "FIREBASE" },
				{ label: "API" },
			],
			link: "https://carbon-calculator-d4d9b.firebaseapp.com/",
			btnText: "Visit project"
		},
		{
			title: "Axelssondev",
			description: "This project is the website you are looking at, built with React and Material UI, integrated with Sanity Studio for content management and data handling. It is deployed on Netlify.",
			image: "axelssondev2.png",
			chips: [
				{ label: "REACT" },
				{ label: "MATERIAL UI" },
				{ label: "SANITY" },
				{ label: "NETLIFY" },
			],
			link: "",
			btnText: "You are here"
		}
	];

	return (
		<Container align="center" sx={{ borderRadius: 2, my: 8 }}>
			<Typography
				variant="h1"
				sx={{
					my: 8,
					textAlign: "center",
					fontWeight: 800,
					color: "white",
					fontSize: { xs: "3rem", md: "4rem" },
					letterSpacing: -1
				}}
			>
				SELECTED PROJECTS
			</Typography>
			<Typography
				variant="h6"
				sx={{
					mb: 8,
					textAlign: "center",
					color: "#999999",
					maxWidth: "600px",
					mx: "auto"
				}}
			>
				Here you will find some of the personal projects and also projects from my education at KTH.
			</Typography>

			<Grid container spacing={4} sx={{ mt: 4, mb: 12 }}>
				{projectsData.map((project, index) => {
					return (
						<Grid item xs={12} md={6} key={project.title}>
							<Box 
								sx={{ 
									display: "flex",
									flexDirection: "column",
									backgroundColor: "#161616",
									borderRadius: 6,
									overflow: "hidden",
									boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
									border: "1px solid rgba(255,255,255,0.05)",
									height: "100%",
									transition: "transform 0.3s ease, box-shadow 0.3s ease",
									":hover": {
										transform: "translateY(-4px)",
										boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
										borderColor: "rgba(255,255,255,0.1)",
									}
								}}
							>
								{/* Image Container */}
								<Box
									sx={{
										width: "100%",
										backgroundColor: "#111111",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										p: { xs: 2, md: 4 },
										height: { xs: "250px", md: "350px" }
									}}
								>
									<Box
										component="img"
										alt={project.title}
										src={require(`../Assets/${project.image}`)}
										sx={{ 
											width: "100%", 
											height: "100%", 
											objectFit: "contain", 
											display: "block",
											borderRadius: 2,
											boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
										}}
									/>
								</Box>

								{/* Content Container */}
								<Box
									sx={{
										p: { xs: 4, md: 5 },
										display: "flex",
										flexDirection: "column",
										flexGrow: 1
									}}
								>
									<Typography
										variant="h3"
										sx={{
											mb: 2,
											fontWeight: 800,
											color: "white",
											fontSize: { xs: "1.75rem", md: "2.25rem" },
											letterSpacing: -0.5
										}}
									>
										{project.title}
									</Typography>
									
									<Typography
										variant="body1"
										sx={{ 
											mb: 4, 
											color: "#aaaaaa", 
											fontSize: { xs: "1rem", md: "1.05rem" },
											lineHeight: 1.7 
										}}
									>
										{project.description}
									</Typography>

									{/* Push bottom elements down if description is short */}
									<Box sx={{ mt: "auto", display: "flex", flexDirection: "column", gap: 3 }}>
										<Stack
											sx={{ flexWrap: "wrap", gap: 1 }}
											direction="row"
										>
											{project.chips.map((chip, chipIndex) => (
												<Chip
													key={chipIndex}
													label={chip.label}
													sx={{
														backgroundColor: "#8354F8", // Exact same primary purple as MyWork chips
														color: "white",
														fontWeight: 700,
														fontSize: "0.75rem",
														borderRadius: 2,
														px: 1,
														border: "none"
													}}
												/>
											))}
										</Stack>

										{project.link ? (
											<Button
												href={project.link}
												target="_blank"
												variant="contained"
												sx={{
													backgroundColor: "white",
													color: "black",
													fontWeight: 800,
													px: 4,
													py: 1.5,
													borderRadius: "50px",
													textTransform: "none",
													transition: "all 0.2s ease",
													":hover": {
														backgroundColor: "#e0e0e0",
														transform: "scale(1.02)"
													},
												}}
											>
												{project.btnText}
											</Button>
										) : (
											<Button
												disabled
												variant="outlined"
												sx={{
													borderColor: "rgba(255,255,255,0.2)",
													color: "#666666",
													fontWeight: 800,
													px: 4,
													py: 1.5,
													borderRadius: "50px",
													textTransform: "none",
												}}
											>
												{project.btnText}
											</Button>
										)}
									</Box>
								</Box>
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}
export default Projects;
