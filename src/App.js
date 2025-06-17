import React from 'react';
import { Box, Container, Divider } from '@mui/material';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionList from './components/CollectionList';
import AllProducts from './components/AllProducts';
import WhyChooseUs from './components/WhyChooseUs';
import PersonalizationBanner from './components/PersonalizationBanner';
import SocialMediaSection from './components/SocialMediaSection';
import NewsletterBanner from './components/NewsletterBanner';
import CommunityEvents from './components/CommunityEvents';
import FAQsSection from './components/FAQsSection';
import WhyFarrenServices from './components/WhyFarrenServices';
import ContactUs from './components/ContactUs';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <Header />
      <Navbar />

      <main>
        <Hero />
        <Divider sx={{ my: 5 }} />
        <Container maxWidth="lg">
          <CollectionList />
          <Divider sx={{ my: 5 }} />
          <AllProducts />
          <Divider sx={{ my: 5 }} />
          <WhyChooseUs />
          <Divider sx={{ my: 5 }} />
        </Container>
        <PersonalizationBanner />
        <Divider sx={{ my: 5 }} />
        <Container maxWidth="lg">
          <SocialMediaSection />
          <Divider sx={{ my: 5 }} />
        </Container>
        <NewsletterBanner />
        <Divider sx={{ my: 5 }} />
        <Container maxWidth="lg">
          <CommunityEvents />
          <Divider sx={{ my: 5 }} />
        </Container>
        <FAQsSection /> {/* This component includes its own container/background */}
        <Divider sx={{ my: 5 }} />
        <Container maxWidth="lg">
          <WhyFarrenServices />
          <Divider sx={{ my: 5 }} />
          <ContactUs />
          <Divider sx={{ my: 5 }} />
          <InstagramSection />
        </Container>
      </main>

      <Divider sx={{ mt: 5 }} />
      <Footer />
    </Box>
  );
}

export default App;
