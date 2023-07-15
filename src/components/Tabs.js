import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './Card';
import Container from '@mui/material/Container';
import  { useState, useEffect } from 'react';
import sanityClient from "../client";
import Grid from '@mui/material/Grid';



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
    'aria-controls': `simple-tabpanel-${index}`,
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
    <Container sx={{ pt:'3rem', width: '100%' }}>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ color:"#23ff79" }} label="Year 1" {...a11yProps(0)} />
          <Tab sx={{ color:"#23ff79" }} label="Year 2" {...a11yProps(1)} />
          <Tab sx={{ color:"#23ff79" }} label="Year 3" {...a11yProps(2)} />
          <Tab sx={{ color:"#23ff79" }} label="Year 4" {...a11yProps(2)} />
          <Tab sx={{ color:"#23ff79" }} label="Year 5" {...a11yProps(2)} />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        {courses.filter(course => course.year === "one").map(course => (
            <Grid item xs={6} sm={6} md={4} lg={4}>
                <Card key={course.title}
                imageurl={course.imageurl}
                title={course.title}
                hp={course.hp}
                desc={course.desc}>  
                </Card>
            </Grid>
        ))}
        </Grid>
        </Box>
             </TabPanel>
      <TabPanel value={value} index={1}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {courses.filter(course => course.year === "two").map(course => (
            <Grid item xs={6} sm={6} md={4} lg={4}>
                <Card key={course.title}
                imageurl={course.imageurl}
                title={course.title}
                hp={course.hp}
                desc={course.desc}>  
                </Card>
            </Grid>
        ))}
        </Grid>
        </Box>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
      {courses.filter(course => course.year === "three").map(course => (
            <Grid item xs={6} sm={6} md={3} lg={3}>
                <Card key={course.title}
                imageurl={course.imageurl}
                title={course.title}
                hp={course.hp}
                desc={course.desc}>  
                </Card>
            </Grid>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
      {courses.filter(course => course.year === "four").map(course => (
            <Grid item xs={6} sm={6} md={3} lg={3}>
                <Card key={course.title}
                imageurl={course.imageurl}
                title={course.title}
                hp={course.hp}
                desc={course.desc}>  
                </Card>
            </Grid>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
      {courses.filter(course => course.year === "five").map(course => (
            <Grid item xs={6} sm={6} md={3} lg={3}>
                <Card key={course.title}
                imageurl={course.imageurl}
                title={course.title}
                hp={course.hp}
                desc={course.desc}>  
                </Card>
            </Grid>
        ))}
      </TabPanel>
    </Container>
  );
}