import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import philip from "../Assets/philip6.png";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

export default function Welcome() {
	return (
		<Box className="footerContainer" sx={{ mt: 8, pt: 4, pb: 4 }}>
			<Container align="center" maxWidth="xl">
				<Avatar
					sx={{ width: 150, height: 150 }}
					alt="Philip Axelsson"
					src={philip}
				/>
				<Typography
					variant="h2"
					sx={{
						fontWeight: 700,
						color: "#192d41",
						fontSize: { xs: "3rem" },
						mb: 2,
						mt: 2,
					}}
				>
					GET IN TOUCH
				</Typography>
				<Typography
					variant="h6"
					sx={{
						fontWeight: 500,
						color: "black",
						mb: 2,
						fontSize: { xs: "1rem", md: "1.2rem" },
					}}
				>
					Get to know me better by starting a conversation. <br />
					I'm always interested in meeting new people and staying connected.
				</Typography>
				<Button
					href="mailto:philipaxelaxelsson@gmail.com"
					variant="outlined"
					sx={{
						":hover": {
							backgroundColor: "white",
							borderColor: "#192d41",
							color: "#192d41",
						},
						borderColor: "#192d41",
						backgroundColor: "#192d41",
						mr: "1rem",
						my: 2,
						color: "white",
						fontWeight: 700,
					}}
				>
					Send me an email
				</Button>
			</Container>
		</Box>
	);
}
