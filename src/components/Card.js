import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from "../client";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

export default function ActionAreaCard({ imageurl,title, hp, desc }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <Card onClick={handleOpen} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlFor(imageurl).width(200).url()}
          alt="green iguana"
        />
        <CardContent sx={{ backgroundColor: "#011226" }}>
            <Box sx={{display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', fontSize: { xs: "1rem", md: "1.5rem"}}} color="white" align="left" variant="h5">
                        {title}
                    </Typography>
                    <Chip label={hp} sx={{backgroundColor:'#5a4dcf', color: 'white'}}
                     />
            </Box>
            <Typography color="#23ff79" align="left" variant="body2">
                {desc}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  </Modal>
  </>
  );
}