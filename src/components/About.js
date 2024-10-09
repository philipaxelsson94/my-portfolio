import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function About() {
	return (
		<Box className="about-container" sx={{ mb: 8, pt: 4, pb: 4 }}>
			<Typography
				variant="h1"
				sx={{
					my: 4,
					textAlign: "center",
					fontWeight: 700,
					color: "#192d41",
					fontSize: { xs: "3rem", md: "3rem" },
				}}
			>
				MY SKILLS
			</Typography>
			<Container sx={{ mb: { xs: 2, mb: 10 } }}>
				<Grid container spacing={4}>
					<Grid item md={4} xs={12}>
						<Card style={{ height: "100%" }}>
							<Stack
								sx={{
									mt: 4,
									mb: 4,
									justifyContent: "center",
									alignItems: "center",
								}}
								direction="row"
								spacing={2}
							>
								<Avatar
									alt="UX/UI"
									src={require("../Assets/frontend2.png")}
									sx={{ width: 80, height: 80 }}
								/>
							</Stack>
							<CardContent>
								<Typography
									sx={{ textAlign: "center", mb: 2, fontWeight: 700 }}
									gutterBottom
									variant="h5"
									component="div"
								>
									Frontend Developer
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: "text.secondary", textAlign: "center" }}
								>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>

								<Box sx={{ my: 4, mx: "auto", p: 2 }}>
									<Typography
										sx={{ textAlign: "center", color: "#272160" }}
										gutterBottom
										variant="h6"
										component="div"
									>
										Technologies I use
									</Typography>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											my: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>React</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/react2.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>HTML</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/html.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>CSS</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/css.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Github</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/github.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>VS code</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/vscode.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Sanity</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/sanity.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Netlify</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/netlify.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
								</Box>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} xs={12}>
						<Card style={{ height: "100%" }}>
							<Stack
								sx={{
									mt: 4,
									mb: 4,
									justifyContent: "center",
									alignItems: "center",
								}}
								direction="row"
								spacing={2}
							>
								<Avatar
									alt="UX/UI"
									src={require("../Assets/ecom2.png")}
									sx={{ width: 80, height: 80 }}
								/>
							</Stack>
							<CardContent>
								<Typography
									sx={{ textAlign: "center", fontWeight: 700 }}
									gutterBottom
									variant="h5"
									component="div"
								>
									Ecommerce
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: "text.secondary", textAlign: "center" }}
								>
									Born and raised in Ecommerce. This is my true passion and I
									have worked with various platforms and currently I am working
									with Shopify.
								</Typography>
								<Box sx={{ my: 4, mx: "auto", p: 2 }}>
									<Typography
										sx={{ textAlign: "center", color: "#272160" }}
										gutterBottom
										variant="h6"
										component="div"
									>
										Platforms & Software I use
									</Typography>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											my: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Shopify</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/shopify.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>WooCommerce</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/woo.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Wordpress</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/wordpress.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Google Analytics</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/analytics.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
								</Box>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} xs={12}>
						<Card style={{ height: "100%" }}>
							<Stack
								sx={{
									mt: 4,
									mb: 4,
									justifyContent: "center",
									alignItems: "center",
								}}
								direction="row"
								spacing={2}
							>
								<Avatar
									alt="UX/UI"
									src={require("../Assets/uxui.png")}
									sx={{ width: 80, height: 80 }}
								/>
							</Stack>
							<CardContent>
								<Typography
									sx={{ textAlign: "center", fontWeight: 700 }}
									gutterBottom
									variant="h5"
									component="div"
								>
									Designer
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: "text.secondary", textAlign: "center" }}
								>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
								<Box sx={{ my: 4, mx: "auto", p: 2 }}>
									<Typography
										sx={{ textAlign: "center", color: "#272160" }}
										gutterBottom
										variant="h6"
										component="div"
									>
										Programs I use
									</Typography>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											my: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Photoshop</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/photoshop1.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Affinity Designer</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/affinity.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{
											mt: 3,
											pt: 1,
											pb: 1,
											pr: 4,
											pl: 4,
											justifyContent: "space-between",
											alignItems: "center",
											bgcolor: "#f9f9f9",
											boxShadow: 1,
											borderRadius: 2,
										}}
									>
										<Typography noWrap>Figma</Typography>
										<Avatar
											alt="react"
											src={require("../Assets/figma.png")}
											sx={{ width: 50, height: 50 }}
										/>
									</Stack>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
