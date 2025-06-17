import React from 'react';
import { Box, Typography } from '@mui/material';

const socialImages = [
  'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
];

function SocialMediaSection() {
  return (
    <Box sx={{ textAlign: 'center', mb: 7 }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 5 }}>
        Check Us Out On Social Media
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
        {socialImages.map((src, index) => (
          <Box
            key={index}
            component="img"
            src={src}
            alt={`Embroidered Design ${index + 1}`}
            sx={{
              width: { xs: '100%', sm: 300 },
              height: { xs: 300, sm: 300 },
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default SocialMediaSection;