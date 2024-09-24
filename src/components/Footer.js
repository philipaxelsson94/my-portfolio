import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import philip from "../Assets/philip.jpg";
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
						color: "#7c8ab5",
						fontSize: { xs: "3rem" },
					}}
				>
					Get in touch!
				</Typography>
				<Typography
					variant="body2"
					sx={{
						fontWeight: 500,
						color: "white",
						fontSize: { xs: "0.8rem", md: "1.2rem" },
					}}
				>
					Get to know me better by starting a conversation.
					<br />
					I'm always interested in meeting new people and staying connected.
				</Typography>
				<Button
					href="mailto:philipaxelaxelsson@gmail.com"
					target="_blank"
					variant="outlined"
					sx={{
						":hover": {
							backgroundColor: "black",
							color: "white",
							borderColor: "black",
						},
						borderColor: "white",
						mr: "1rem",
						my: 2,
						color: "white",
						display: "block",
					}}
				>
					Send me an email
				</Button>
			</Container>
		</Box>
	);
}
