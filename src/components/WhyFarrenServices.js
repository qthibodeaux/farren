import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const services = [
  {
    title: 'Free Resources',
    description: 'Helpful service that responds to contact to help ensure a friendly and professional experience to help you with your order.',
  },
  {
    title: 'Build a brand, not just a product',
    description: 'Custom products labels, packaging, inserts to reflect your brand\'s identity and create a polished, professional customer experience.',
  },
  {
    title: 'Dedicated Support',
    description: 'Our team strives for excellent service with orders, setup, or troubleshooting, and keeps your business running smoothly.',
  },
  {
    title: 'Reliable Quality',
    description: 'Professional team and 3-step quality control process ensures your embroidered products meet the highest standards every time.',
  },
];

function WhyFarrenServices() {
  return (
    <Box sx={{ textAlign: 'center', mb: 7 }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 5 }}>
        Why Choose Farren Embroidery Services?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              elevation={2}
              sx={{
                bgcolor: '#e3f2fd', // Light blue
                p: 4,
                borderRadius: '8px',
                textAlign: 'left',
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography variant="h4" sx={{ color: '#1565c0', mb: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#3f51b5' }}>
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyFarrenServices;