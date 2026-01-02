import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
function MyWork() {
	return (
		<Container sx={{ mt: { xs: 0, md: 10 }, mb: 10 }}>
			<Typography
				variant="h1"
				sx={{
					my: 4,
					textAlign: "center",
					fontWeight: 700,
					color: "white",
					fontSize: { xs: "3rem", md: "3rem" },
				}}
			>
				WORK
			</Typography>
			<Grid container spacing={4}>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea className="work-card-action-area">
							<div className="work-card-media">
								<CardMedia
									className="work-card-media-image"
									component="img"
									height="200"
									src={require("../Assets/aip5.png")}
									alt="green iguana"
								/>
							</div>
							<CardContent>
								<Typography
									className="work-card-title"
									gutterBottom
									variant="h5"
									component="div"
								>
									Live Arena Technologies
								</Typography>
								<Typography
									variant="body2"
									sx={{ color: "#999999" }}
								></Typography>

								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="FRONTEND DEVELOPER"
										color="primary"
									/>
								</Stack>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											href="https://livearena.com/"
											target="_blank"
											variant="outlined"
											sx={{
												":hover": {
													backgroundColor: "#333333",
													borderColor: "#333333",
												},
												borderColor: "#262626",
												backgroundColor: "#262626",
												fontWeight: 700,
												my: 2,
												color: "white",
											}}
										>
											Visit website
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea className="work-card-action-area">
							<div className="work-card-media">
								<CardMedia
									className="work-card-media-image"
									component="img"
									height="200"
									src={require("../Assets/lxa2.png")}
									alt="green iguana"
								/>
							</div>

							<CardContent>
								<Typography
									className="work-card-title"
									gutterBottom
									variant="h5"
									component="div"
								>
									LXA The Label
								</Typography>
								<Typography variant="body2" sx={{ color: "#999999" }}>
									I manage and maintain the website's overall structure,
									ensuring optimal performance and user experience through
									frontend development. Additionally, I focus on driving growth
									and increasing conversions by leveraging analytics tools and
									implementing marketing automation
								</Typography>

								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="WEB DEVELOPER"
										color="primary"
									/>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="ECOMMERCE SITE MANAGER"
										color="success"
									/>
								</Stack>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											href="https://lxathelabel.com/"
											target="_blank"
											variant="outlined"
											sx={{
												":hover": {
													backgroundColor: "#333333",
													borderColor: "#333333",
												},
												borderColor: "#262626",
												backgroundColor: "#262626",
												fontWeight: 700,
												my: 2,
												color: "white",
											}}
										>
											Visit website
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea className="work-card-action-area">
							<div className="work-card-media">
								<CardMedia
									className="work-card-media-image"
									component="img"
									height="200"
									src={require("../Assets/sann2.png")}
									alt="green iguana"
								/>
							</div>

							<CardContent>
								<Typography
									className="work-card-title"
									gutterBottom
									variant="h5"
									component="div"
								>
									Sanne Alexandra
								</Typography>
								<Typography variant="body2" sx={{ color: "#999999" }}>
									I manage and maintain the website's overall structure,
									ensuring optimal performance and user experience through
									frontend development. Additionally, I focus on driving growth
									and increasing conversions by leveraging analytics tools and
									implementing marketing automation
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="WEB DEVELOPER"
										color="primary"
									/>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="ECOMMERCE SITE MANAGER"
										color="success"
									/>
								</Stack>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											href="https://sannealexandra.com/"
											target="_blank"
											variant="outlined"
											sx={{
												":hover": {
													backgroundColor: "#333333",
													borderColor: "#333333",
												},
												borderColor: "#262626",
												backgroundColor: "#262626",
												fontWeight: 700,
												my: 2,
												color: "white",
											}}
										>
											Visit website
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea className="work-card-action-area">
							<div className="work-card-media">
								<CardMedia
									className="work-card-media-image"
									component="img"
									height="200"
									src={require("../Assets/lecap2.png")}
								/>
							</div>

							<CardContent>
								<Typography
									className="work-card-title"
									gutterBottom
									variant="h5"
									component="div"
								>
									Le Capsole
								</Typography>
								<Typography variant="body2" sx={{ color: "#999999" }}>
									I manage and maintain the website's overall structure,
									ensuring optimal performance and user experience through
									frontend development. Additionally, I focus on driving growth
									and increasing conversions by leveraging analytics tools and
									implementing marketing automation
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="WEB DEVELOPER"
										color="primary"
									/>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="ECOMMERCE SITE MANAGER"
										color="success"
									/>
								</Stack>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											href="https://lecapsole.com/"
											target="_blank"
											variant="outlined"
											sx={{
												":hover": {
													backgroundColor: "#333333",
													borderColor: "#333333",
												},
												borderColor: "#262626",
												backgroundColor: "#262626",
												fontWeight: 700,
												my: 2,
												color: "white",
											}}
										>
											Visit website
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea className="work-card-action-area">
							<div className="work-card-media">
								<CardMedia
									className="work-card-media-image"
									component="img"
									height="200"
									src={require("../Assets/hubso.png")}
								/>
							</div>

							<CardContent>
								<Typography
									className="work-card-title"
									gutterBottom
									variant="h5"
									component="div"
								>
									HUBSO
								</Typography>
								<Typography variant="body2" sx={{ color: "#999999" }}>
									At Hubso I'm responsible for frontend and backend
									architectures, while also managing and optimizing the IT
									infrastructure to ensure seamless operations. Mostly I work in
									React.
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="IT DEVELOPER"
										color="primary"
									/>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="FRONTEND"
										color="success"
									/>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="SITE MANAGER"
										color="success"
									/>
								</Stack>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											href="https://hubso.com/"
											target="_blank"
											variant="outlined"
											sx={{
												":hover": {
													backgroundColor: "#333333",
													borderColor: "#333333",
												},
												borderColor: "#262626",
												backgroundColor: "#262626",
												fontWeight: 700,
												my: 2,
												color: "white",
											}}
										>
											Visit website
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea className="work-card-action-area">
							<div className="work-card-media">
								<CardMedia
									className="work-card-media-image"
									component="img"
									height="200"
									src={require("../Assets/festprissen.png")}
								/>
							</div>

							<CardContent>
								<Typography
									className="work-card-title"
									gutterBottom
									variant="h5"
									component="div"
								>
									Festprissen
								</Typography>
								<Typography variant="body2" sx={{ color: "#999999" }}>
									This is my side hustle, an affiliate eCommerce business I run
									in my spare time. I promote products I trust and earn
									commissions on sales made through my referral links.
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="AFFILIATE"
										color="primary"
									/>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="SITE MANAGER"
										color="success"
									/>
								</Stack>

								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											href="https://festprissen.se/"
											target="_blank"
											variant="outlined"
											sx={{
												":hover": {
													backgroundColor: "#333333",
													borderColor: "#333333",
												},
												borderColor: "#262626",
												backgroundColor: "#262626",
												fontWeight: 700,
												my: 2,
												color: "white",
											}}
										>
											Visit website
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea className="work-card-action-area">
							<div className="work-card-media">
								<CardMedia
									className="work-card-media-image"
									component="img"
									height="200"
									src={require("../Assets/kejbertconcept.png")}
								/>
							</div>

							<CardContent>
								<Typography
									className="work-card-title"
									gutterBottom
									variant="h5"
									component="div"
								>
									Kejbertconcept
								</Typography>
								<Typography variant="body2" sx={{ color: "#999999" }}>
									Sometimes I do som freelancing and at Kejbertconcept I help
									out with managing the Shopify store and updating the frontend
									when needed and also other IT specific tasks.
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="FREELANCING"
										color="primary"
									/>
									<Chip
										className="work-category-chip"
										sx={{
											backgroundColor: "#8354F8",
											fontWeight: 700,
											fontSize: "0.7rem",
										}}
										label="SITE MANAGER"
										color="success"
									/>
								</Stack>
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											href="https://kejbertconcept.se/"
											target="_blank"
											variant="outlined"
											sx={{
												":hover": {
													backgroundColor: "#333333",
													borderColor: "#333333",
												},
												borderColor: "#262626",
												backgroundColor: "#262626",
												fontWeight: 700,
												my: 2,
												color: "white",
											}}
										>
											Visit website
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default MyWork;
