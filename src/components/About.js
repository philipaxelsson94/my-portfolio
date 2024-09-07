import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function About() {
  return (
<div className="aboutUs-container">
    <Container sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
            <Typography 
                variant="h2" 
                sx={{
                    fontWeight: 700,
                    color: '#5a4dcf',
                    }}>
                    Who Am I?
            </Typography>
            <Typography variant="h6" 
                sx={{
                    fontWeight: 800,
                    color: 'black',
                    }}>
                    I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming

I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </Typography>
        </Grid>
        <Grid xs={12} md={4}>
            <Typography variant="h2" sx={{
                fontWeight: 700,
                color: '#5a4dcf',
                }}>My Skills
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                <Chip label="React" color="primary" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="HTML" color="primary" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="CSS" color="primary" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="Figma" color="primary" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="Python" color="primary" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="Java" color="primary" size="large" />
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Container>
</div>
  
  )
}
