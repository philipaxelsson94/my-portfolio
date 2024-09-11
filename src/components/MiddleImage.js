import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function MiddleImage() {
	return (
		<Container align="center" sx={{ pt: "3rem", width: "100%" }}>
			<Box
				component="img"
				sx={{
					width: "100%",
				}}
				alt=""
				src={require("../Assets/illustration2.png")}
			/>
		</Container>
	);
}
