import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function About() {
	return (
		<Container sx={{ mt: 10, mb: 10 }}>
			<Grid container spacing={0}>
				<Grid item md={4} xs={12}>
					<Card>
						<CardActionArea>
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
									sx={{ textAlign: "center" }}
									gutterBottom
									variant="h5"
									component="div"
								>
									Frontend Developer
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>

								<div sx={{ my: 1, mx: "auto", p: 2 }}>
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
											src={require("../Assets/react.png")}
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
								</div>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

				<Grid item md={4} xs={12}>
					<Card>
						<CardActionArea>
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
									sx={{ textAlign: "center" }}
									gutterBottom
									variant="h5"
									component="div"
								>
									Ecommerce
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
								<div sx={{ my: 1, mx: "auto", p: 2 }}>
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
											src={require("../Assets/react.png")}
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
								</div>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

				<Grid item md={4} xs={12}>
					<Card>
						<CardActionArea>
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
									sx={{ textAlign: "center" }}
									gutterBottom
									variant="h5"
									component="div"
								>
									Designer
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
								<div sx={{ my: 1, mx: "auto", p: 2 }}>
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
											src={require("../Assets/photoshop.png")}
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
								</div>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
