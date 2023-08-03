import * as React from 'react';
import Container from '@mui/material/Container';

import MiddleImage from './MiddleImage'
import Presentation from './Presentation'
function Home() {
  return (
    <Container sx={{ pt:'3rem', width: '100%' }}>
        {/*<Box
       
       component="img"
       sx={{
         color:"white",
         width: 200,
        
         maxWidth: { xs: 350, md: 250 },
       }}
       alt=""
       src={require("../Assets/Man_simple.png")}
     />
    */}
    
    <Presentation/>
     <MiddleImage/>
    </Container>
    
    )
}

export default Home