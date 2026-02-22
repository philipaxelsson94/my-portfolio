import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const hobbies = [
	{
		title: "GOLF",
		desc: "Precision and patience on the green.",
		icon: (
			<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="9"></circle>
				<circle cx="12" cy="12" r="2"></circle>
				<line x1="12" y1="3" x2="12" y2="21"></line>
				<line x1="3" y1="12" x2="21" y2="12"></line>
			</svg>
		),
		animation: { rotate: [0, -15, 20, 0], transition: { duration: 0.8, ease: "easeInOut" } }
	},
	{
		title: "TENNIS",
		desc: "Speed, agility, and a powerful backhand.",
		icon: (
			<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 22A10 10 0 1 0 12 2a10 10 0 0 0 0 20z"></path>
				<path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
				<line x1="12" y1="2" x2="12" y2="22"></line>
				<line x1="2" y1="12" x2="22" y2="12"></line>
			</svg>
		),
		animation: { y: [0, -20, 0, -10, 0], transition: { duration: 0.7, ease: "easeOut" } }
	},
	{
		title: "FISHING",
		desc: "Focus, tranquility, and the perfect catch.",
		icon: (
			<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
				<path d="M22 2 11 13"></path>
				<path d="M16 2.5a6 6 0 1 0-8.5 8.5L22 22l-9.5-2.5"></path>
			</svg>
		),
		animation: { x: [0, 15, -10, 5, 0], transition: { duration: 1, ease: "easeInOut" } }
	}
];

export default function Hobbies() {
	return (
		<Container sx={{ mt: { xs: 8, md: 15 }, mb: 15, overflow: "hidden" }}>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8 }}
			>
				<Typography
					variant="h6"
					sx={{
						mb: 2,
						textAlign: "left",
						color: "#a1a1aa",
						fontSize: "1rem",
						letterSpacing: "0.2em",
						textTransform: "uppercase"
					}}
				>
					Beyond the Code
				</Typography>
				<Typography
					variant="h2"
					sx={{
						mb: 6,
						textAlign: "left",
						fontWeight: 800,
						color: "white",
						fontSize: { xs: "3rem", md: "4.5rem" },
						letterSpacing: "-0.02em"
					}}
				>
					MY HOBBIES
				</Typography>
			</motion.div>

			<Grid container spacing={8} sx={{ mt: 4 }}>
				{hobbies.map((hobby, index) => (
					<Grid item xs={12} key={hobby.title} sx={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
						<motion.div
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: "1.5rem",
								cursor: "default"
							}}
						>
							<motion.div
								whileHover={hobby.animation}
								style={{
									display: "flex",
									alignItems: "center",
									gap: "1rem"
								}}
								className="hobby-interactive-box"
							>
								{/* Huge Outline Typography */}
								<Typography
									variant="h1"
									sx={{
										fontWeight: 900,
										fontSize: { xs: "4rem", sm: "6rem", md: "10rem", lg: "13rem" },
										lineHeight: 0.8,
										color: "transparent",
										WebkitTextStroke: { xs: "1px rgba(255, 255, 255, 0.15)", md: "2px rgba(255, 255, 255, 0.15)" },
										transition: "all 0.5s ease",
										"&:hover": {
											color: "#ffffff",
											WebkitTextStroke: "2px #ffffff",
											textShadow: "0 0 60px rgba(255, 255, 255, 0.6)"
										}
									}}
								>
									{hobby.title}
								</Typography>

								{/* Abstract Tech Icon appearing next to title on bigger screens */}
								<Box
									sx={{
										color: "rgba(255, 255, 255, 0.1)",
										transition: "color 0.4s ease",
										display: { xs: "none", sm: "block" },
										".hobby-interactive-box:hover &": {
											color: "#ffffff"
										}
									}}
								>
									{hobby.icon}
								</Box>
							</motion.div>
						</motion.div>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
