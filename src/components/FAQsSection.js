import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Who Am I?',
    answer: 'Farren Embroidery is dedicated to transforming your ideas into high-quality, personalized embroidered apparel and accessories.',
  },
  {
    question: 'What is custom embroidery?',
    answer: 'Custom embroidery is the process of decorating fabric or other materials with a needle and thread to create unique designs, logos, or text.',
  },
  {
    question: 'What designs do you have available?',
    answer: 'We offer a wide range of pre-designed templates, and we also specialize in bringing your custom designs to life. Simply provide us with your artwork!',
  },
  {
    question: 'What can I get my design embroidered on?',
    answer: 'You can get your design embroidered on a variety of apparel including T-shirts, polo shirts, hoodies, jackets, hats, bags, and more!',
  },
  {
    question: 'Do I get a discount for bulk orders?',
    answer: 'Yes, we offer competitive discounts for bulk orders. Please contact us for a custom quote based on your quantity.',
  },
  {
    question: 'How long will it take to receive my custom embroidery order?',
    answer: 'Production and shipping times vary depending on the complexity and size of your order. Typically, orders are completed and shipped within 7-14 business days. Expedited options are available.',
  },
  {
    question: 'Can I get product samples?',
    answer: 'For large orders, we can discuss sample options. Please reach out to our sales team for more information.',
  },
];

function FAQsSection() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      id="faqs-section" // Anchor for Navbar
      sx={{
        position: 'relative',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 8, // Add padding for content spacing
        overflow: 'hidden',
      }}
    >
      <div className="parallax-background"></div> {/* Uses CSS for parallax */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          p: { xs: 3, md: 5 },
          borderRadius: '10px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          maxWidth: 800,
          width: '100%',
          textAlign: 'left',
        }}
      >
        <Typography variant="h2" sx={{ color: 'primary.main', mb: 4, textAlign: 'center' }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              mb: 1.5,
              boxShadow: 'none', // Remove default MUI shadow, use custom if needed on hover/expanded
              '&:before': {
                display: 'none', // Remove the default accordion border-top on inactive
              },
              '&.Mui-expanded': {
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow when expanded
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{
                bgcolor: 'grey.50',
                borderRadius: '8px',
                '&.Mui-expanded': {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
                '&:hover': {
                  bgcolor: 'grey.100',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500, color: 'text.primary' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, py: 2, color: 'text.secondary', lineHeight: 1.7 }}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQsSection;