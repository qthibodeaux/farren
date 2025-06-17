// src/components/WhyFarrenServices.js
import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const services = [
  {
    title: 'Free Resources',
    description: 'Helpful service that responds to contact to help ensure a friendly and professional experience to help you with your order.',
    icon: <AssignmentTurnedInIcon />,
    headerBg: '#6A1B9A', // Deep Purple (primary.main)
  },
  {
    title: 'Build a brand, not just a product',
    description: 'Custom products labels, packaging, inserts to reflect your brand\'s identity and create a polished, professional customer experience.',
    icon: <BuildIcon />,
    headerBg: '#9C4DCC', // Lighter Purple (primary.light)
  },
  {
    title: 'Dedicated Support',
    description: 'Our team strives for excellent service with orders, setup, or troubleshooting, and keeps your business running smoothly.',
    icon: <AssignmentTurnedInIcon />, // Using HeadsetSupportIcon again for variety, you can choose another.
    headerBg: '#38006B', // Darker Purple (primary.dark)
  },
  {
    title: 'Reliable Quality',
    description: 'Professional team and 3-step quality control process ensures your embroidered products meet the highest standards every time.',
    icon: <AssignmentTurnedInIcon />,
    headerBg: '#6A1B9A', // Deep Purple (primary.main)
  },
];

function WhyFarrenServices() {
  const theme = useTheme();
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
                borderRadius: '8px',
                textAlign: 'left',
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                },
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden', // Ensure rounded corners apply to content
              }}
            >
              {/* Top Header Section */}
              <Box
                sx={{
                  bgcolor: service.headerBg,
                  color: 'white',
                  p: 3,
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  textAlign: 'center',
                }}
              >
                {/* Apply icon color here */}
                {React.cloneElement(service.icon, { sx: { fontSize: '2.5rem', color: 'white', mb: 1 } })}
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 0 }}>
                  {service.title}
                </Typography>
              </Box>
              {/* Middle Description Section */}
              <Box sx={{ p: 3, flexGrow: 1, bgcolor: 'background.paper' }}> {/* Use default paper color for desc */}
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  {service.description}
                </Typography>
              </Box>
              {/* Bottom "Learn More" Section */}
              <Box
                sx={{
                  bgcolor: 'white', // White background
                  color: service.headerBg, // Text color matches top background
                  p: 2,
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  cursor: 'pointer', // Indicate it's clickable
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    bgcolor: theme.palette.secondary.light, // Light yellow on hover
                    color: 'black', // Dark text on yellow hover
                  }
                }}
              >
                Learn More
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyFarrenServices;