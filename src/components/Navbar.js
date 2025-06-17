// src/components/HeaderNavbar.js
import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Box,
  Drawer, List, ListItem, ListItemButton, ListItemText, Divider,
  useMediaQuery, useTheme, Link as MuiLink
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function HeaderNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '#home-section', icon: <HomeIcon /> },
    { name: 'FAQs', path: '#faqs-section', icon: <QuestionAnswerIcon /> },
    { name: 'Contact', path: '#contact-us-section', icon: <ContactMailIcon /> },
    { name: 'About', path: '#about-section', icon: <InfoIcon /> },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: theme.palette.primary.light }}> {/* Light Purple title */}
        Farren Embroidery
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'left', px: 3 }}
              component={MuiLink}
              href={item.path}
              onClick={(e) => {
                const targetElement = document.querySelector(item.path);
                if (targetElement) {
                  e.preventDefault();
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {React.cloneElement(item.icon, { sx: { color: theme.palette.primary.main } })} {/* Dark Purple icon */}
                <ListItemText primary={item.name} sx={{ color: theme.palette.text.primary }} /> {/* Light text */}
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left', px: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ShoppingCartIcon sx={{ color: theme.palette.primary.main }} /> {/* Dark Purple icon */}
              <ListItemText primary="Cart" sx={{ color: theme.palette.text.primary }} /> {/* Light text */}
            </Box>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar component="nav" position="sticky" sx={{ bgcolor: theme.palette.primary.main, boxShadow: '0 2px 4px rgba(0,0,0,0.2)', py: 1 }}> 
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, color: theme.palette.secondary.main, fontWeight: 900, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }} 
        >
          Farren Embroidery
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, color: theme.palette.secondary.main }} 
          >
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: theme.palette.text.primary, // Light text for nav items
                  textTransform: 'none',
                  fontSize: '1.05rem',
                  mx: 1,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: theme.palette.secondary.main, // Dark Gold on hover
                  }
                }}
                component={MuiLink}
                href={item.path}
                onClick={(e) => {
                    const targetElement = document.querySelector(item.path);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
              >
                {item.name}
              </Button>
            ))}
            <IconButton color="inherit" sx={{ ml: 2, color: theme.palette.secondary.main }}> {/* Dark Gold cart icon */}
              <ShoppingCartIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
              bgcolor: theme.palette.background.paper, // Dark Grey for drawer
              color: theme.palette.text.primary, // Light text for drawer
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
}

export default HeaderNavbar;