import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function About() {
	return (
		<Box className="about-container" sx={{ mb: 8, pt: 4, pb: 4 }}>
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
				MY SKILLS
			</Typography>
			<Container sx={{ mb: { xs: 2, mb: 10 } }}>
				<Box
					sx={{
						display: "grid",
						gap: 3,
						gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" }, // Keep 1.5fr and 1fr for asymmetrical look, we will just wrap rows naturally
						gridAutoRows: "minmax(min-content, max-content)",
					}}
				>
					{/* Hero Bento Box: Frontend Developer (Spans 2 columns on Desktop if we want, or takes the larger 1.5fr fraction) */}
					<Card
						elevation={0}
						sx={{
							backgroundColor: "#111111",
							border: "1px solid rgba(255,255,255,0.05)",
							borderRadius: 4,
							gridColumn: { xs: "1", md: "1 / span 2" }, // Make Frontend massive, full width of grid on top row
							p: 4,
						}}
					>
						<Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
							<Avatar
								alt="Frontend"
								src={require("../Assets/frontend2.png")}
								sx={{ width: 100, height: 100 }}
							/>
							<Box>
								<Typography variant="h3" sx={{ color: "white", fontWeight: 700, mb: 1, textAlign: { xs: "center", md: "left" } }}>
									Frontend Developer
								</Typography>
								<Typography variant="body1" sx={{ color: "#999999", mb: 3, textAlign: { xs: "center", md: "left" } }}>
									I am passionate about frontend development, I’ve worked with
									various frameworks and currently focus on creating dynamic,
									user-friendly interfaces using modern tools.
								</Typography>
							</Box>
						</Stack>

						<Typography variant="subtitle2" sx={{ color: "#ffffff", fontWeight: 700, mt: 4, mb: 2, textTransform: "uppercase", letterSpacing: 2 }}>
							Core Technologies
						</Typography>

						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								gap: 2,
							}}
						>
							{[
								{ name: "React", src: "react2.png" },
								{ name: "NextJS", src: "nextjs.png" },
								{ name: "Electron", src: "electron.png" },
								{ name: "Aurelia", src: "aurelia.png" },
								{ name: "HTML", src: "html.png" },
								{ name: "CSS", src: "css.png" },
								{ name: "Github", src: "github.png" },
								{ name: "VS Code", src: "vscode.png" },
								{ name: "Postman", src: "postman.png" },
								{ name: "Sanity", src: "sanity.png" },
								{ name: "Netlify", src: "netlify.png" },
							].map((tech) => (
								<Stack
									key={tech.name}
									direction="row"
									spacing={1.5}
									alignItems="center"
									sx={{
										backgroundColor: "#1a1a1a",
										border: "1px solid rgba(255,255,255,0.05)",
										borderRadius: 2,
										py: 1,
										px: 2,
									}}
								>
									<Avatar alt={tech.name} src={require(`../Assets/${tech.src}`)} sx={{ width: 24, height: 24 }} />
									<Typography sx={{ color: "white", fontSize: "0.85rem", fontWeight: 600 }}>{tech.name}</Typography>
								</Stack>
							))}
						</Box>
					</Card>

					{/* Bento Item 2: Ecommerce */}
					<Card
						elevation={0}
						sx={{
							backgroundColor: "#111111",
							border: "1px solid rgba(255,255,255,0.05)",
							borderRadius: 4,
							p: 4,
							display: "flex",
							flexDirection: "column"
						}}
					>
						<Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
							<Avatar
								alt="Ecommerce"
								src={require("../Assets/ecom2.png")}
								sx={{ width: 60, height: 60 }}
							/>
							<Typography variant="h4" sx={{ color: "white", fontWeight: 700 }}>
								Ecommerce
							</Typography>
						</Stack>
						<Typography variant="body2" sx={{ color: "#999999", mb: 4, flexGrow: 1 }}>
							Born and raised in Ecommerce. This is my true passion and I
							have worked with various platforms and currently I am working
							with Shopify.
						</Typography>

						<Typography variant="subtitle2" sx={{ color: "#ffffff", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: 2 }}>
							Platforms & Tools
						</Typography>

						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
							{[
								{ name: "Shopify", src: "shopify.png" },
								{ name: "WooCommerce", src: "woo.png" },
								{ name: "Wordpress", src: "wordpress.png" },
								{ name: "Analytics", src: "analytics.png" },
								{ name: "Klaviyo", src: "klaviyo4.png" },
							].map((tech) => (
								<Stack
									key={tech.name}
									direction="row"
									spacing={1.5}
									alignItems="center"
									sx={{
										backgroundColor: "#1a1a1a",
										border: "1px solid rgba(255,255,255,0.05)",
										borderRadius: 2,
										py: 1,
										px: 2,
									}}
								>
									<Avatar alt={tech.name} src={require(`../Assets/${tech.src}`)} sx={{ width: 24, height: 24 }} />
									<Typography sx={{ color: "white", fontSize: "0.85rem", fontWeight: 600 }}>{tech.name}</Typography>
								</Stack>
							))}
						</Box>
					</Card>

					{/* Bento Item 3: UX/UI */}
					<Card
						elevation={0}
						sx={{
							backgroundColor: "#111111",
							border: "1px solid rgba(255,255,255,0.05)",
							borderRadius: 4,
							p: 4,
							display: "flex",
							flexDirection: "column"
						}}
					>
						<Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
							<Avatar
								alt="UX/UI"
								src={require("../Assets/uxui.png")}
								sx={{ width: 60, height: 60 }}
							/>
							<Typography variant="h4" sx={{ color: "white", fontWeight: 700 }}>
								UX/UI Design
							</Typography>
						</Stack>
						<Typography variant="body2" sx={{ color: "#999999", mb: 4, flexGrow: 1 }}>
							Interested in UX/UI design, I specialize in creating
							intuitive, user-centered interfaces that enhance functionality
							and user experience, while aligning with business goals.
						</Typography>

						<Typography variant="subtitle2" sx={{ color: "#ffffff", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: 2 }}>
							Design Software
						</Typography>
						
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
							{[
								{ name: "Photoshop", src: "photoshop1.png" },
								{ name: "Affinity", src: "affinity.png" },
								{ name: "Figma", src: "figma.png" },
							].map((tech) => (
								<Stack
									key={tech.name}
									direction="row"
									spacing={1.5}
									alignItems="center"
									sx={{
										backgroundColor: "#1a1a1a",
										border: "1px solid rgba(255,255,255,0.05)",
										borderRadius: 2,
										py: 1,
										px: 2,
									}}
								>
									<Avatar alt={tech.name} src={require(`../Assets/${tech.src}`)} sx={{ width: 24, height: 24 }} />
									<Typography sx={{ color: "white", fontSize: "0.85rem", fontWeight: 600 }}>{tech.name}</Typography>
								</Stack>
							))}
						</Box>
					</Card>

					{/* Bento Item 4: Backend */}
					<Card
						elevation={0}
						sx={{
							backgroundColor: "#111111",
							border: "1px solid rgba(255,255,255,0.05)",
							borderRadius: 4,
							p: 4,
							display: "flex",
							flexDirection: "column"
						}}
					>
						<Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
							<Avatar
								sx={{ width: 60, height: 60, backgroundColor: "#8354F8" }}
							>
								<TerminalIcon sx={{ fontSize: 32, color: "white" }} />
							</Avatar>
							<Typography variant="h4" sx={{ color: "white", fontWeight: 700 }}>
								Backend Development
							</Typography>
						</Stack>
						<Typography variant="body2" sx={{ color: "#999999", mb: 4, flexGrow: 1 }}>
							Beyond the frontend, I also have experience designing and implementing backend logic, 
							writing scripts, and developing stable APIs using object-oriented principles.
						</Typography>

						<Typography variant="subtitle2" sx={{ color: "#ffffff", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: 2 }}>
							Languages & Frameworks
						</Typography>
						
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
							{[
								{ name: "Python", src: "python.png" },
								{ name: "Java", src: "java.png" },
							].map((tech) => (
								<Stack
									key={tech.name}
									direction="row"
									spacing={1.5}
									alignItems="center"
									sx={{
										backgroundColor: "#1a1a1a",
										border: "1px solid rgba(255,255,255,0.05)",
										borderRadius: 2,
										py: 1,
										px: 2,
									}}
								>
									<Avatar alt={tech.name} src={require(`../Assets/${tech.src}`)} sx={{ width: 24, height: 24 }} />
									<Typography sx={{ color: "white", fontSize: "0.85rem", fontWeight: 600 }}>{tech.name}</Typography>
								</Stack>
							))}
						</Box>
					</Card>
				</Box>
			</Container>
		</Box>
	);
}
