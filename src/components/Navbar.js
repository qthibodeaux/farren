import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      bgcolor: 'background.paper',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      display: 'flex',
      justifyContent: 'center' // Center the tabs
    }}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Home" href="#" />
        <Tab label="Embroidered Apparel" href="#" />
        <Tab label="FAQs" href="#faqs-section" />
        <Tab label="Contact" href="#contact-us-section" />
      </Tabs>
    </Box>
  );
}

export default Navbar;