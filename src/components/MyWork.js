import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
function MyWork() {
	return (
		<Container sx={{ mt: 10, mb: 10 }}>
			<Typography
				variant="h1"
				sx={{
					my: 4,
					textAlign: "center",
					fontWeight: 700,
					color: "#02244d",
					fontSize: { xs: "2rem", md: "3rem" },
				}}
			>
				My current work
			</Typography>
			<Grid container spacing={4}>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								src={require("../Assets/lxa2.png")}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									LXA The Label
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>

								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
										label="WEB DEVELOPER"
										color="primary"
									/>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
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
													color: "white",
													borderColor: "white",
													backgroundColor: "black",
												},
												borderColor: "black",
												mr: "1rem",
												my: 2,
												color: "black",
												display: "block",
												textAlign: "center",
											}}
										>
											Visit website
										</Button>
									</Grid>
									<Grid display="flex" justifyContent="flex-end" item xs={6}>
										<Box
											component="img"
											sx={{ pt: 2, pb: 2, width: "100px" }}
											alt=""
											src={require("../Assets/shopifylogo.png")}
										/>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="200"
								src={require("../Assets/sann2.png")}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Sanne Alexandra
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
										label="WEB DEVELOPER"
										color="primary"
									/>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
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
													color: "white",
													borderColor: "white",
													backgroundColor: "black",
												},
												borderColor: "black",
												mr: "1rem",
												my: 2,
												color: "black",
												display: "block",
												textAlign: "center",
											}}
										>
											Visit website
										</Button>
									</Grid>
									<Grid display="flex" justifyContent="flex-end" item xs={6}>
										<Box
											component="img"
											sx={{ pt: 2, pb: 2, width: "100px" }}
											alt=""
											src={require("../Assets/shopifylogo.png")}
										/>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea>
							<CardMedia
								sx={{ aspectRatio: 1 / 1 }}
								component="img"
								height="200"
								src={require("../Assets/lecap2.png")}
							/>

							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Le Capsole
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
										label="WEB DEVELOPER"
										color="primary"
									/>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
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
													color: "white",
													borderColor: "white",
													backgroundColor: "black",
												},
												borderColor: "black",
												mr: "1rem",
												my: 2,
												color: "black",
												display: "block",
												textAlign: "center",
											}}
										>
											Visit website
										</Button>
									</Grid>
									<Grid display="flex" justifyContent="flex-end" item xs={6}>
										<Box
											component="img"
											sx={{ pt: 2, pb: 2, width: "100px" }}
											alt=""
											src={require("../Assets/shopifylogo.png")}
										/>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea>
							<CardMedia
								sx={{ aspectRatio: 1 / 1 }}
								component="img"
								height="200"
								src={require("../Assets/hubso.png")}
							/>

							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									HUBSO
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
										label="IT DEVELOPER"
										color="primary"
									/>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
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
													color: "white",
													borderColor: "white",
													backgroundColor: "black",
												},
												borderColor: "black",
												mr: "1rem",
												my: 2,
												color: "black",
												display: "block",
												textAlign: "center",
											}}
										>
											Visit website
										</Button>
									</Grid>
									<Grid display="flex" justifyContent="flex-end" item xs={6}>
										<Box
											component="img"
											sx={{ pt: 2, pb: 2, width: "100px" }}
											alt=""
											src={require("../Assets/shopifylogo.png")}
										/>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea>
							<CardMedia
								sx={{ aspectRatio: 1 / 1 }}
								component="img"
								height="200"
								src={require("../Assets/festprissen.png")}
							/>

							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Festprissen
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									This is my side hustle, an affiliate eCommerce business I run
									in my spare time. I promote products I trust and earn
									commissions on sales made through my referral links.
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
										label="AFFILIATE"
										color="primary"
									/>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
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
													color: "white",
													borderColor: "white",
													backgroundColor: "black",
												},
												borderColor: "black",
												mr: "1rem",
												my: 2,
												color: "black",
												display: "block",
												textAlign: "center",
											}}
										>
											Visit website
										</Button>
									</Grid>
									<Grid display="flex" justifyContent="flex-end" item xs={6}>
										<Box
											component="img"
											sx={{ pt: 2, pb: 2, width: "100px" }}
											alt=""
											src={require("../Assets/shopifylogo.png")}
										/>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea>
							<CardMedia
								sx={{ aspectRatio: 1 / 1 }}
								component="img"
								height="200"
								src={require("../Assets/kejbertconcept.png")}
							/>

							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Kejbertconcept
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
								<Stack sx={{ my: 2 }} direction="row" spacing={1}>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
										label="FREELANCING"
										color="primary"
									/>
									<Chip
										sx={{ backgroundColor: "#6e79a9" }}
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
													color: "white",
													borderColor: "white",
													backgroundColor: "black",
												},
												borderColor: "black",
												mr: "1rem",
												my: 2,
												color: "black",
												display: "block",
												textAlign: "center",
											}}
										>
											Visit website
										</Button>
									</Grid>
									<Grid display="flex" justifyContent="flex-end" item xs={6}>
										<Box
											component="img"
											sx={{ pt: 2, pb: 2, width: "100px" }}
											alt=""
											src={require("../Assets/shopifylogo.png")}
										/>
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
