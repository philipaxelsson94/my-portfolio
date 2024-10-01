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
			<Container
				maxWidth="xl"
				align="flex-start"
				sx={{ pt: "3rem", width: "100%" }}
			>
				<Grid container spacing={2} columns={12} sx={{ mt: 4 }}>
					<Grid
						sx={{
							mt: { xs: 18, md: 2 },
						}}
						item
						xs={12}
						md={6}
					>
						<Typography
							variant="h1"
							sx={{
								fontWeight: 700,
								color: "#7c8ab5",
								fontSize: { xs: "3rem", md: "5rem" },
							}}
						>
							<span style={{ color: "#c7e1f3" }}>&lt;/&gt;</span>WELCOME.
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
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
