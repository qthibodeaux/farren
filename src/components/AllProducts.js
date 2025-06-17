import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton } from '@mui/material';

function AllProducts() {
  const products = [
    'Embroidered T-Shirts',
    'Embroidered Polo Shirts',
    'Embroidered Bags',
    'Embroidered Hats',
  ];

  return (
    <Box sx={{ textAlign: 'center', mb: 7 }}>
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 4 }}>
        All Products
      </Typography>
      <List sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, p: 0 }}>
        {products.map((product, index) => (
          <ListItem key={index} disablePadding sx={{ width: 'auto' }}>
            <ListItemButton
              component="a"
              href="#"
              sx={{
                display: 'block',
                py: 1.5,
                px: 3,
                bgcolor: 'background.paper',
                border: '1px solid #ddd',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'text.primary',
                fontWeight: 500,
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'grey.200',
                  color: 'primary.main',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                },
              }}
            >
              {product}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default AllProducts;