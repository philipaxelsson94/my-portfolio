import React from 'react'
import Typography from '@mui/material/Typography';

export default function Presentation() {
  return (
    <container align="center">
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
    </container>
    
    
  )
}
