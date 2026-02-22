import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";

const navItems = [
	{ id: "skills", label: "Skills" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "hobbies", label: "Hobbies" },
];

function FloatingNav() {
	const [activeSection, setActiveSection] = useState("skills");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// We prioritize setting the active section when an intersection occurs.
					// A lower threshold helps ensure larger sections get recognized.
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 } // 30% visibility is enough to trigger active state
		);

		navItems.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(id);
		}
	};

	return (
		<Box
			component={motion.div}
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
			sx={{
				position: "sticky",
				top: { xs: 20, md: 40 },
				zIndex: 9999,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: { xs: 0.5, md: 1 },
				width: "fit-content",
				margin: "0 auto",
				mt: { xs: 2, md: 3 },
				mb: { xs: 2, md: 3 },
				backgroundColor: "rgba(25, 25, 25, 0.75)",
				backdropFilter: "blur(20px)",
				border: "1px solid rgba(255,255,255,0.08)",
				boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
				borderRadius: "50px",
				px: { xs: 1.5, md: 2 },
				py: 1,
			}}
		>
			<Typography
				variant="h6"
				noWrap
				onClick={() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
					setActiveSection("skills"); // Or whatever you want to highlight at the top
				}}
				sx={{
					mr: { xs: 1, md: 3 },
					ml: { xs: 1, md: 2 },
					display: "flex",
					fontFamily: "monospace",
					fontWeight: 900,
					letterSpacing: ".2rem",
					color: "white",
					cursor: "pointer",
					userSelect: "none",
					transition: "transform 0.2s ease",
					":hover": { transform: "scale(1.05)" }
				}}
			>
				P<span style={{ color: "#8354F8" }}>.</span>A
			</Typography>

			{navItems.map((item) => {
				const isActive = activeSection === item.id;
				return (
					<Button
						key={item.id}
						onClick={() => scrollToSection(item.id)}
						sx={{
							borderRadius: "50px",
							px: { xs: 1.5, md: 3 },
							py: { xs: 1, md: 1.5 },
							color: isActive ? "white" : "#a0aab2",
							backgroundColor: isActive ? "#8354F8" : "transparent", // Primary Purple pill
							fontWeight: isActive ? 700 : 600,
							textTransform: "none",
							fontSize: { xs: "0.75rem", md: "0.9rem" },
							transition: "all 0.3s ease",
							":hover": {
								backgroundColor: isActive ? "#8354F8" : "rgba(255,255,255,0.05)",
								color: "white",
							},
						}}
					>
						{item.label}
					</Button>
				);
			})}

			<Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: "rgba(255,255,255,0.1)", mx: 1 }} />

			<Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
				<Tooltip title="Download CV">
					<IconButton 
						onClick={() => window.open(require("../Assets/cv1.pdf"), "_none")}
						sx={{ color: "#a0aab2", "&:hover": { color: "white", backgroundColor: "rgba(255,255,255,0.05)" } }}
					>
						<DescriptionIcon fontSize="small" />
					</IconButton>
				</Tooltip>
				<Tooltip title="GitHub">
					<IconButton 
						component="a" 
						href="https://github.com/philipaxelsson94" 
						target="_blank" 
						sx={{ color: "#a0aab2", "&:hover": { color: "white", backgroundColor: "rgba(255,255,255,0.05)" } }}
					>
						<GitHubIcon fontSize="small" />
					</IconButton>
				</Tooltip>
				<Tooltip title="LinkedIn">
					<IconButton 
						component="a" 
						href="https://www.linkedin.com/in/philip-axelsson1994/" 
						target="_blank" 
						sx={{ color: "#a0aab2", "&:hover": { color: "#0a66c2", backgroundColor: "rgba(255,255,255,0.05)" } }}
					>
						<LinkedInIcon fontSize="small" />
					</IconButton>
				</Tooltip>
			</Box>
		</Box>
	);
}

export default FloatingNav;
