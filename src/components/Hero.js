import { Box, Typography } from '@mui/material';
import backgroundImage from '../assets/HeroImage.jpg'

function Hero() {
  
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 300, sm: 400, md: 500 },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        mb: 5,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: { xs: 10, md: 5 },
          borderRadius: '8px',
          maxWidth: '100%',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
            mb: { xs: 1, md: 2 },
            letterSpacing: 1.5,
          }}
        >
          Farren Embroidery
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          Craft cool memories with our custom embroidery services, designed just for you.
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;