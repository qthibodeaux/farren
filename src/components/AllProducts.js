import { Box, Typography, Grid, Link, useTheme } from '@mui/material'; // Add Link and useTheme
import ProductCard from './ProductCard'; // Import the new ProductCard component


function AllProducts() {
  const theme = useTheme();

  const productsData = [
    {
      id: 1,
      image: 'https://img.staticdj.com/076b01e3c3708581843a4218a1d79570_420x.webp',
      title: 'Custom Embroidered Sweatshirt',
      rating: 5,
      newPrice: '33.99',
      oldPrice: null,
      saveAmount: null,
    },
    {
      id: 2,
      image: 'https://img.staticdj.com/fb27b266a260495d558404742433c082_420x.webp',
      title: 'Custom Family Embroidered T-shirt',
      rating: 5,
      newPrice: '32.99',
      oldPrice: '60.99',
      saveAmount: 28.00,
    },
    {
      id: 3,
      image: 'https://img.staticdj.com/e0006b93af1e8afc2090078786914b8e_420x.jpg',
      title: 'Custom Photo Embroidered Sweatshirt',
      rating: 5,
      newPrice: '32.99',
      oldPrice: '59.99',
      saveAmount: 27.00,
    },
    {
      id: 4,
      image: 'https://img.staticdj.com/7d714c5b200f7f419249b365ad51c299_420x.jpg',
      title: 'Personalized Embroidered Dad T-shirt',
      rating: 5,
      newPrice: '33.90',
      oldPrice: '59.90',
      saveAmount: 26.00,
    },
    // Add more products here if needed
  ];

  return (
    <Box sx={{
        textAlign: 'center',
        mb: 7,
        bgcolor: theme.palette.lightGreySection, // Light Grey background
        color: theme.palette.text.darkOnLight, // Dark text
        py: 7,
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
     }}>
      <Box sx={{ display: 'inline-block', mb: 5, pb: 0.5, borderBottom: `3px solid ${theme.palette.primary.main}` }}>
        <Typography variant="h2" sx={{ color: theme.palette.whiteSectionText, m: 0 }}>
          All Products
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {productsData.map((product) => (
          <Grid
            item
            xs={6}   // On extra-small screens (mobile), take 6 of 12 columns (2 items per row)
            sm={6}   // On small screens, also 6 columns (2 items per row)
            md={4}   // On medium screens, 4 columns (3 items per row)
            lg={3}   // On large screens and up, 3 columns (4 items per row)
            key={product.id}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 5 }}>
        <Link href="#" underline="hover" sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            fontSize: '1.1rem',
            '&:hover': {
                color: theme.palette.secondary.main,
            }
        }}>
          View more &gt;
        </Link>
      </Box>
    </Box>
  );
}

export default AllProducts;