// src/components/NewsletterBanner.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function NewsletterBanner() {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main', // Yellow background
        py: 8,
        textAlign: 'center',
        mb: 7,
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        color: 'black', // Black text on this banner
      }}
    >
      <Box sx={{ maxWidth: 700, mx: 'auto', px: 2 }}>
        <Typography variant="h2" sx={{ color: 'black', mb: 2.5 }}> {/* Black title */}
          You have some special treats!
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(0,0,0,0.7)', mb: 4 }}> {/* Darker gray text */}
          Subscribe to our newsletter for special discounts and exclusive information on upcoming products and designs.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'primary.main', // Purple button
            color: 'white', // White text
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