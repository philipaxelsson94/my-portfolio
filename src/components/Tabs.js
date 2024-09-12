import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "./Card";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import sanityClient from "../client";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "courses"]{
      imageurl,
      title,
      hp,
      desc,
      year
    }`
			)
			.then((data) => setCourses(data))
			.catch(console.error);
	}, []);

	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
			>
				<Container sx={{ mt: 4, pt: "3rem", width: "100%" }}>
					<Typography
						sx={{ color: "#272160" }}
						gutterBottom
						variant="h2"
						component="div"
					>
						My eductaion
					</Typography>
					<Typography sx={{}} gutterBottom variant="h6" component="div">
						Here you can find which courses I have taken in my civil engineering
						program at KTH.
					</Typography>
					<Box sx={{ mt: 8, borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons
							allowScrollButtonsMobile
							aria-label="scrollable force tabs example"
						>
							<Tab sx={{ color: "black" }} label="Year 1" {...a11yProps(0)} />
							<Tab sx={{ color: "black" }} label="Year 2" {...a11yProps(1)} />
							<Tab sx={{ color: "black" }} label="Year 3" {...a11yProps(2)} />
							<Tab sx={{ color: "black" }} label="Year 4" {...a11yProps(2)} />
							<Tab sx={{ color: "black" }} label="Year 5" {...a11yProps(2)} />
						</Tabs>
					</Box>

					<TabPanel value={value} index={0}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								{courses
									.filter((course) => course.year === "one")
									.map((course) => (
										<Grid item xs={12} sm={12} md={4} lg={4}>
											<Card
												key={course.title}
												imageurl={course.imageurl}
												title={course.title}
												hp={course.hp}
												desc={course.desc}
											></Card>
										</Grid>
									))}
							</Grid>
						</Box>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								{courses
									.filter((course) => course.year === "two")
									.map((course) => (
										<Grid item xs={12} sm={12} md={4} lg={4}>
											<Card
												key={course.title}
												imageurl={course.imageurl}
												title={course.title}
												hp={course.hp}
												desc={course.desc}
											></Card>
										</Grid>
									))}
							</Grid>
						</Box>
					</TabPanel>

					<TabPanel value={value} index={2}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								{courses
									.filter((course) => course.year === "three")
									.map((course) => (
										<Grid item xs={12} sm={12} md={4} lg={4}>
											<Card
												key={course.title}
												imageurl={course.imageurl}
												title={course.title}
												hp={course.hp}
												desc={course.desc}
											></Card>
										</Grid>
									))}
							</Grid>
						</Box>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								{courses
									.filter((course) => course.year === "four")
									.map((course) => (
										<Grid item xs={12} sm={12} md={4} lg={4}>
											<Card
												key={course.title}
												imageurl={course.imageurl}
												title={course.title}
												hp={course.hp}
												desc={course.desc}
											></Card>
										</Grid>
									))}
							</Grid>
						</Box>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								{courses
									.filter((course) => course.year === "five")
									.map((course) => (
										<Grid item xs={12} sm={12} md={4} lg={4}>
											<Card
												key={course.title}
												imageurl={course.imageurl}
												title={course.title}
												hp={course.hp}
												desc={course.desc}
											></Card>
										</Grid>
									))}
							</Grid>
						</Box>
					</TabPanel>
				</Container>
			</motion.div>
		</>
	);
}
