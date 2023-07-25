import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static" sx={{ bgcolor: "#0a192f" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            P.AXELSSON
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link href="/courses">
                <MenuItem>
                  <Typography color="#23ff79" textAlign="center">Courses</Typography>
                </MenuItem>
              </Link>
              <Link href="/projects">
                <MenuItem>
                  <Typography color="#23ff79" textAlign="center">Projects</Typography>
                </MenuItem>
                </Link>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            P.AXELSSON
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button href="/experience" variant="outlined" sx={{ ":hover": {color: "white",borderColor: 'white'}, borderColor: '#23ff79', mr:"1rem",my: 2, color: '#23ff79', display: 'block' }}>
                Experience
              </Button>
              <Button href="/courses" variant="outlined" sx={{ ":hover": {color: "white",borderColor: 'white'}, borderColor: '#23ff79', mr:"1rem",my: 2, color: '#23ff79', display: 'block' }}>
                Courses
              </Button>
              <Button href="/projects" variant="outlined" sx={{  ":hover": {color: "white",borderColor: 'white'},borderColor: '#23ff79', my: 2, color: '#23ff79', display: 'block' }}>
                Projects
              </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton  sx={{ p: 0 }}>
              <Button sx={{ color: 'white'}}>
                <GitHubIcon fontSize="large"/>
              </Button>
              </IconButton>
            </Tooltip>
            <Tooltip>
              <IconButton  sx={{ p: 0 }}>
              <Button sx={{ color: 'white'}}>
                <LinkedInIcon fontSize="large"/>
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