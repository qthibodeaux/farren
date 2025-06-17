import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

const events = [
  {
    title: 'Instagram Live Stream Q&A',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Join us for live Q&A sessions where we answer your questions about custom embroidery, design tips, and more!',
    link: 'https://www.instagram.com',
  },
  {
    title: 'Instagram Behind The Scenes',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Get an exclusive look at our embroidery process, from design to finished product. See how your custom pieces come to life!',
    link: 'https://www.instagram.com',
  },
];

function CommunityEvents() {
  return (
    <Box sx={{ textAlign: 'center', mb: 7 }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 5 }}>
        Community Events
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia component="img" height="200" image={event.image} alt={event.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', justifyContent: 'flex-end', p: 2 }}>
                <Button variant="contained" href={event.link} target="_blank" sx={{ bgcolor: 'primary.main', color: 'white' }}>
                  Go to Instagram
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CommunityEvents;