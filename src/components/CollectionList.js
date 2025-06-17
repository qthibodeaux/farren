import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const collections = [
  { name: 'For Father', image: 'https://via.placeholder.com/150/FFC107/FFFFFF?text=Father' },
  { name: 'For Mother', image: 'https://via.placeholder.com/150/E91E63/FFFFFF?text=Mother' },
  { name: 'For Couple', image: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=Couple' },
  { name: 'For Family', image: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Family' },
];

function CollectionList() {
  return (
    <Box sx={{ textAlign: 'center', mb: 7 }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 5 }}>
        Shop Our Collections
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {collections.map((collection, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 2,
                  border: '4px solid',
                  borderColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                <img src={collection.image} alt={collection.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Button variant="contained" href="#" sx={{ bgcolor: 'primary.main', color: 'white' }}>
                {collection.name}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CollectionList;