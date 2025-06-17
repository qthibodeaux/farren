import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const instagramPhotos = [
  'https://via.placeholder.com/200/F06292/FFFFFF?text=Insta+1',
  'https://via.placeholder.com/200/BA68C8/FFFFFF?text=Insta+2',
  'https://via.placeholder.com/200/9575CD/FFFFFF?text=Insta+3',
  'https://via.placeholder.com/200/7986CB/FFFFFF?text=Insta+4',
  'https://via.placeholder.com/200/64B5F6/FFFFFF?text=Insta+5',
  'https://via.placeholder.com/200/4FC3F7/FFFFFF?text=Insta+6',
  'https://via.placeholder.com/200/4DD0E1/FFFFFF?text=Insta+7',
  'https://via.placeholder.com/200/4DB6AC/FFFFFF?text=Insta+8',
];

function InstagramSection() {
  return (
    <Box sx={{ textAlign: 'center', mb: 7 }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 5 }}>
        Follow us on Instagram{' '}
        <Link href="https://www.instagram.com/farrenembroidery" target="_blank" rel="noopener noreferrer" color="primary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
          @FarrenEmbroidery
        </Link>
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {instagramPhotos.map((src, index) => (
          <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}> {/* Adjust grid items for different screen sizes */}
            <Box
              component="img"
              src={src}
              alt={`Instagram Post ${index + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default InstagramSection;