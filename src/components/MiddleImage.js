import React from 'react'
import Box from '@mui/material/Box';

export default function MiddleImage() {
  return (
    <Box 
        component="img"
        sx={{
            width: "100%",
          }}
        alt=""
        src={require("../Assets/illustration2.png")}
      />
  )
}
