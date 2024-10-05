import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "80%",
	bgcolor: "white",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function ActionAreaCard({ title, hp, desc }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Card
				onClick={handleOpen}
				sx={{ maxWidth: 345, height: 120, backgroundColor: "#1c2233" }}
			>
				<CardActionArea>
					<CardContent>
						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<Typography
								sx={{
									whiteSpace: "nowrap",
									textOverflow: "ellipsis",
									overflow: "hidden",
									fontSize: { xs: "0.8rem", md: "1.2rem" },
								}}
								color="white"
								align="left"
								variant="h5"
							>
								{title}
							</Typography>
							<Chip
								label={hp}
								sx={{
									backgroundColor: "#2461c4",
									color: "white",
									height: "auto",
									width: "auto",
								}}
							/>{" "}
						</Box>
						<Typography color="#a6a6a6" align="left" variant="body2">
							{desc}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{title}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Modal>
		</>
	);
}
