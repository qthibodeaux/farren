import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';

function ContactUs() {
  return (
    <Box id="contact-us-section" sx={{ textAlign: 'center', mb: 7 }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 5 }}>
        Contact Us
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Embroidered T-Shirts"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              bgcolor: 'background.paper',
              p: 4,
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              textAlign: 'left',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Your Message"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
              required
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 1.5,
                px: 3,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                alignSelf: 'flex-start',
              }}
            >
              Send Request
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;