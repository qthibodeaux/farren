import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#333', color: 'white', py: 5, fontSize: '0.9rem' }}>
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1200, mx: 'auto', mb: 3, pb: 3, borderBottom: '1px solid #555' }}>
        <Grid item xs={12} sm={6} md={2.4}> {/* Approx 5 columns */}
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
            My Company
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            <li><Link href="#faqs-section" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>About Me</Link></li>
            <li><Link href="#contact-us-section" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Contact Us</Link></li>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
            Help Center
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            <li><Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Track Your Order</Link></li>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
            Support
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            <li><Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Shipping Policy</Link></li>
            <li><Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Privacy Policy</Link></li>
            <li><Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Payment Method</Link></li>
            <li><Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Return Policy</Link></li>
            <li><Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Terms & Conditions</Link></li>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
            Get in Touch
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            <li>Email: <Link href="mailto:info@farrenembroidery.com" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>info@farrenembroidery.com</Link></li>
            <li>Instagram: <Link href="https://www.instagram.com/farrenembroidery" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>@farrenembroidery</Link></li>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.light' }}>
            We Accept
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Box component="img" src="https://via.placeholder.com/50x30/000080/FFFFFF?text=Visa" alt="Visa" sx={{ height: 30, filter: 'grayscale(100%) brightness(180%)' }} />
            <Box component="img" src="https://via.placeholder.com/50x30/FFD700/000000?text=MC" alt="Mastercard" sx={{ height: 30, filter: 'grayscale(100%) brightness(180%)' }} />
            <Box component="img" src="https://via.placeholder.com/50x30/000000/FFFFFF?text=ApplePay" alt="Apple Pay" sx={{ height: 30, filter: 'grayscale(100%) brightness(180%)' }} />
            <Box component="img" src="https://via.placeholder.com/50x30/4285F4/FFFFFF?text=GPay" alt="Google Pay" sx={{ height: 30, filter: 'grayscale(100%) brightness(180%)' }} />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', color: 'grey.500', pt: 2 }}>
        <Typography variant="body2">
          &copy; 2025 Farren Embroidery. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;