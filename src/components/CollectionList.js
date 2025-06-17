import { Box, Typography, Grid, Button, useTheme } from '@mui/material';

const collections = [
  { name: 'For Father', image: 'https://img.staticdj.com/0ccc29f219c23aceced40f244c8e1f5a.webp' },
  { name: 'For Mother', image: 'https://img.staticdj.com/a984c621c73328b109579f87415cb9b3_420x.png' },
  { name: 'For Couple', image: 'https://img.staticdj.com/8bd113521d28dfc65f520f77e6a4b6b6_420x.webp' },
  { name: 'For Family', image: 'https://img.staticdj.com/3f03e54ab70438bc65378ecad7989327_420x.jpeg' },
];

function CollectionList() {
  const theme = useTheme();
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
      <Typography variant="h2" sx={{ color: 'primary.main', mb: 5 }}>
        Shop Our Collections
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {collections.map((collection, index) => (
          <Grid
            item
            xs={6}   // On extra-small screens (mobile), take 6 of 12 columns (2 items per row)
            sm={6}   // On small screens, also 6 columns (2 items per row)
            md={3}   // On medium screens and up, 3 columns (4 items per row)
            key={index}
          >
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
              <Button variant="contained" href="#" sx={{ bgcolor: 'secondary.main', color: 'black' }}>
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