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
                    fontWeight: 700,
                    color: 'white',
                    }}>
                    I'm a web developer.
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
                <Chip label="React" color="success" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="HTML" color="success" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="CSS" color="success" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="Figma" color="success" size="large" />
                </Grid><Grid item xs={2}>
                <Chip label="Python" color="success" size="large" />
                </Grid>
                <Grid item xs={2}>
                <Chip label="Java" color="success" size="large" />
                </Grid>
                
            </Grid>
        </Grid>
      </Grid>
    </Container>
</div>
  
  )
}
