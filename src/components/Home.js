import * as React from 'react';
import Container from '@mui/material/Container';

import MiddleImage from './MiddleImage'
import Presentation from './Presentation'
import About from './About'

function Home() {
  return (
    <>
    <Presentation/>
    <MiddleImage/>
    <About/>
    </>
    
    )
}

export default Home