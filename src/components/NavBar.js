import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

function ResponsiveAppBar() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box
			sx={{ height: "100%", width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<Link underline="none" href="/courses">
				<MenuItem>
					<Typography color="black" textAlign="center">
						My education
					</Typography>
				</MenuItem>
			</Link>
			<Divider />
			<Link underline="none" href="/resume">
				<MenuItem>
					<Typography color="#23236b" textAlign="center">
						CV
					</Typography>
				</MenuItem>
			</Link>
		</Box>
	);
	return (
		<AppBar position="static">
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#23236b",
							textDecoration: "none",
						}}
					>
						P.A
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={toggleDrawer(true)}
							color="#23236b"
						>
							<MenuIcon />
						</IconButton>
					</Box>

					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#23236b",
							textDecoration: "none",
						}}
					>
						P.A
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Button
							href="/resume"
							variant="outlined"
							sx={{
								":hover": { color: "#23236b", borderColor: "#23236b" },
								borderColor: "#23236b",
								mr: "1rem",
								my: 2,
								color: "#23236b",
								display: "block",
								textAlign: "center",
							}}
						>
							CV
						</Button>

						<Button
							href="/courses"
							variant="outlined"
							sx={{
								":hover": { color: "#23236b", borderColor: "#23236b" },
								borderColor: "#23236b",
								mr: "1rem",
								my: 2,
								color: "#23236b",
								display: "block",
								textAlign: "center",
							}}
						>
							My education
						</Button>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip>
							<IconButton sx={{ p: 0 }}>
								<Button
									href="https://github.com/philipaxelsson94"
									sx={{ color: "white" }}
								>
									<GitHubIcon fontSize="large" />
								</Button>
							</IconButton>
						</Tooltip>
						<Tooltip>
							<IconButton sx={{ p: 0 }}>
								<Button
									href="https://www.linkedin.com/in/philip-axelsson1994/"
									sx={{ color: "white" }}
								>
									<LinkedInIcon fontSize="large" />
								</Button>
							</IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
