import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

export default function Welcome() {
	return (
		<Box
			className="welcomeContainer"
			sx={{ 
				mb: { xs: 8, md: 16 }, 
				pt: { xs: 8, md: 12 }, 
				pb: 8,
				position: "relative",
				overflow: "hidden" 
			}}
		>
			{/* Tech-inspired Background Glows */}
			<Box
				sx={{
					position: "absolute",
					top: "-10%",
					left: "-10%",
					width: "50%",
					height: "50%",
					background: "radial-gradient(circle, rgba(131,84,248,0.15) 0%, rgba(0,0,0,0) 70%)",
					filter: "blur(60px)",
					zIndex: 0,
					pointerEvents: "none"
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					bottom: "-10%",
					right: "-10%",
					width: "60%",
					height: "60%",
					background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(0,0,0,0) 70%)", // Pinkish tech glow
					filter: "blur(80px)",
					zIndex: 0,
					pointerEvents: "none"
				}}
			/>

			<Container sx={{ position: "relative", zIndex: 1 }}>
				<Grid
					container
					spacing={4}
					alignItems="center"
					justifyContent="space-between"
				>
					{/* Text Column */}
					<Grid item xs={12} md={7} sx={{ zIndex: 2 }}>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: { staggerChildren: 0.15 },
								},
							}}
						>
							<motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
								<Typography
									variant="overline"
									sx={{
										color: "#aaaaaa",
										letterSpacing: "4px",
										fontWeight: 600,
										mb: 2,
										display: "block"
									}}
								>
									PORTFOLIO & EXPERIENCE
								</Typography>
							</motion.div>

							<motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
								<Typography
									variant="h1"
									sx={{
										fontWeight: 900,
										fontSize: { xs: "4rem", sm: "5.5rem", md: "7rem" },
										lineHeight: 1,
										letterSpacing: "-0.03em",
										mb: 2,
										background: "linear-gradient(135deg, #ffffff 0%, #a0aab2 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
									}}
								>
									PHILIP<br/>AXELSSON
								</Typography>
							</motion.div>

							<motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
								<Typography
									variant="h3"
									sx={{
										fontWeight: 700,
										fontSize: { xs: "1.5rem", md: "2.5rem" },
										letterSpacing: "-0.02em",
										mb: 3,
										// Replaced Cyan with dynamic Purple to Pink/Violet gradient
										background: "linear-gradient(90deg, #8354F8 0%, #EC4899 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
									}}
								>
									Civil Engineer in Media Tech.
								</Typography>
							</motion.div>

							<motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
								<Typography
									variant="body1"
									sx={{
										color: "#a0aab2",
										fontSize: { xs: "1.1rem", md: "1.25rem" },
										lineHeight: 1.6,
										mb: 5,
										maxWidth: "500px",
										fontWeight: 400
									}}
								>
									I am a results-driven frontend developer focused on building scalable,
									high-performance applications that blend beautiful design with
									flawless engineering.
								</Typography>
							</motion.div>

							<motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
								<Stack
									direction="row"
									spacing={1.5}
									flexWrap="wrap"
									useFlexGap
									sx={{ mb: { xs: 6, md: 0 } }}
								>
									<Chip
										sx={{ backgroundColor: "rgba(131, 84, 248, 0.15)", color: "#b094ff", fontWeight: 700, border: "none" }}
										label="FRONTEND"
									/>
									<Chip
										sx={{ backgroundColor: "rgba(236, 72, 153, 0.1)", color: "#f472b6", fontWeight: 700, border: "none" }}
										label="E-COMMERCE"
									/>
									<Chip
										sx={{ backgroundColor: "rgba(255, 255, 255, 0.05)", color: "#ffffff", fontWeight: 700, border: "1px solid rgba(255, 255, 255, 0.1)" }}
										label="ENGINEERING"
									/>
								</Stack>
							</motion.div>
						</motion.div>
					</Grid>

					<Grid
						display="flex"
						justifyContent="center"
						sx={{ mt: { md: 2 } }}
						item
						xs={12}
						md={5}
					>
						<motion.div
							initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
							animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							style={{ display: "flex", justifyContent: "center", width: "100%", position: "relative", zIndex: 2 }}
						>
							<Box
								component="img"
								sx={{
									width: "85%",
									filter: "grayscale(20%) contrast(120%)", // Keep the subtle tech aesthetic filter
									borderRadius: "24px",
									boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
								}}
								alt="Philip Axelsson"
								src={require("../Assets/philip8.png")}
							/>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
