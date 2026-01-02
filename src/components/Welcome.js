import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Welcome() {
	return (
		<Box
			className="welcomeContainer"
			sx={{ mb: { xs: 2, md: 8 }, pt: 4, pb: 4 }}
		>
			<Container align="flex-start" sx={{ pt: "3rem", width: "100%" }}>
				<Grid
					container
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
					spacing={2}
					columns={12}
					sx={{ mt: 4 }}
				>
					<Grid
						sx={{
							mt: { md: 2 },
						}}
						item
						xs={12}
						md={6}
					>
						<Typography
							className="welcomeText"
							variant="h1"
							sx={{
								fontWeight: 700,
								fontSize: { xs: "3rem", md: "5rem" },
								textAlign: { xs: "center", md: "left" },
							}}
						>
							HI, I'M PHILIP
						</Typography>
						<Typography
							variant="h3"
							sx={{
								fontWeight: 700,
								color: "white",
								fontSize: { xs: "1rem", md: "1.5rem" },
								textAlign: { xs: "center", md: "left" },
							}}
						>
							Civil Engineer in Media Technology at KTH
						</Typography>
						<Typography
							variant="h6"
							sx={{
								color: "#999999",
								fontSize: { xs: "1rem", md: "1.2rem" },
								textAlign: { xs: "center", md: "left" },
								mb: { xs: 4, md: 4 },
								mt: { xs: 2, md: 2 },
							}}
						>
							I am a result driven frontend developer, focused on building and
							managing websites and web applications that contribute to the
							overall success of the product.
							<br />
						</Typography>
						<Stack
							sx={{
								mt: { xs: 2, md: 2 },
								my: 2,
								justifyContent: { xs: "center", md: "flex-start" },
							}}
							direction="row"
							spacing={1}
						>
							<Chip
								sx={{ backgroundColor: "#8354f8", fontWeight: 700 }}
								label="FRONTEND"
								color="primary"
							/>
							<Chip
								sx={{ backgroundColor: "#8354f8", fontWeight: 700 }}
								label="E-COMMERCE"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#8354f8", fontWeight: 700 }}
								label="IT DEVELOPER"
								color="success"
							/>
						</Stack>
					</Grid>
					<Grid
						display="flex"
						justifyContent="center"
						sx={{
							mt: { md: 2 },
						}}
						item
						xs={12}
						md={6}
					>
						<Box
							component="img"
							sx={{
								width: "75%",
							}}
							alt=""
							src={require("../Assets/philip8.png")}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
