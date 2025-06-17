import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Rating, Link, useTheme } from '@mui/material';

function ProductCard({ product }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 300, // Max width for individual card, adjusts based on grid
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)', // Lighter shadow for white background
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'white', // Explicitly white background
        color: theme.palette.whiteSectionText, // Dark text
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        }
      }}
    >
      {product.saveAmount && (
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            bgcolor: theme.palette.secondary.main, // Yellow background
            color: 'black', // Black text
            px: 1,
            py: 0.5,
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '0.8rem',
            zIndex: 1,
          }}
        >
          Save ${product.saveAmount}
        </Box>
      )}
      <CardMedia
        component="img"
        height="180" // Fixed height for media
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: 'cover',
          borderBottom: '1px solid #eee',
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Link href="#" underline="none" color="inherit">
          <Typography
            gutterBottom
            variant="body1" // Smaller title for product cards
            sx={{ fontWeight: 600, mb: 0.5, color: theme.palette.whiteSectionText }}
          >
            {product.title}
          </Typography>
        </Link>
        <Rating name="read-only" value={product.rating} readOnly size="small" sx={{ mb: 1, color: theme.palette.secondary.main }} />
        
      </CardContent>
    </Card>
  );
}

export default ProductCard;