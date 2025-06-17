import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import DiscountIcon from '@mui/icons-material/Discount';

const features = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: '3.5rem', color: '#6A1B9A' }} />, // Purple icon
    title: 'Fast & Reliable Shipping',
    description: 'Get your custom order quickly and safely, no matter where you are.',
    bgColor: '#FFF59D', // Light Yellow
  },
  {
    icon: <LockIcon sx={{ fontSize: '3.5rem', color: '#E91E63' }} />, // Pink icon
    title: 'Secure Checkout',
    description: 'Enjoy a quick secure checkout process, with trusted payment options.',
    bgColor: '#FFCCBC', // Light Peach
  },
  {
    icon: <AssignmentReturnIcon sx={{ fontSize: '3.5rem', color: '#00ACC1' }} />, // Cyan icon
    title: 'Easy Returns',
    description: 'Not happy with your purchase? We offer hassle-free returns and exchanges.',
    bgColor: '#BBDEFB', // Light Blue
  },
  {
    icon: <DiscountIcon sx={{ fontSize: '3.5rem', color: '#4CAF50' }} />, // Green icon
    title: 'Exclusive Discounts',
    description: 'Subscribe to our newsletter for special offers and updates.',
    bgColor: '#C8E6C9', // Light Green
  },
];

function WhyChooseUs() {
  const theme = useTheme();
  return (
    <Box sx={{
        textAlign: 'center',
        mb: 7,
        bgcolor: 'white', // Explicitly white background for the whole section
        color: theme.palette.whiteSectionText, // Dark text for this section
        py: 7,
        px: 3,
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
     }}>
      {/* Header with underline */}
      <Box sx={{ display: 'inline-block', mb: 5, pb: 0.5, borderBottom: `3px solid ${theme.palette.primary.main}` }}>
        <Typography variant="h2" sx={{ color: theme.palette.whiteSectionText, m: 0 }}>
          Why Choose Us
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0} // No default shadow
              sx={{
                p: 0, // Remove default padding
                borderRadius: '8px',
                textAlign: 'left', // Align text to left
                overflow: 'hidden', // Contain the floating elements
                height: '250px', // Fixed height for consistent cards
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.15)', // Add shadow on hover
                },
                position: 'relative', // For positioning the bottom elements
              }}
            >
              {/* Top background color and text */}
              <Box
                sx={{
                  bgcolor: feature.bgColor,
                  color: theme.palette.whiteSectionText, // Dark text on the colored background
                  p: 3,
                  flexGrow: 1, // Allows this section to expand
                  position: 'relative', // For icon/text positioning
                  zIndex: 2, // Ensure text is above background graphics
                  minHeight: '120px', // Ensure enough space for text
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: theme.palette.whiteSectionText }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}> {/* Slightly lighter dark text */}
                  {feature.description}
                </Typography>
              </Box>

              {/* Bottom White Section with Icon */}
              <Box
                sx={{
                  bgcolor: 'white', // White background for the bottom section
                  p: 3,
                  display: 'flex',
                  justifyContent: 'flex-end', // Push icon to the right
                  alignItems: 'flex-end', // Align icon to the bottom
                  height: '100px', // Fixed height for the white section
                  borderTop: '1px solid #eee', // Small separator
                  position: 'relative',
                  zIndex: 1,
                  // Floating icon/graphic positioning
                  '& .MuiSvgIcon-root': {
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    fontSize: '4.5rem', // Larger icon
                    opacity: 0.2, // Faded effect
                    color: feature.bgColor, // Icon color matches top background
                  },
                }}
              >
                 {feature.icon} {/* The actual icon will be rendered here, faded */}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyChooseUs;