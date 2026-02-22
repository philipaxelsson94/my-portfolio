import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import philip from "../Assets/philip8.png";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<Box className="footerContainer" sx={{ mt: 10, pt: 8, pb: 8, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
			<Container align="center" maxWidth="xl">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<Avatar
						sx={{ width: 150, height: 150, mb: 4, filter: "grayscale(20%) contrast(120%)" }}
						alt="Philip Axelsson"
						src={philip}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.1 }}
				>
					<Typography
						className="footerTitle"
						variant="h2"
						sx={{
							fontWeight: 800,
							fontSize: { xs: "3rem", md: "4rem" },
							mb: 2,
							letterSpacing: "-0.02em"
						}}
					>
						GET IN TOUCH
					</Typography>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 400,
							color: "#a0aab2",
							mb: 4,
							fontSize: { xs: "1rem", md: "1.2rem" },
							maxWidth: "600px",
							mx: "auto"
						}}
					>
						Get to know me better by starting a conversation. <br />
						I'm always interested in meeting new people and staying connected.
					</Typography>
					<Button
						component={motion.a}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href="mailto:philipaxelaxelsson@gmail.com"
						variant="outlined"
						sx={{
							":hover": { backgroundColor: "rgba(255,255,255,0.1)", borderColor: "#ededed" },
							borderColor: "rgba(255,255,255,0.2)",
							color: "white",
							fontWeight: 700,
							px: 4,
							py: 1.5,
						}}
					>
						Send me an email
					</Button>
				</motion.div>
			</Container>
		</Box>
	);
}
