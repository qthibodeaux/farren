import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const personalizationFeatures = [
  'Fast',
  'Only You',
  'Support',
  'High Quality',
  'Eco Friendly',
  'Services',
];

function PersonalizationBanner() {
  return (
    <Box
      sx={{
        bgcolor: '#bbdefb', // Light blue background
        py: 7,
        textAlign: 'center',
        mb: 7,
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Typography variant="h2" sx={{ color: '#1a237e', mb: 4 }}>
        Embroidered with Love
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {personalizationFeatures.map((feature, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                bgcolor: 'white',
                px: 3,
                py: 1.5,
                borderRadius: '50px',
                fontWeight: 'bold',
                color: '#3f51b5',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              {feature}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PersonalizationBanner;