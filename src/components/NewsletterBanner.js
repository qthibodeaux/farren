import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function NewsletterBanner() {
  return (
    <Box
      sx={{
        bgcolor: '#ffccbc', // Light orange/peach color
        py: 8,
        textAlign: 'center',
        mb: 7,
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Box sx={{ maxWidth: 700, mx: 'auto', px: 2 }}>
        <Typography variant="h2" sx={{ color: '#d84315', mb: 2.5 }}>
          You have some special treats!
        </Typography>
        <Typography variant="h6" sx={{ color: '#5d4037', mb: 4 }}>
          Subscribe to our newsletter for special discounts and exclusive information on upcoming products and designs.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#d84315',
            color: 'white',
            py: 2,
            px: 4,
            fontSize: '1.1rem',
            fontWeight: 'bold',
          }}
        >
          Subscribe Now
        </Button>
      </Box>
    </Box>
  );
}

export default NewsletterBanner;