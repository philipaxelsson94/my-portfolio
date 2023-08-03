import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Presentation() {
  return (
    
    <Container align="center" sx={{ pt:'3rem', width: '100%' }}>
      <Typography variant="h2" sx={{
          fontWeight: 700,
          color: '#5a4dcf',
          }}>
      Hi! My name is Philip!
      </Typography>
      <Typography  variant="h6" sx={{
          fontWeight: 700,
          color: 'white',
          }}>
      I'm an civil engineer in media technology with a master in interaction design.<br/>
      </Typography>
    </Container>
    
    
    
  )
}
