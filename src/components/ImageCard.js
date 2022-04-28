import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import room from '../assets/images/room.png';

const ImageCard = () => {
  return (
    <Card sx={{ maxWidth: 345, mt: 4, ml: 5 }}>
      <CardMedia component='img' alt='green iguana' height='140' image={room} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          ROOM
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          The printing of a room description is a more delicate business than it
          might initially seem to be: Inform has to consider all the objects
          that the player might have brought into the room or dropped there, and
          all the objects on visible supporters, and decide how to group and
          list them.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
