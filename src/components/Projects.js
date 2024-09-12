import * as React from "react";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Projects() {
	const itemData = [
		{
			img: require("../Assets/barchart.png"),
			title: "Bed",
		},
		{
			img: require("../Assets/map.png"),
			title: "Books",
		},
		{
			img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
			title: "Sink",
		},
		{
			img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
			title: "Kitchen",
		},
		{
			img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
			title: "Blinds",
		},
		{
			img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
			title: "Chairs",
		},
		{
			img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
			title: "Laptop",
		},
		{
			img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
			title: "Doors",
		},
		{
			img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
			title: "Coffee",
		},
		{
			img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
			title: "Storage",
		},
		{
			img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
			title: "Candle",
		},
		{
			img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
			title: "Coffee table",
		},
	];
	return (
		<Container align="center" sx={{ my: 8 }}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Typography
							variant="h1"
							sx={{
								my: 4,
								textAlign: "center",
								fontWeight: 700,
								color: "#7c8ab5",
								fontSize: { xs: "3rem" },
							}}
						>
							Flight Fighters
						</Typography>
						<Button
							href="https://flight-kth.firebaseapp.com/about"
							target="_blank"
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
							Visit project
						</Button>
					</Grid>
					<Grid item xs={12} md={8}>
						<Box sx={{ height: 450, overflowY: "scroll" }}>
							<ImageList variant="masonry" cols={2} gap={8}>
								{itemData.map((item) => (
									<ImageListItem key={item.img}>
										<img
											srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
											src={`${item.img}?w=248&fit=crop&auto=format`}
											alt={item.title}
											loading="lazy"
										/>
									</ImageListItem>
								))}
							</ImageList>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
export default Projects;
