import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';

function MyWork() {

  const Item = styled(Paper)(() => ({
    backgroundColor: '#98d6a9',
    padding: 8,
    textAlign: 'center',
    color: 'black',
  }));

  return (
    <Container sx={{mt:10, mb:10}}>
      <Grid container spacing={4}>
        <Grid item md={4} xs={6}>
            <Card elevation={3} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        src={require("../Assets/lxa.png")}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            LXA The Label
                        </Typography>
                        
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Button onClick={() => window.location = 'https://lxathelabel.com/'} variant="outlined"
                            sx={{ ":hover": {color: "white",borderColor: 'white'}, borderColor: '#23ff79', mr:"1rem",my: 2, color: '#23ff79', display: 'block'}}>
                            Visit website
                         </Button>
                    </CardContent>
                </CardActionArea>
            </Card> 
        </Grid>

        <Grid item md={4} xs={6}>
        <Card elevation={3} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={require("../Assets/sanne.png")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sanne Alexandra
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button onClick={() => window.location = 'https://lxathelabel.com/'} variant="outlined"
                            sx={{ ":hover": {color: "white",borderColor: 'white'}, borderColor: '#23ff79', mr:"1rem",my: 2, color: '#23ff79', display: 'block'}}>
                            Visit website
                         </Button>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>

        <Grid item md={4} xs={6}>
        <Card elevation={3} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={require("../Assets/lecap.png")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Le Capsole
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button onClick={() => window.location = 'https://lecapsole.com/'} variant="outlined"
                            sx={{ ":hover": {color: "white",borderColor: 'white'}, borderColor: '#23ff79', mr:"1rem",my: 2, color: '#23ff79', display: 'block'}}>
                            Visit website
        </Button>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>

      </Grid>
      </Container>
  )
}

export default MyWork;