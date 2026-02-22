import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
function MyWork() {
	const workExperiences = [
		{
			company: "Live Arena Technologies",
			image: "aip5.png",
			description: "As a Frontend Developer, I worked on building and maintaining scalable user interfaces for their video distribution platforms. I engaged in agile development to deliver responsive, seamless video streaming experiences.",
			chips: [
				{ label: "FRONTEND DEVELOPER" }
			],
			link: "https://livearena.com/"
		},
		{
			company: "Sanne Alexandra",
			image: "sann2.png",
			description: "I manage and maintain the website's overall structure, ensuring optimal performance and user experience through frontend development. Additionally, I focus on driving growth and increasing conversions by leveraging analytics tools and implementing marketing automation",
			chips: [
				{ label: "WEB DEVELOPER" },
				{ label: "ECOMMERCE SITE MANAGER" }
			],
			link: "https://sannealexandra.com/"
		},
		{
			company: "HUBSO",
			image: "hubso.png",
			description: "At Hubso I'm responsible for frontend and backend architectures, while also managing and optimizing the IT infrastructure to ensure seamless operations. Mostly I work in React.",
			chips: [
				{ label: "IT DEVELOPER" },
				{ label: "FRONTEND" },
				{ label: "SITE MANAGER" }
			],
			link: "https://hubso.com/"
		},
		{
			company: "Festprissen",
			image: "festprissen.png",
			description: "This is my side hustle, an affiliate eCommerce business I run in my spare time. I promote products I trust and earn commissions on sales made through my referral links.",
			chips: [
				{ label: "AFFILIATE" },
				{ label: "SITE MANAGER" }
			],
			link: "https://festprissen.se/"
		},
		{
			company: "Kejbertconcept",
			image: "kejbertconcept.png",
			description: "Sometimes I do som freelancing and at Kejbertconcept I help out with managing the Shopify store and updating the frontend when needed and also other IT specific tasks.",
			chips: [
				{ label: "FREELANCING" },
				{ label: "SITE MANAGER" }
			],
			link: "https://kejbertconcept.se/"
		}
	];

	return (
		<Container sx={{ mt: { xs: 0, md: 10 }, mb: 10 }}>
			<Typography
				variant="h1"
				sx={{
					my: 8,
					textAlign: "center",
					fontWeight: 800,
					color: "white",
					fontSize: { xs: "3rem", md: "4rem" },
					letterSpacing: -1
				}}
			>
				WORK EXPERIENCE
			</Typography>

			<Stack spacing={{ xs: 6, md: 10 }} sx={{ mt: 8 }}>
				{workExperiences.map((work, index) => {
					const isEven = index % 2 === 0;

					return (
						<Box
							key={work.company}
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" },
								backgroundColor: "#161616",
								borderRadius: 6,
								overflow: "hidden",
								boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
								border: "1px solid rgba(255,255,255,0.05)",
								transition: "transform 0.3s ease, box-shadow 0.3s ease",
								":hover": {
									transform: "translateY(-4px)",
									boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
									borderColor: "rgba(255,255,255,0.1)",
								}
							}}
						>
							{/* Image Container */}
							<Box
								sx={{
									width: { xs: "100%", md: "50%" },
									backgroundColor: "#111111", // Darker background to frame the image
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									p: { xs: 2, md: 4 },
									minHeight: { xs: "250px", md: "400px" }
								}}
							>
									<Box
										component="img"
										alt={work.company}
										src={require(`../Assets/${work.image}`)}
										sx={{ 
											width: "100%", 
											height: "100%", 
											maxHeight: { xs: "300px", md: "450px" },
											objectFit: "contain", 
											display: "block",
											borderRadius: 2,
											boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
										}}
									/>
							</Box>

							{/* Content Container */}
							<Box 
								sx={{
									width: { xs: "100%", md: "50%" },
									p: { xs: 4, md: 6 },
									display: "flex",
									flexDirection: "column",
									justifyContent: "center"
								}}
							>
								<Typography variant="h3" sx={{ color: "white", fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "2.5rem" }, letterSpacing: -0.5 }}>
									{work.company}
								</Typography>

								{work.description && (
									<Typography variant="body1" sx={{ color: "#aaaaaa", mb: 4, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.7 }}>
										{work.description}
									</Typography>
								)}

								<Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
									{work.chips.map((chip, chipIndex) => (
										<Chip
											key={chipIndex}
											label={chip.label}
											sx={{
												backgroundColor: "#8354F8", // All exact same purple
												color: "white",
												fontWeight: 700,
												fontSize: "0.75rem",
												borderRadius: 2,
												px: 1,
												border: "none",
											}}
										/>
									))}
								</Stack>

								<Box>
									<Button
										href={work.link}
										target="_blank"
										variant="contained"
										sx={{
											backgroundColor: "white",
											color: "black",
											fontWeight: 800,
											px: 4,
											py: 1.5,
											borderRadius: "50px",
											textTransform: "none",
											fontSize: "1rem",
											transition: "all 0.2s ease",
											":hover": {
												backgroundColor: "#e0e0e0",
												transform: "scale(1.02)"
											}
										}}
									>
										Visit Website
									</Button>
								</Box>
							</Box>
						</Box>
					);
				})}
			</Stack>
		</Container>
	);
}

export default MyWork;
