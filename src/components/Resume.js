import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Resume() {
	return (
		<Container sx={{ pt: "3rem", width: "100%" }}>
			<Grid container spacing={2} columns={12} sx={{ mt: 4 }}>
				<Grid
					sx={{
						mt: { xs: 16, md: 2 },
					}}
					item
					xs={12}
					md={6}
				>
					<Typography
						variant="h3"
						sx={{
							fontWeight: 700,
							color: "#7c8ab5",
							fontSize: { xs: "3rem" },
						}}
					>
						Education
					</Typography>

					<Typography
						variant="h6"
						sx={{
							fontWeight: 700,
							color: "darkblue",
							fontSize: "1rem",
						}}
					>
						Student at Royal Institute of Technology, KTH
						<br />
					</Typography>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 500,
							color: "black",
							fontSize: "1rem",
						}}
					>
						I'm a civil engineer in media technology with a master in
						interaction design.
						<br />
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}
