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
			<Box sx={{ flexGrow: 1 }}>
				<Grid container>
					<Grid
						sx={{
							backgroundColor: "#e8e8e8",
							maxHeight: 365,
							m: 0,
							p: 0,
						}}
						item
						xs={12}
						md={6}
					>
						<Typography
							variant="h1"
							sx={{
								my: 4,
								textAlign: "center",
								fontWeight: 700,
								color: "#7c8ab5",
								fontSize: { xs: "3rem" },
							}}
						>
							Flight Fighters
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
								":hover": { color: "white", borderColor: "white" },
								borderColor: "black",
								mr: "1rem",
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
							sx={{ width: "100%" }}
							alt=""
							src={require("../Assets/map.png")}
						/>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
export default Projects;
