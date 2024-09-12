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

function MyWork() {
	return (
		<Container sx={{ mt: 10, mb: 10 }}>
			<Grid container spacing={4}>
				<Grid item md={4} xs={12}>
					<Card elevation={3}>
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								src={require("../Assets/lxa.png")}
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
								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											onClick={() =>
												(window.location = "https://lxathelabel.com/")
											}
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
								height="140"
								src={require("../Assets/sanne.png")}
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

								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											onClick={() =>
												(window.location = "https://lxathelabel.com/")
											}
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
								height="140"
								src={require("../Assets/lecap.png")}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Le Capsole
								</Typography>
								<Typography variant="body2" sx={{ color: "text.secondary" }}>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>

								<Grid container spacing={2}>
									<Grid item xs={6}>
										<Button
											onClick={() =>
												(window.location = "https://lecapsole.com/")
											}
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
