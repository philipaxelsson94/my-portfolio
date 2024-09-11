import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import philip from "../Assets/philip.jpg";

function Contact() {
	return (
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
					color: "#5a4dcf",
				}}
			>
				Get in touch!
			</Typography>
			<Typography
				variant="p"
				sx={{
					fontWeight: 500,
					color: "black",
					fontSize: "1.2rem",
				}}
			>
				Get to know me better by starting a conversation.
				<br />
				I'm always interested in meeting new people and staying connected.
				<br />
				Feel free to send me an email if you want to take a java together and
				plan the future.
			</Typography>
			<Button
				onClick={() => (window.location = "philipaxelaxelsson@gmail.com")}
				variant="outlined"
				sx={{
					":hover": { color: "white", borderColor: "white" },
					borderColor: "black",
					mr: "1rem",
					my: 2,
					color: "black",
					display: "block",
				}}
			>
				Send me an email
			</Button>
		</Container>
	);
}

export default Contact;
