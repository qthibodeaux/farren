import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
          Farren Embroidery
        </Typography>
        <IconButton color="inherit" aria-label="Cart">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;