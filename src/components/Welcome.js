import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Welcome() {
	return (
		<Box className="welcomeContainer" sx={{ mb: 8, pt: 4, pb: 4 }}>
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
							variant="h1"
							sx={{
								fontWeight: 700,
								color: "#12114b",
								fontSize: { xs: "3rem", md: "5rem" },
							}}
						>
							Hello, I'm Philip
						</Typography>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								color: "black",
							}}
						>
							I'm a civil engineer in media technology with a master in
							interaction design.
							<br />
						</Typography>
						<Stack sx={{ my: 2 }} direction="row" spacing={1}>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="FRONTEND"
								color="primary"
							/>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="E-COMMERCE"
								color="success"
							/>
							<Chip
								sx={{ backgroundColor: "#6e79a9" }}
								label="IT DEVELOPER"
								color="success"
							/>
						</Stack>
					</Grid>
					<Grid
						display="flex"
						justifyContent="flex-end"
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
							src={require("../Assets/philip4.png")}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
