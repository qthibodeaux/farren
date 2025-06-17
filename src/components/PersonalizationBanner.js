import { useState, useEffect } from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material'; // Imported useTheme for colors
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // Fast
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined'; // Eco-Friendly (Leaf icon)
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined'; // Only You (Unique)
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; // Support
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const personalizationFeatures = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: '3rem' }} />,
    title: 'Fast',
    detailedHeading: 'Lightning Fast Delivery',
    detailedDescription: 'We prioritize swift processing and shipping to get your custom embroidered items to your doorstep as quickly as possible, without compromising quality.',
  },
  {
    icon: <DiamondOutlinedIcon sx={{ fontSize: '3rem' }} />,
    title: 'Only You',
    detailedHeading: 'Uniquely Yours',
    detailedDescription: 'Every piece is crafted with your vision in mind, ensuring a truly unique and personal item that reflects your individual style and story.',
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: '3rem' }} />,
    title: 'Support',
    detailedHeading: 'Real Support',
    detailedDescription: 'Our multi-person team provides professional customer support, ready to answer any questions you may have. We strive for satisfactory service.',
  },
  {
    icon: <VerifiedOutlinedIcon sx={{ fontSize: '3rem' }} />,
    title: 'High-Quality',
    detailedHeading: 'Premium Quality',
    detailedDescription: 'We use only the finest threads and materials combined with advanced embroidery techniques to ensure durable, vibrant, and high-quality results.',
  },
  {
    icon: <SpaOutlinedIcon sx={{ fontSize: '3rem' }} />,
    title: 'Eco-Friendly',
    detailedHeading: 'Sustainable Practices',
    detailedDescription: 'Committed to the environment, we employ eco-friendly materials and sustainable production methods wherever possible in our embroidery process.',
  },
];

function PersonalizationBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        (prevIndex + 1) % personalizationFeatures.length
      );
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  const activeFeature = personalizationFeatures[activeIndex];

  return (
    <Box
      sx={{
        bgcolor: 'primary.main', // Deep Purple background
        py: 8,
        textAlign: 'center',
        mb: 7,
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        color: 'white', // White text on this banner
      }}
    >
      <Typography variant="h2" sx={{ color: 'white', mb: 4 }}>
        Embroideryforlove Unique Story, Embroidered
      </Typography>

      {/* Icons Section */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 6 }}>
        {personalizationFeatures.map((feature, index) => (
          <Grid item key={index} xs={4} sm={2.4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
              className={`personalization-icon-circle ${index === activeIndex ? 'active' : ''}`}
              sx={{
                width: { xs: 80, sm: 100 }, // Responsive sizing for circles
                height: { xs: 80, sm: 100 },
                borderRadius: '50%',
                bgcolor: 'white', // White background for the circle itself
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                position: 'relative',
                color: 'primary.main', // Icon color
                cursor: 'pointer',
                '&:hover': {
                  borderColor: theme.palette.secondary.main, // Hover effect
                },
                '--active-border-color': theme.palette.secondary.main, // CSS variable for animation
              }}
              onClick={() => setActiveIndex(index)} // Allow manual click to change
            >
              {feature.icon}
            </Box>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
              {feature.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Detailed Description Section */}
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 2 }}>
        {/* Using a key on the Box forces a re-render of its children when activeIndex changes,
            which can help with text transitions if you add them later. */}
        <Box key={activeIndex}>
          <Typography variant="h4" sx={{ color: 'secondary.main', mb: 1 }}>
            {activeFeature.detailedHeading}
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', mb: 0 }}>
            {activeFeature.detailedDescription}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PersonalizationBanner;