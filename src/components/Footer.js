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
						color: "#23236b",
						fontSize: { xs: "3rem" },
					}}
				>
					Get in touch!
				</Typography>
				<Typography
					variant="h6"
					sx={{
						fontWeight: 500,
						color: "black",
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
							backgroundColor: "#23236b",
							color: "#23236b",
							borderColor: "#23236b",
						},
						borderColor: "#23236b",
						mr: "1rem",
						my: 2,
						color: "#23236b",
					}}
				>
					Send me an email
				</Button>
			</Container>
		</Box>
	);
}
