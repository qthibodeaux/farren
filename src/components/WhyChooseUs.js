import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import DiscountIcon from '@mui/icons-material/Discount';

const features = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: '3.5rem', color: 'primary.main', mb: 2 }} />,
    title: 'Fast & Reliable Shipping',
    description: 'Get your custom order quickly and safely, no matter where you are.',
  },
  {
    icon: <LockIcon sx={{ fontSize: '3.5rem', color: 'primary.main', mb: 2 }} />,
    title: 'Secure Checkout',
    description: 'Enjoy a quick secure checkout process, with trusted payment options.',
  },
  {
    icon: <AssignmentReturnIcon sx={{ fontSize: '3.5rem', color: 'primary.main', mb: 2 }} />,
    title: 'Easy Returns',
    description: 'Not happy with your purchase? We offer hassle-free returns and exchanges.',
  },
  {
    icon: <DiscountIcon sx={{ fontSize: '3.5rem', color: 'primary.main', mb: 2 }} />,
    title: 'Exclusive Discounts',
    description: 'Subscribe to our newsletter for special offers and updates.',
  },
];

function WhyChooseUs() {
  return (
    <Box sx={{ textAlign: 'center', mb: 7 }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 5 }}>
        Why Choose Us
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: '8px',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              {feature.icon}
              <Typography variant="h5" sx={{ mb: 1, color: 'text.primary' }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyChooseUs;